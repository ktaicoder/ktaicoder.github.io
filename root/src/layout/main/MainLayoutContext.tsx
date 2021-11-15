import { createContext } from 'react'

type MainLayoutContextData = {
    searchQuery?: string
}

const MainLayoutContext = createContext<MainLayoutContextData | undefined>(undefined)

export default MainLayoutContext
