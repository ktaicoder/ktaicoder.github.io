export interface IDivider {
    type: 'divider'
}

export interface ILabel {
    type: 'label'
    icon?: string
    title: string
    mt?: number
    sectionId?: string
}

export interface IMenu {
    type: 'menu'
    title: string
    href: string
    icon?: string
    sectionId?: string
}

export interface ISection {
    type: 'section'
    icon?: string
    title: string
    sectionId: string
    submenus: (IDivider | IMenu)[]
}

export type ISideMenuItem = ILabel | IDivider | IMenu | ISection

let seq = 0
const nextSectionId = () => 'section' + ++seq

const menusTemp: (ILabel | IDivider | IMenu | ISection)[] = [
    { type: 'divider' },

    {
        type: 'menu',
        icon: 'dashboard',
        title: 'Home',
        href: '/',
    },
    { type: 'divider' },
    { type: 'label', icon: 'description', title: '사용자 가이드', mt: 4 },

    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'adb',
        title: '코딩팩 OS 이미지 제작',
        submenus: [
            {
                type: 'menu',
                icon: 'usb',
                title: '0. 코딩팩 소개 및 조립',
                href: '/post-frame/codingpack-how-to-intro',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '0. 터미널 여는 법',
                href: '/post-frame/codingpack-how-to-open-terminal',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '1. OS 이미지 굽기',
                href: '/codingpack/os-image-guide',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '2. SD 카드 확장하기',
                href: '/post-frame/codingpack-how-to-expand-sdcard',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '3. 네트워크 연결하기',
                href: '/post-frame/codingpack-how-to-config-network',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '4. 코딩팩 업데이트 하기',
                href: '/post-frame/codingpack-how-to-codingpack-update',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '5. 시스템 초기화',
                href: '/post-frame/codingpack-how-to-system-reset',
            },
            // {
            //     type: 'menu',
            //     icon: 'usb',
            //     title: '시스템 초기화',
            //     href: '/codingpack/system-reset',
            // },
            {
                type: 'menu',
                icon: 'usb',
                title: '6. 시스템 복구',
                href: '/post-frame/codingpack-how-to-system-rescue',
            },
        ],
    },

    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'adb',
        title: 'PC 프로그램',
        submenus: [
            {
                type: 'menu',
                icon: 'usb',
                title: 'PC 프로그램 소개',
                href: '/post-frame/hw-pc-intro',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '코딩팩 설정하기',
                href: '/post-frame/hw-pc-how-to-codingpack-setup',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '코딩팩 설정시 문제 해결',
                href: '/post-frame/hw-pc-codingpack-setup-help',
            },
        ],
    },
    { type: 'label', icon: 'terminal', title: '개발자 가이드', mt: 4 },
    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'adb',
        title: 'PC 프로그램 개발자',
        submenus: [
            {
                type: 'menu',
                icon: 'usb',
                title: '개발환경 및 개요',
                href: '/post-frame/hw-pc-dev-how-to-setup-environment',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '하드웨어 추가 절차',
                href: '/post-frame/hw-pc-dev-how-to-add-new-hw',
            },
            {
                type: 'menu',
                icon: 'usb',
                title: '소프트웨어 배포 안내',
                href: '/post-frame/hw-pc-dev-how-to-publish',
            },
        ],
    },
]

// 라우터 URL로 수정하고, 섹션의 메뉴에는 sectionId를 설정한다
function fixHref(item: ISideMenuItem): ISideMenuItem {
    if (item.type === 'section') {
        item.submenus.forEach((sub) => {
            if (sub.type === 'menu') {
                sub.sectionId = item.sectionId
            }
        })
    }
    return item
}

// 전체 링크를 라우터 URL로 수정
menusTemp.forEach((it) => fixHref(it))

// assign section ids
// 섹션 제목을 섹션의 ID로 설정한다.
// const menus: ISideMenuItem[] = menusTemp.map((menu) => {
//     if (menu.type === 'section') {
//         return { ...menu, sectionId: menu.title }
//     }
//     return menu
// })

const menus: ISideMenuItem[] = menusTemp

export const isCurrentMenu = (menuHref: string, currentPath: string | undefined | null): boolean => {
    // routerPath:/           일때, menuHref:/jobs             path:/faq
    // routerPath:/aimk-admin 일때, menuHref:/aimk-admin/jobs  path:/faq
    if (!currentPath) return false

    if (currentPath === '/') return menuHref === '/'
    if (menuHref === '/') return menuHref === currentPath
    return currentPath.startsWith(menuHref)
}

export const isCurrentSection = (sectionId: string, pathkey: string | null | undefined): boolean => {
    if (!pathkey) return false
    return menusTemp
        .filter((it) => it.type === 'section' && it.sectionId === sectionId)
        .some((it) => {
            const section = it as ISection
            const isYes = section.submenus.some((sub) => sub.type === 'menu' && isCurrentMenu(sub.href, pathkey))
            // if (isYes) console.log(`current sectionId = ${sectionId} , pathkey = ${pathkey}`)
            return isYes
        })
}

export { menus }
