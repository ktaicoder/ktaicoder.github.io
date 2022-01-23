import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from '@mui/icons-material'
import { Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import { useWindowScroll } from 'react-use'
import { SIDEMENU_WIDTH } from '../../main-layout-constants'

interface AppBarProps extends MuiAppBarProps {
    shift: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'shift',
})<AppBarProps>(({ theme, shift }) => ({
    zIndex: theme.zIndex.drawer + (shift ? 1 : -1),
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#fff',
    color: '#FFF',
    ...(shift && {
        width: `calc(100% - ${SIDEMENU_WIDTH}px)`,
        marginLeft: SIDEMENU_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!shift && {
        '& .MuiToolbar-root': {
            paddingLeft: theme.spacing(3.5),
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(3),
            },
        },
    }),
}))

/**
 * 대시보드 상단 Topbar
 */
type Props = {
    title: string
    className?: string
    isSidebarOpen: boolean
    onClickMenuButton?: any
}

export default function Topbar(props: Props) {
    const { title = 'No title', isSidebarOpen, onClickMenuButton } = props
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { y: windowScrollY } = useWindowScroll()
    const shift = isSidebarOpen && !smDown ? true : false
    // console.log('windowScrollY=', windowScrollY)
    const elevation = windowScrollY > 10 ? 1 : 0
    return (
        <AppBar
            position="fixed"
            shift={shift}
            elevation={elevation}
            sx={{ background: elevation === 0 ? '#fafafa' : '#fff' }}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        onClick={onClickMenuButton}
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            color: '#000',
                            // ...(isSidebarOpen && { display: 'none' }),
                            marginRight: '16px',
                        }}
                    >
                        {isSidebarOpen ? <MenuOpenIcon htmlColor="#000" /> : <MenuIcon htmlColor="#000" />}
                    </IconButton>
                    <Typography
                        variant="subtitle1"
                        noWrap
                        component="div"
                        sx={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#000',
                            opacity: elevation === 0 ? 0 : 1,
                            transition: '0.5s',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
