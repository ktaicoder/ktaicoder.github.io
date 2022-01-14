import { ListItemIcon, ListItemText, SxProps } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { SimpleSxProps } from 'src/lib/sx-props'
import {
    ICON_COLOR,
    ICON_COLOR_ACTIVE,
    SIDEMENU_BG_COLOR_ACTIVE,
    SIDEMENU_BG_COLOR_HOVER,
    SIDEMENU_BORDER_COLOR_ACTIVE,
    SIDEMENU_FG_COLOR,
    SIDEMENU_FG_COLOR_ACTIVE,
} from '../../main-layout-constants'
import { IMenu } from '../../sidebar-menu-define'
import ListItemLink from './ListItemLink'
import MenuIcon from './MenuIcon'

type Props = {
    sx?: SxProps
    className?: string
    menu: IMenu
    active: boolean
    onLinkClick?: (href: string) => void
}

const rootSx: SimpleSxProps = {
    display: 'flex',
    pl: 2,
    pr: 1,
    '& em': {
        fontStyle: 'normal',
        color: 'yellow',
        mr: 0.5,
    },
    '&:hover': {
        backgroundColor: SIDEMENU_BG_COLOR_HOVER,
    },

    '& .MuiListItemText-root': {
        color: SIDEMENU_FG_COLOR,
        fontWeight: 500,
        ml: 0,
        '& .MuiListItemText-primary': {
            fontSize: '0.85rem',
        },
    },

    '& .MenuItem-iconBox': {
        minWidth: 32,
    },
    '& .MenuItem-iconBox .MenuItem-icon': {
        color: ICON_COLOR,
    },

    '&.Mui-active': {
        backgroundColor: SIDEMENU_BG_COLOR_ACTIVE,
        borderLeft: `0px solid ${SIDEMENU_BORDER_COLOR_ACTIVE}`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        mr: 2,
        '& .MuiListItemText-root': {
            color: SIDEMENU_FG_COLOR_ACTIVE,
            fontWeight: 700,
            ml: 0,
        },
        '& .MenuItem-iconBox .MenuItem-icon': {
            color: ICON_COLOR_ACTIVE,
        },
    },
}
export default function MenuItem(props: Props) {
    const { sx, className, menu, active, onLinkClick } = props
    const { icon, title, href } = menu

    return (
        <ListItemLink
            href={href}
            replace
            onClick={() => onLinkClick?.(href)}
            className={clsx('MenuItem-root', className, {
                'Mui-active': active,
            })}
            sx={[rootSx, ...(Array.isArray(sx) ? sx : [sx ?? false])]}
        >
            {icon && (
                <ListItemIcon className="MenuItem-iconBox">
                    <MenuIcon className="MenuItem-icon" iconName={icon} />
                </ListItemIcon>
            )}
            <ListItemText primary={title} />
        </ListItemLink>
    )
}
