import { EventTypes } from './common'
import { OpenPostDialogEvent } from './OpenPostDialogEvent'
import { OpenVideoDialogEvent } from './OpenVideoDialogEvent'

/**
 * 커스텀 이벤트
 * 사용예시) CustomEvents.post.openDialog.send({postId:1234})
 */
export class CustomEvents {
    static post = {
        openDialog: OpenPostDialogEvent,
    }

    static video = {
        openDialog: OpenVideoDialogEvent,
    }

    static Types = EventTypes
}
