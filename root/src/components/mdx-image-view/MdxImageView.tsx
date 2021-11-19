import { Box, BoxProps, Typography } from '@mui/material'
import { useMemo } from 'react'
import { randomCssClassName } from 'src/lib/randomCssClassName'
import { routerUrlOf } from 'src/lib/urls'
import ImageViewerContainer from '../image-viewer-container/ImageViewerContainer'

type Props = { src: string; caption?: string } & Omit<BoxProps, 'src'>

export default function MdxImageView(props: Props) {
    const rootClassName = useMemo(() => randomCssClassName(), [])
    const { src, caption = '윈도우 도스창', sx, ...rest } = props
    return (
        <Box
            className={rootClassName}
            sx={{
                background: '#f0f0f0',
                borderRadius: 2,
                py: 2,
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
            <Box component="img" src={routerUrlOf(src)} sx={{ ...sx }} {...rest} alt={caption ?? ''} />
            <Typography variant="caption">{caption}</Typography>
            <ImageViewerContainer revision={rootClassName} cssSelector={`.${rootClassName} > img`} multiple={false} />
        </Box>
    )
}
