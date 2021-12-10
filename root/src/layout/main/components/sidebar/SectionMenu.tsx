import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
    Collapse,
    Divider,
    Box,
    List,
    ListItemButton as MuiListItemButton,
    ListItemButtonProps as MuiListItemButtonProps,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import {
    DIVIDER_COLOR,
    ICON_COLOR,
    ICON_COLOR_ACTIVE,
    SIDEMENU_BG_COLOR_HOVER,
    SIDEMENU_FG_COLOR,
} from '../../main-layout-constants'
import { isCurrentMenu, ISection } from '../../sidebar-menu-define'
import MenuIcon from './MenuIcon'
import MenuItem from './MenuItem'

type Props = {
    section: ISection
    expanded: boolean
    currentHref?: string
    active: boolean
    indent?: boolean
    onClickSection?: () => void
    onClickLink?: () => void
}
const ListItemButton = styled(MuiListItemButton, {
    shouldForwardProp: (p) => p !== 'active' && p !== 'expand',
})<MuiListItemButtonProps & { active: boolean; expand: boolean }>(({ theme, active, expand }) => {
    return {
        '&:hover': {
            backgroundColor: SIDEMENU_BG_COLOR_HOVER,
        },
        '& .MuiListItemText-root': {
            color: SIDEMENU_FG_COLOR,
            marginLeft: theme.spacing(1),
        },
        '& .MuiListItemIcon-root': {
            color: ICON_COLOR,
        },
        ...(active &&
            expand && {
                borderTop: `1px solid ${DIVIDER_COLOR}`,
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
            }),

        '& .MuiIcon-root.sectionIndicator': {
            color: active ? ICON_COLOR_ACTIVE : 'rgba(255,255,255,0.5)',
            marginRight: theme.spacing(1),
        },

        '& + &': {
            my: '1px',
        },
    }
})

export default function SectionMenu(props: Props) {
    const {
        section,
        active,
        onClickSection: onSectionClick,
        expanded = false,
        currentHref,
        onClickLink: onLinkClick,
    } = props

    return (
        <>
            <ListItemButton
                onClick={onSectionClick}
                active={active}
                expand={expanded}
                sx={{
                    pl: 2,

                    ...(expanded && {
                        background: 'rgba(0,0,0,0.1)',
                    }),
                }}
            >
                {section.icon && (
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <MenuIcon
                            iconName={section.icon}
                            sx={{ fontSize: '1.3rem', color: expanded ? '#4fc3f7' : '#e1f5fe' }}
                        />
                    </ListItemIcon>
                )}
                <ListItemText
                    primary={section.title}
                    sx={{
                        fontWeight: active ? 600 : 400,
                        '& .MuiListItemText-primary': {
                            fontSize: '0.85rem',
                            color: active ? '#4fc3f7' : '#e1f5fe',
                        },
                    }}
                />
                {expanded ? (
                    <KeyboardArrowUpIcon sx={{ color: active ? 'primary.main' : '#bbb' }} />
                ) : (
                    <KeyboardArrowDownIcon sx={{ color: active ? 'primary.main' : '#bbb' }} />
                )}
            </ListItemButton>
            <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    boxSizing: 'border-box',
                    mr: 0,
                    ...(expanded && {
                        background: 'rgba(0,0,0,0.05)',
                    }),
                }}
            >
                <List
                    disablePadding
                    sx={{
                        '& > .MuiListItem-root': {
                            pl: 5,
                        },
                    }}
                >
                    {section.submenus?.map((menu, idx) => {
                        if (menu.type === 'divider') {
                            return <Divider key={idx} />
                        }
                        return (
                            <MenuItem
                                key={menu.href + idx}
                                menu={menu}
                                onLinkClick={onLinkClick}
                                active={isCurrentMenu(menu.href, currentHref)}
                            />
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}
