import { Box, ButtonBase, Stack, SxProps } from '@mui/material'
import clsx from 'clsx'
import { flatSx } from 'src/lib/sx-props'
import { PyExample } from './example-types'

type Props = {
    sx?: SxProps
    className?: string
    index: number
    example: PyExample
    selected?: boolean
    onClick?: (example: PyExample) => void
}
export default function PyExampleRow(props: Props) {
    const { sx, className, index, example, onClick, selected = false } = props

    const { label, hideLabel = false, title } = example
    return (
        <ButtonBase
            className={clsx('PyExampleRow-root', className, {
                'Mui-selected': selected,
            })}
            component="div"
            onClick={() => onClick?.(example)}
            sx={flatSx(
                {
                    width: '100%',
                    pl: 0.5,
                    borderRadius: 1,
                    '& .PyExampleRow-num': {
                        color: '#111',
                        bgcolor: '#eee',
                        textAlign: 'center',
                        border: '1px solid #f0f0f0',
                        borderRadius: 1,
                        width: 80,
                        fontSize: '0.8rem',
                        py: '4px',
                    },
                    '& .PyExampleRow-title': {
                        fontSize: '0.85rem',
                    },
                    '&.Mui-selected': {
                        '& .PyExampleRow-num': {
                            bgcolor: 'primary.main',
                            color: '#fff',
                        },
                        '& .PyExampleRow-title': {
                            color: 'primary.main',
                            fontWeight: 'bold',
                        },
                    },
                },
                sx,
            )}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                    width: '100%',
                }}
            >
                {!hideLabel && <Box className="PyExampleRow-num">{label}</Box>}
                <Box flex={1} className="PyExampleRow-title">
                    {title}
                </Box>
            </Stack>
        </ButtonBase>
    )
}
