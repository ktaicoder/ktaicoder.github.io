import { useEffect, useRef } from 'react'

const useImageViewerByImageElements = (
    elements: HTMLImageElement[],
    onClick: (clickedImageUrl: string, allImageUrls: string[]) => void,
) => {
    const clickFnRef = useRef<any | null>(null)
    useEffect(() => {
        clickFnRef.current = onClick
    }, [onClick])

    useEffect(() => {
        const imgElements = elements
        const imageUrls: string[] = []
        for (let i = 0; i < imgElements.length; i++) {
            const img = imgElements[i] as HTMLImageElement
            imageUrls.push(img.src)
        }

        const onImageClick = (event: any) => {
            const img = event.target as HTMLImageElement
            clickFnRef.current?.(img.src, imageUrls)
        }

        for (let i = 0; i < imgElements.length; i++) {
            imgElements[i].addEventListener('click', onImageClick)
        }

        return () => {
            const items = elements
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('click', onImageClick)
            }
        }
    }, [elements])
}
export default useImageViewerByImageElements
