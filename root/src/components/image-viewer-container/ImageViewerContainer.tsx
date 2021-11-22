import useImageViewerByImageElements from 'src/hooks/useImageViewerByImageElements'
import { useEffect, useState } from 'react'
import ImageViewLightbox, { ImageViewLightboxProps } from '../image-view-lightbox/ImageViewLightbox'

function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max)
}

type DialogId = 'ImageViewLightbox'

type Props = {
    /**
     * 해당 셀렉터로 이미지를 찾는다.
     * img 태그 셀렉터만 지원한다
     */
    cssSelector: string

    /**
     * 이전/다음 이미지를 지원할지 여부
     */
    multiple: boolean

    /**
     * 값이 변경되면 이미지 목록을 다시 체크한다
     */
    revision?: any

    /**
     * 이미지 뷰어가 열리거나 닫힐 때 알려주는 콜백
     */
    onOpen?: (opened: boolean) => void
}

/**
 * Lightbox 이미지 뷰어 컴포넌트
 * 다이얼로그
 * @param props
 * @returns
 */
export default function ImageViewerContainer(props: Props) {
    const { cssSelector, multiple, onOpen, revision = 0 } = props
    const [imageViewDialogProps, setImageViewDialogProps] = useState<Omit<ImageViewLightboxProps, 'open'>>()
    const [dialogId, setDialogId] = useState<DialogId>()
    const [imageElements, setImageElements] = useState<HTMLImageElement[]>([])

    useEffect(() => {
        let imgs: NodeListOf<Element> = document.querySelectorAll(cssSelector)
        const imgElements = Array.prototype.slice.call(imgs)
        setImageElements(imgElements as HTMLImageElement[])
    }, [cssSelector, revision])

    const _closeDialog = () => {
        setDialogId(undefined)
        setImageViewDialogProps(undefined)
    }

    // 이미지 뷰어 열기
    const _openImageViewDialog = (clickedImageUrl: string, allImageUrls: string[]) => {
        // console.log({ window_self: window.self.location.href, window_top: window.top?.location.href })
        if (multiple) {
            // 이전/다음을 지원하는 이미지 뷰어
            setDialogId('ImageViewLightbox')
            const startIndex = allImageUrls.indexOf(clickedImageUrl)
            setImageViewDialogProps({
                imageUrls: allImageUrls,
                startIndex: clamp(startIndex, 0, allImageUrls.length - 1),
                onClose: _closeDialog,
            })
        } else {
            // 이전/다음을 지원하지 않는 이미지 뷰어
            setDialogId('ImageViewLightbox')
            setImageViewDialogProps({
                imageUrls: [clickedImageUrl],
                startIndex: 0,
                onClose: _closeDialog,
            })
        }
    }

    useImageViewerByImageElements(imageElements, _openImageViewDialog)
    const opened = imageElements.length > 0 && dialogId === 'ImageViewLightbox'

    useEffect(() => {
        onOpen?.(opened)
    }, [opened, onOpen])

    if (imageElements.length > 0 && dialogId === 'ImageViewLightbox' && imageViewDialogProps) {
        return <ImageViewLightbox open={true} {...imageViewDialogProps} />
    }

    return null
}
