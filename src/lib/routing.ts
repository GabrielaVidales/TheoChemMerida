type RouteParams<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}` ? Param | RouteParams<`/${Rest}`> :
    T extends `${string}:${infer Param}` ? Param :
    never


type RouteWithParams<T extends string> = {
    url: T,
    build: (params: { [K in RouteParams<T>]: string | number }) => string
}

type RouteLeaf = string | RouteWithParams<string>

type RouteTree<T> = {
    [K in keyof T]:
    T[K] extends RouteLeaf ? T[K] :
    T[K] extends Record<string, unknown> ? RouteTree<T[K]> :
    never
} & {
    base: string
}

type ValidRoute =
    | string
    | RouteWithParams<string>
    | { [key: string]: ValidRoute }


function defineRoutes<T extends ValidRoute>(base: string = '', routes: T): RouteTree<T> {

    const result = routes as RouteTree<T> 
    result['base'] = base
    return result
}

const routeWithParam = <T extends string>(url: T) => ({
    url,
    build(this: { url: string }, params: { [K in RouteParams<T>]: string | number }) {
        let final = this.url

        Object.entries(params).forEach(([k, v]) => {
            final = final.replace(`:${k}`, String(v))

        })

        return final
    },
})


export const putas = defineRoutes('/', {
    index: '/asd',
    profiles: routeWithParam('perra/:id/putamadre'),
    mierdas: defineRoutes('profile', {
        coño: routeWithParam(':id')
    })
})

