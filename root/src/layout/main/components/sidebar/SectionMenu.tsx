import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import React from 'react'
import { SimpleSxProps } from 'src/lib/sx-props'
import {
    DIVIDER_COLOR,
    ICON_COLOR,
    ICON_COLOR_ACTIVE,
    SIDEMENU_BG_COLOR_HOVER,
    SIDEMENU_FG_COLOR,
} from '../../main-layout-constants'
import { isCurrentMenu, ISection } from '../../sidebar-menu-define'
import MenuItem from './MenuItem'

const MenuIcon = dynamic(() => import('./MenuIcon'))

type Props = {
    section: ISection
    expanded: boolean
    currentHref?: string
    active: boolean
    onClickSection?: () => void
    onClickLink?: () => void
}

const rootSx: SimpleSxProps = {
    pl: 2,
    '&.SectionMenu-expand': {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

    '&.SectionMenu-active.SectionMenu-expand': {
        borderTop: `1px solid ${DIVIDER_COLOR}`,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },

    '&:hover': {
        backgroundColor: SIDEMENU_BG_COLOR_HOVER,
    },

    '& .MuiListItemText-root': {
        color: SIDEMENU_FG_COLOR,
        ml: 1,
    },

    '& .SectionMenu-indicator.MuiSvgIcon-root': {
        color: 'rgba(255,255,255,0.5)',
    },

    '& .SectionMenu-iconBox': {
        minWidth: 32,
        '& .SectionMenu-icon': {
            fontSize: '1.3rem',
            color: ICON_COLOR, // '#e1f5fe',
        },
    },

    '&.SectionMenu-expand .SectionMenu-iconBox .SectionMenu-icon': {
        color: '#4fc3f7',
    },

    '& .SectionMenu-title': {
        fontWeight: 400,
        '& .MuiTypography-root': {
            fontSize: '0.85rem',
            color: '#e1f5fe',
        },
    },

    '&.SectionMenu-active': {
        '& .SectionMenu-indicator.MuiSvgIcon-root': {
            color: ICON_COLOR_ACTIVE,
        },
        '& .SectionMenu-title': {
            fontWeight: 600,
            '& .MuiTypography-root': {
                color: '#4fc3f7',
            },
        },
    },
}

const collapseRootSx: SimpleSxProps = {
    boxSizing: 'border-box',
    mr: 0,
    '&.SectionMenu-expand': {
        background: 'rgba(0,0,0,0.05)',
    },
}

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
                className={clsx('SectionMenu-root', {
                    'SectionMenu-active': active,
                    'SectionMenu-expand': expanded,
                })}
                sx={rootSx}
            >
                {section.icon && (
                    <ListItemIcon className="SectionMenu-iconBox">
                        <MenuIcon className="SectionMenu-icon" iconName={section.icon} />
                    </ListItemIcon>
                )}
                <ListItemText primary={section.title} className="SectionMenu-title" />
                {expanded ? (
                    <KeyboardArrowUpIcon className="SectionMenu-indicator" />
                ) : (
                    <KeyboardArrowDownIcon className="SectionMenu-indicator" />
                )}
            </ListItemButton>
            <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                className={clsx('SectionMenuCollapse-collapse', {
                    'SectionMenu-expand': expanded,
                })}
                sx={collapseRootSx}
            >
                <List disablePadding>
                    {section.submenus?.map((menu, idx) => {
                        if (menu.type === 'divider') {
                            // eslint-disable-next-line react/no-array-index-key
                            return <Divider key={idx} />
                        }
                        return (
                            <MenuItem
                                // eslint-disable-next-line react/no-array-index-key
                                key={menu.href + idx}
                                menu={menu}
                                sx={{ pl: 7 }}
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
