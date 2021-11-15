import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from '@mui/icons-material'
import { IconButton, InputBase, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { SIDEMENU_WIDTH } from '../../main-layout-constants'
import { styled, alpha } from '@mui/material/styles'
import { Box } from '@mui/system'

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

    const shift = isSidebarOpen && !smDown ? true : false
    return (
        <AppBar position="fixed" shift={shift}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        onClick={onClickMenuButton}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            // ...(isSidebarOpen && { display: 'none' }),
                            marginRight: '16px',
                        }}
                    >
                        {isSidebarOpen ? <MenuOpenIcon htmlColor="#fff" /> : <MenuIcon htmlColor="#f0f0f0" />}
                    </IconButton>
                    <Typography variant="subtitle1" noWrap component="div" sx={{ fontSize: '1.1rem' }}>
                        {title}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
