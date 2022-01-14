import { SIDEMENU_BG_COLOR, SIDEMENU_FG_COLOR } from '../../main-layout-constants'
import { SimpleSxProps } from 'src/lib/sx-props'

export const rootSx: SimpleSxProps = {
    position: 'relative',
    color: SIDEMENU_FG_COLOR,
    overflowX: 'hidden',

    '& > .MuiDivider-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        my: 1,
    },
    height: '100%',
    '::before': {
        position: 'absolute',
        content: "''",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: SIDEMENU_BG_COLOR,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // filter: 'blur(0.5px)',
    },

    '& .Sidebar-drawerHeader': {
        display: 'block',
        flexGrow: 1,
        px: 1,
        pt: '6px',
        borderRadius: 1,
        zIndex: 1,
        fontSize: '1.1rem',
        textDecoration: 'none',
    },
    '& .Sidebar-drawerHeaderText': {
        flexGrow: 1,
        color: '#fff',
        fontSize: '1.1rem',
        fontFamily: 'Noto Sans KR',
        fontWeight: 900,
        textDecoration: 'none',
    },
    '& .Sidebar-drawerHeaderChevronIcon': {
        color: SIDEMENU_FG_COLOR,
    },
    '& .Sidebar-label': {
        p: 0,
        mb: 0,
        ml: 1,
        position: 'relative',
        '& .MuiListItemText-root .MuiTypography-root': {
            // color: SIDEMENU_FG_COLOR,
            color: '#EA5504',
            fontSize: '0.75rem',
            display: 'inline-block',
            pl: 1,
            pt: '2px',
            pb: 0,
            border: '1px solid rgba(255,255,255,0.0)',
            borderRadius: '4px',
        },
        '&:before': {
            position: 'absolute',
            top: '50%',
            left: '0px',
            width: '16px',
            height: '0px',
            border: '0px dashed rgba(255,255,255,0.5)',
            zIndex: 1,
            content: '""',
        },
    },
    '& .SectionMenu-root + .SectionMenu-root': {
        mt: '1px',
    },
}
