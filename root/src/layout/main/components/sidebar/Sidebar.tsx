import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, ButtonBase, Divider, IconButton, List, ListItem, ListItemText, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { routerUrlOf } from 'src/lib/urls'
import useStore from 'src/store/useStore'
import { SIDEMENU_FG_COLOR } from '../../main-layout-constants'
import { IMenu, isCurrentMenu, isCurrentSection, ISection, menus } from '../../sidebar-menu-define'
import DrawerHeader from '../drawer-header/DrawerHeader'
import MenuItem from './MenuItem'
import SectionMenu from './SectionMenu'

const ALL_MENUS = menus

function Sidebar() {
    const theme = useTheme()
    const { pathname: pathkey } = useRouter()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { sidebarStore } = useStore()
    const _onClickLink = () => {
        if (smDown) {
            sidebarStore.setOpen(false)
        }
    }
    const isOpen = sidebarStore.isOpen

    return (
        <Box
            component="nav"
            sx={{
                color: SIDEMENU_FG_COLOR,
                '& > .MuiDivider-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    marginTop: 8,
                    marginBottom: 8,
                },
            }}
        >
            <DrawerHeader sx={{ justifyContent: 'flex-start' }}>
                <Box
                    component="a"
                    sx={{
                        display: 'block',
                        flexGrow: 1,
                        pl: 2,
                        pr: 1,
                        borderRadius: 1,
                        pt: '6px',
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                    }}
                    href={routerUrlOf('/')}
                >
                    <Box sx={{ fontSize: '0.85rem', color: '#444', fontWeight: 400 }}>AI 코딩블록</Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: '4px',
                            color: 'primary.main',
                            fontSize: '1.1rem',
                            fontFamily: 'Black Han Sans',
                            textDecoration: 'none',
                        }}
                    >
                        개발자 가이드
                    </Box>
                </Box>
                <IconButton
                    size="small"
                    onClick={sidebarStore.toggleOpen}
                    sx={{
                        color: SIDEMENU_FG_COLOR,
                    }}
                >
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <List disablePadding>
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
                        return <Divider key={idx} light />
                    } else if (item.type === 'label') {
                        return (
                            <ListItem
                                key={idx}
                                sx={{
                                    pl: 2,
                                    '& .MuiListItemText-root .MuiTypography-root': {
                                        color: SIDEMENU_FG_COLOR,
                                        opacity: 0.8,
                                    },
                                }}
                                dense
                            >
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
