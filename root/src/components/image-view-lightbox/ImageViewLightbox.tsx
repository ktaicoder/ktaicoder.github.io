import React, { useEffect, useMemo, useState } from 'react'
import { Box, BoxProps, Typography, Stack } from '@mui/material'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max)
}

export type ImageViewLightboxProps = {
    source?: string
    author?: string
    permission?: string
    open: boolean
    imageUrls: string[]
    startIndex: number
    title?: string // 삭제 예정
    disableEscKeydown?: boolean
    onClose: () => void
}

type ImageItem = {
    url: string
    prev?: string
    next?: string
}

/**
 * 이미지 URL목록을 링크드리스트로 만든다
 */
const makeLinkedList = (urls: string[]): ImageItem[] => {
    const list: ImageItem[] = []
    const total = urls.length
    for (let i = 0; i < total; i++) {
        list.push({
            url: urls[i],
            prev: i - 1 >= 0 ? urls[i - 1] : undefined,
            next: i + 1 < total ? urls[i + 1] : undefined,
        })
    }
    return list
}

export default function ImageViewLightbox(props: ImageViewLightboxProps) {
    const {
        source,
        author,
        permission,
        open,
        onClose,
        disableEscKeydown = false,
        title,
        imageUrls = [],
        startIndex = 0,
    } = props
    const [slidingIndex, setSlidingIndex] = useState(() => startIndex)
    const imageItems = useMemo(() => makeLinkedList(imageUrls), [imageUrls])

    const _handleClose = () => {
        onClose()
    }
    useEffect(() => {
        if (open) {
            if (!imageUrls || imageUrls.length === 0) {
                onClose()
            }
        }
    }, [open, onClose, imageUrls])

    const _handleMoveNextRequest = () => {
        setSlidingIndex(clamp(slidingIndex + 1, 0, imageItems.length - 1))
    }

    const _handleMovePrevRequest = () => {
        setSlidingIndex(clamp(slidingIndex - 1, 0, imageItems.length - 1))
    }

    useEffect(() => {
        if (disableEscKeydown) return
        const onKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === 'Escape') {
                ev.preventDefault()
                onClose()
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [disableEscKeydown, onClose])

    if (!open) {
        return null
    }

    const currentItem: ImageItem = imageItems[slidingIndex]
    const pageNumText = imageItems.length > 1 ? `${slidingIndex + 1} / ${imageItems.length}` : undefined

    const imageCaption = () => {
        return (
            <div>
                <p>{author}</p>
                <p>{permission}</p>
            </div>
        )
    }

    return (
        currentItem && (
            <Lightbox
                mainSrc={currentItem.url}
                prevSrc={currentItem.prev}
                nextSrc={currentItem.next}
                onMoveNextRequest={_handleMoveNextRequest}
                onMovePrevRequest={_handleMovePrevRequest}
                imageTitle={source}
                onCloseRequest={_handleClose}
                reactModalStyle={{ overlay: { zIndex: 1500 } }}
            />
        )
    )
}
