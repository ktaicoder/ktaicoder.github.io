import { EventTypes } from './common'
import { OpenPostDialogEvent } from './OpenPostDialogEvent'

/**
 * 커스텀 이벤트
 * 사용예시) CustomEvents.login.openDialog.send()
 */
export class CustomEvents {
    static post = {
        openDialog: OpenPostDialogEvent,
    }

    static Types = EventTypes
}
