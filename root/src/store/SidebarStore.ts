import { makeAutoObservable } from 'mobx'
import { allSectionIds } from 'src/layout/main/sidebar-menu-define'
import log from 'src/log'

/**
 * 사이드바 상태를 보관하는 mobx 스토어
 */
export default class SidebarStore {
    constructor() {
        makeAutoObservable(this)
    }

    /**
     * 열림 상태
     */
    isOpen = false

    /**
     * 자동 열림 완료 여부
     */
    isAutoOpenFinish = false

    /**
     * 펼쳐진 sectionId 목록
     */
    expandedSectionIds: string[] = [...allSectionIds]

    /**
     * 사이드바 열림 상태 변경
     * @param isOpen 열림 상태
     */
    setOpen = (isOpen: boolean) => {
        this.isOpen = isOpen
    }

    /**
     * 열림 상태 토글
     */
    toggleOpen = () => {
        log.debug(`toggleOpen() changed to ${!this.isOpen}`)
        this.isOpen = !this.isOpen
    }

    /**
     * 자동 열림 완료 여부 설정
     * @param isFinish 완료 여부
     */
    setAutoOpenFinish = (isFinish: boolean) => {
        this.isAutoOpenFinish = isFinish
    }

    /**
     * 왼쪽 메뉴 섹션 펼침
     * @param sectionId 펼칠 섹션 ID
     */
    expandSection = (sectionId: string) => {
        const idx = this.expandedSectionIds.indexOf(sectionId)
        if (idx < 0) {
            this.expandedSectionIds.push(sectionId)
        }
    }

    /**
     * 왼쪽 메뉴 섹션 접기
     * @param sectionId 펼칠 섹션 ID
     */
    foldSection = (sectionId: string) => {
        const idx = this.expandedSectionIds.indexOf(sectionId)
        if (idx >= 0) {
            this.expandedSectionIds.splice(idx, 1)
        }
    }

    /**
     * 왼쪽 메뉴 섹션 펼침 상태 토글
     * @param sectionId 토글 할 섹션 ID
     */
    toggleExpandSection = (sectionId: string) => {
        const idx = this.expandedSectionIds.indexOf(sectionId)
        if (idx >= 0) {
            this.expandedSectionIds.splice(idx, 1)
        } else {
            this.expandedSectionIds.push(sectionId)
        }
        log.debug('this.expandedSectionIds=', this.expandedSectionIds)
    }
}
