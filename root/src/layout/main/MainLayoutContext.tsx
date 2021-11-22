import { createContext, useContext } from 'react'

type MainLayoutContextData = {
    searchQuery?: string
    sidebarWidth: number
}

const MainLayoutContext = createContext<MainLayoutContextData | undefined>(undefined)

export function useMainLayoutContext(): MainLayoutContextData | undefined {
    const context = useContext(MainLayoutContext)
    return context as MainLayoutContextData
}

export default MainLayoutContext
