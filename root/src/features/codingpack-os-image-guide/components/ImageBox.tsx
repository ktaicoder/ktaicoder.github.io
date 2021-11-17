import { Box, BoxProps, Typography } from '@mui/material'

type Props = {
    caption?: string
} & BoxProps

export default function ImageBox(props: Props) {
    const { caption, style, ...restProps } = props
    return (
        <Box>
            <Box
                pt={3}
                pb={3}
                pl={4}
                pr={4}
                {...restProps}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // border: '1px solid #ddd',
                    // background: 'linear-gradient(#f0f0f0, #fbfbfb)',
                    background: '#f5f5f5',
                    borderRadius: 2,
                    ...style,
                }}
            />
            {caption && (
                <Box mt={1} textAlign="center">
                    <Typography variant="caption">{caption}</Typography>
                </Box>
            )}
        </Box>
    )
}
