import { createContext, useContext, useState } from "react"

type UIContextValues = {
    isTopButtonDisabled: boolean,
    setTopButtonDisabled: (value: boolean) => void,
}

const UIContext = createContext<UIContextValues>(null)

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isTopButtonDisabled, setTopButtonDisabled] = useState(false)

    return (
        <UIContext.Provider value={{ isTopButtonDisabled, setTopButtonDisabled }}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => useContext(UIContext)
