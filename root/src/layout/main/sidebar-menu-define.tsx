import React from 'react'

type MatchFn = (path: string) => boolean

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
    title: React.ReactNode
    href: string
    icon?: string
    sectionId?: string
    match?: MatchFn
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
const nextSectionId = () => `section${++seq}`

const menusTemp: (ILabel | IDivider | IMenu | ISection)[] = [
    { type: 'divider' },

    {
        type: 'menu',
        icon: 'home',
        title: 'HOME',
        href: '/',
    },
    // {
    //     type: 'menu',
    //     icon: 'dashboard',
    //     title: 'AI 코디니 소개',
    //     href: '/coding-block-intro',
    // },

    { type: 'label', title: '사용자 가이드', mt: 1 },

    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'adb',
        title: '코디니팩 OS 이미지 제작',
        submenus: [
            {
                type: 'menu',
                title: '코디니팩 소개 및 조립',
                href: '/post-frame/codingpack-how-to-intro',
            },
            {
                type: 'menu',
                title: '터미널 여는 법',
                href: '/post-frame/codingpack-how-to-open-terminal',
            },
            {
                type: 'menu',
                title: (
                    <>
                        <em>1</em> OS 이미지 굽기
                    </>
                ),
                href: '/codingpack/os-image-guide',
            },
            {
                type: 'menu',
                title: (
                    <>
                        <em>2</em> SD 카드 확장하기
                    </>
                ),
                href: '/post-frame/codingpack-how-to-expand-sdcard',
            },
            {
                type: 'menu',
                title: (
                    <>
                        <em>3</em> 네트워크 연결하기
                    </>
                ),
                href: '/post-frame/codingpack-how-to-config-network',
            },
            {
                type: 'menu',
                title: (
                    <>
                        <em>4</em> 코디니팩 업데이트 하기
                    </>
                ),
                href: '/post-frame/codingpack-how-to-codingpack-update',
            },
            {
                type: 'menu',
                title: (
                    <>
                        <em>5</em> 시스템 초기화
                    </>
                ),
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
                title: '시스템 복구',
                href: '/post-frame/codingpack-how-to-system-rescue',
            },
        ],
    },
    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'adb',
        title: '코디니팩 파이썬',
        submenus: [
            {
                type: 'menu',
                title: '파이썬 예제 (NEW)',
                href: '/post-frame/codingpack-how-to-inside-python-ex0',
            },
            {
                type: 'menu',
                title: '파이썬 예제 (OLD)',
                href: '/post-frame/codingpack-how-to-python-ex0',
            },
            {
                type: 'menu',
                title: '파이썬 개발 환경',
                href: '/post-frame/codingpack-how-to-python-env',
            },
        ],
    },
    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'desktop',
        title: 'PC 프로그램',
        submenus: [
            {
                type: 'menu',
                title: 'PC 프로그램 소개',
                href: '/post-frame/hw-pc-intro',
            },
            {
                type: 'menu',
                title: '코디니팩 설정하기',
                href: '/post-frame/hw-pc-how-to-codingpack-setup',
            },
            {
                type: 'menu',
                title: '코디니팩 설정시 문제 해결',
                href: '/post-frame/hw-pc-codingpack-setup-help',
            },
            {
                type: 'menu',
                title: '오토런 가이드',
                href: '/post-frame/hw-pc-how-to-autorun',
            },
        ],
    },
    { type: 'label', title: '개발자 가이드', mt: 1 },
    {
        type: 'section',
        sectionId: nextSectionId(),
        icon: 'terminal',
        title: 'PC 프로그램 개발자',
        submenus: [
            {
                type: 'menu',
                title: '개발환경 및 개요',
                href: '/post-frame/hw-pc-dev-how-to-setup-environment',
            },
            {
                type: 'menu',
                title: '하드웨어 추가하기',
                href: '/post-frame/hw-pc-dev-how-to-add-new-hw',
            },
            {
                type: 'menu',
                title: '하드웨어 테스트하기',
                href: '/post-frame/hw-pc-dev-how-to-test-hw',
            },
            {
                type: 'menu',
                title: '소프트웨어 배포 안내',
                href: '/post-frame/hw-pc-dev-how-to-publish',
            },
        ],
    },
]

// 섹션의 메뉴에는 sectionId를 설정한다
function fixSectionId(item: ISideMenuItem): ISideMenuItem {
    if (item.type === 'section') {
        item.submenus.forEach((sub) => {
            if (sub.type === 'menu') {
                // eslint-disable-next-line no-param-reassign
                sub.sectionId = item.sectionId
            }
        })
    }
    return item
}

// fix section id
menusTemp.forEach((it) => fixSectionId(it))

const menus: ISideMenuItem[] = menusTemp
const allSectionIds = menus
    .map((it) => {
        if (it.type === 'section') {
            return it.sectionId
        }
        return null
    })
    .filter((it) => it)
    .map((it) => it as string)

export const isCurrentMenu = (menuHref: string, path: string | undefined | null, matchFn?: MatchFn): boolean => {
    if (!path) {
        return false
    }
    if (path === menuHref) return true

    // console.log('isCurrentMenu', { menuHref, path })
    if (matchFn) {
        return matchFn(path)
    }
    return path.startsWith(`${menuHref}/`)
}

export const isCurrentSection = (sectionId: string, pathkey: string | null | undefined): boolean => {
    if (!pathkey) return false
    return menus
        .filter((it) => it.type === 'section' && it.sectionId === sectionId)
        .some((it) => {
            const section = it as ISection
            const isYes = section.submenus.some(
                (sub) => sub.type === 'menu' && isCurrentMenu(sub.href, pathkey, sub.match),
            )
            // if (isYes) console.log(`current sectionId = ${sectionId} , pathkey = ${pathkey}`)
            return isYes
        })
}

export { menus, allSectionIds }
