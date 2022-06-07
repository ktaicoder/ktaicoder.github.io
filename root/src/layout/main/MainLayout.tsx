import { useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useMemo } from 'react'
import useStore from 'src/store/useStore'
import DrawerHeader from './components/drawer-header/DrawerHeader'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import { CONTENT_BG_COLOR, SIDEMENU_BG_COLOR, SIDEMENU_WIDTH } from './main-layout-constants'
import MainLayoutContext, { MainLayoutContextData } from './MainLayoutContext'

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'contentShift',
})<{
    contentShift: number
}>(({ theme, contentShift }) => ({
    flexGrow: 1,
    padding: theme.spacing(0, 0, 0, 0),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(contentShift !== 0 && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: contentShift,
    }),
    ...(contentShift === 0 && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: CONTENT_BG_COLOR,
}))

type Props = {
    title: string
    children?: React.ReactNode
}

function MainLayout(props: Props) {
    const { title, children } = props
    const { sidebarStore } = useStore()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('md'))
    const isSidebarOpen = sidebarStore.isOpen
    let contentShift = 0

    if (smDown) {
        contentShift = 0
    } else {
        // drawer가 close 상태에서도 너비를 차지하므로, 마이너스 방향으로 쉬프트
        contentShift = isSidebarOpen ? 0 : -SIDEMENU_WIDTH
    }

    const contextData = useMemo<MainLayoutContextData>(
        () => ({ sidebarWidth: isSidebarOpen ? SIDEMENU_WIDTH : 0 }),
        [isSidebarOpen],
    )

    return (
        <MainLayoutContext.Provider value={contextData}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
                <Topbar title={title} isSidebarOpen={isSidebarOpen} onClickMenuButton={sidebarStore.toggleOpen} />
                <Drawer
                    sx={{
                        width: SIDEMENU_WIDTH,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: SIDEMENU_WIDTH,
                            boxSizing: 'border-box',
                            backgroundColor: SIDEMENU_BG_COLOR,
                            color: 'white',
                        },
                    }}
                    variant={smDown ? 'temporary' : 'persistent'}
                    anchor="left"
                    open={isSidebarOpen}
                    onClose={() => sidebarStore.setOpen(false)}
                >
                    <Sidebar />
                </Drawer>

                <Main contentShift={contentShift}>
                    <DrawerHeader />
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        {children}
                    </Box>
                </Main>
            </Box>
        </MainLayoutContext.Provider>
    )
}

export default observer(MainLayout)
