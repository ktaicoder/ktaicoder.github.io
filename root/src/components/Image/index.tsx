import { Box, BoxProps } from '@mui/material'

export default function Image(props: BoxProps<'img'>) {
    const { src, alt = '', ...restProps } = props

    return <Box {...restProps} component="img" src={src} alt={alt} />
}
