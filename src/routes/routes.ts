type RouteTree<T> = {
    [K in keyof T]:
    T[K] extends { build: (...args: any) => any } // 👈 CLAVE
    ? T[K]
    : T[K] extends string
    ? string
    : T[K] extends object
    ? RouteTree<T[K]>
    : never
}


type RouteParams<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | RouteParams<`/${Rest}`> : T extends `${string}:${infer Param}`
    ? Param : never


function createRouteGroup<T extends Record<string, any>>(
    base: string,
    routes: T
): RouteTree<T> & {
    asValues(): string[]
} {
    const result: any = {}

    for (const key in routes) {
        const value = routes[key]

        if (typeof value === "string") {
            result[key] = `${base}${value}`
        } else if (value && typeof value === "object" && "build" in value) {
            result[key] = {
                ...value,
                url: `${base}${value.url}`,
            }
        } else if (value && typeof value === "object") {
            result[key] = createRouteGroup(
                base + (value.base ?? ""),
                value.routes ?? value
            )
        }
    }

    result['asValues'] = () => {
        return Object.values(result)
            .flatMap(value => {
                const hasValues = typeof (value as any)?.asValues === 'function'
                if (hasValues) {
                    return (value as any).asValues()
                }
                return value
            })
            .filter(value => typeof value === 'string' && value !== '/')
    }

    return result
}


const withBuilder = <T extends string>(url: T) => ({
    url,
    build(this: { url: string }, params: { [K in RouteParams<T>]: string | number }) {
        let final = this.url

        Object.entries(params).forEach(([k, v]) => {
            final = final.replace(`:${k}`, String(v))
        })

        return final
    },
})


export const routes = createRouteGroup('', {
    index: '/',
    people: createRouteGroup('/people', {
        index: '',
        profile: withBuilder('/profile/:slug')
    }),
    research: '/our-research',
    projects: '/software',
    gallery: '/gallery',
    events: '/events',
    contact: '/contact',
})
