import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, IconButton, List, ListItem, ListItemText, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { routerUrlOf } from 'src/lib/urls'
import useStore from 'src/store/useStore'
import { IMenu, isCurrentMenu, isCurrentSection, ISection, menus } from '../../sidebar-menu-define'
import DrawerHeader from '../drawer-header/DrawerHeader'
import MenuIcon from './MenuIcon'
import MenuItem from './MenuItem'
import SectionMenu from './SectionMenu'
import { rootSx } from './style'

const ALL_MENUS = menus

function Sidebar() {
    const theme = useTheme()
    const { asPath: pathkey } = useRouter()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { sidebarStore } = useStore()
    const _onClickLink = () => {
        if (smDown) {
            sidebarStore.setOpen(false)
        }
    }

    return (
        <Box component="nav" className="Sidebar-root" sx={rootSx}>
            <DrawerHeader sx={{ justifyContent: 'flex-start' }}>
                <Box component="a" className="Sidebar-drawerHeader" href={routerUrlOf('/')}>
                    <Box className="Sidebar-drawerHeaderText">AI 코딩블록 가이드</Box>
                </Box>
                <IconButton size="small" className="Sidebar-drawerHeaderChevronIcon" onClick={sidebarStore.toggleOpen}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <List disablePadding className="Sidebar-list" sx={{ overflowX: 'hidden' }}>
                {ALL_MENUS.map((item, idx) => {
                    if (item.type === 'menu') {
                        return (
                            <MenuItem
                                key={idx}
                                menu={item as IMenu}
                                onLinkClick={_onClickLink}
                                active={isCurrentMenu(item.href, pathkey)}
                            />
                        )
                    } else if (item.type === 'divider') {
                        return (
                            <Box
                                key={idx}
                                className="Sidebar-divider"
                                sx={{ height: '0px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                            />
                        )
                    } else if (item.type === 'label') {
                        return (
                            <ListItem
                                key={idx}
                                className="Sidebar-label"
                                sx={{
                                    mt: item.mt,
                                }}
                                dense
                            >
                                {item.icon && (
                                    <MenuIcon iconName={item.icon} sx={{ fontSize: '0.9rem', color: '#bbb' }} />
                                )}

                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                        )
                    } else if (item.type === 'section') {
                        const section = item as ISection
                        return (
                            <SectionMenu
                                key={idx}
                                active={isCurrentSection(section.sectionId, pathkey)}
                                section={section}
                                currentHref={pathkey}
                                expanded={sidebarStore.expandedSectionIds.includes(section.sectionId)}
                                onClickLink={_onClickLink}
                                onClickSection={() => sidebarStore.toggleExpandSection(section.sectionId)}
                            />
                        )
                    } else {
                        return <div>{JSON.stringify(item)}</div>
                    }
                })}
            </List>
        </Box>
    )
}

export default observer(Sidebar)
