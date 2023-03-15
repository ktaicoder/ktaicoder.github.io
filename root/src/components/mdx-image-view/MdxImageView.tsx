import { Box, BoxProps, Typography } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { SimpleSxProps } from 'src/lib/sx-props'
import { routerUrlOf } from 'src/lib/urls'
import ImageViewerContainer from '../image-viewer-container/ImageViewerContainer'

type Props = {
    src: string
    transparentBg?: boolean
    caption?: string
    source?: string
} & Omit<BoxProps, 'src'>

const rootSx: SimpleSxProps = {
    mt: 2,
    mb: 4,
    pt: 2,
    pb: 1,
    px: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '&.MdxImageView-transparentBg': {
        pt: 0,
        pb: 0,
        px: 0,
        '& .MdxImageView-imageBox': {
            backgroundColor: 'transparent',
            pb: 0,
        },
        '& .MdxImageView-caption': {
            mt: 1,
        },
    },

    '& .MdxImageView-imageBox': {
        py: 2,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
    },

    '& .MdxImageView-caption': {
        mt: 1,
        color: '#666',
    },
}

export default function MdxImageView(props: Props) {
    const { src, caption, transparentBg = false, sx, ...rest } = props
    const rootRef = useRef<HTMLDivElement>()
    const [enabled, setEnabled] = useState(false)
    const [revision, setRevision] = useState(0)

    useEffect(() => {
        if (!rootRef.current) return
        const root = rootRef.current as HTMLElement | null
        if (!root) return
        setRevision(Date.now())
        setEnabled(window.self === window.top || window.parent === window.top)
    }, [])

    return (
        <Box
            ref={rootRef}
            className={clsx('MdxImageView-root', {
                'MdxImageView-transparentBg': transparentBg,
            })}
            sx={rootSx}
        >
            <Box className="MdxImageView-imageBox">
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf(src)}
                    sx={{ maxWidth: '100%', ...sx, objectFit: 'contain' }}
                    {...rest}
                    alt={caption ?? ''}
                />
            </Box>

            {caption && (
                <Typography variant="caption" className="MdxImageView-caption">
                    {caption}
                </Typography>
            )}

            {enabled && rootRef.current && (
                <ImageViewerContainer
                    revision={revision}
                    parentElement={rootRef.current}
                    cssSelector="img.lightbox"
                    multiple={false}
                />
            )}
        </Box>
    )
}
