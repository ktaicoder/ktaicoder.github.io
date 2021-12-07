import { ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
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
    menu: IMenu
    active: boolean
    onLinkClick?: (href: string) => void
}

export default function MenuItem(props: Props) {
    const { menu, active, onLinkClick } = props
    const { icon, title, href } = menu

    return (
        <ListItemLink
            href={href}
            replace
            onClick={() => onLinkClick?.(href)}
            sx={{
                display: 'flex',
                pl: 2,
                pr: 1,
                '&:hover': {
                    backgroundColor: SIDEMENU_BG_COLOR_HOVER,
                },

                '& .MuiListItemText-root': {
                    color: active ? SIDEMENU_FG_COLOR_ACTIVE : SIDEMENU_FG_COLOR,
                    fontWeight: active ? 700 : 500,
                    // marginLeft: active ? '-4px' : 0,
                    ml: 0,
                    '& .MuiListItemText-primary': {
                        fontSize: '0.85rem',
                    },
                },

                ...(active && {
                    backgroundColor: SIDEMENU_BG_COLOR_ACTIVE,
                    borderLeft: `0px solid ${SIDEMENU_BORDER_COLOR_ACTIVE}`,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    mr: 2,
                }),
            }}
        >
            {icon && (
                <ListItemIcon sx={{ minWidth: 32 }}>
                    <MenuIcon
                        iconName={icon}
                        sx={{ fontSize: '1.1rem', color: active ? ICON_COLOR_ACTIVE : ICON_COLOR }}
                    />
                </ListItemIcon>
            )}
            <ListItemText primary={title} />
        </ListItemLink>
    )
}
