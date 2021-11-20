import { Box, BoxProps, Typography } from '@mui/material'
import { useEffect, useState, useRef } from 'react'
import { randomCssClassName } from 'src/lib/randomCssClassName'
import { routerUrlOf } from 'src/lib/urls'
import ImageViewerContainer from '../image-viewer-container/ImageViewerContainer'

type Props = { src: string; caption?: string } & Omit<BoxProps, 'src'>

export default function MdxImageView(props: Props) {
    const { src, caption, sx, ...rest } = props
    const boxRef = useRef()
    const [rootClassName, setRootClassName] = useState<string>()

    useEffect(() => {
        if (!boxRef.current) return
        const root = boxRef.current as HTMLElement
        const className = randomCssClassName('imageBox')
        root.classList.add(className)
        setRootClassName(className)
    }, [])

    return (
        <Box
            ref={boxRef}
            sx={{
                background: '#f0f0f0',
                borderRadius: 2,
                pt: 2,
                pb: 1,
                px: 2,
                mt: 2,
                mb: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                    maxWidth: '100%',
                },
            }}
        >
            <Box
                component="img"
                className="lightbox"
                src={routerUrlOf(src)}
                sx={{ ...sx }}
                {...rest}
                alt={caption ?? ''}
            />
            {caption && (
                <Typography variant="caption" sx={{ mt: 1 }}>
                    {caption}
                </Typography>
            )}

            {rootClassName && (
                <ImageViewerContainer
                    revision={boxRef.current}
                    cssSelector={`.${rootClassName} > .lightbox`}
                    multiple={false}
                />
            )}
        </Box>
    )
}
