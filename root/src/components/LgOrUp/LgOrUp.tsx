import { Theme, useMediaQuery } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode | React.ReactNode[]
}
export default function LgOrUp(props: Props) {
    const { children } = props
    const matched = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
    if (!matched || !children) return null
    return children
}
