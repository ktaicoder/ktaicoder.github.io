import { Box, SxProps, Typography } from '@mui/material'
import clsx from 'clsx'
import { flatSx } from 'src/lib/sx-props'
import { routerPush } from 'src/lib/urls'
import { EXAMPLE_DATAS } from './example-data'
import { PyExample } from './example-types'
import PyInsideExampleRow from './PyInsideExampleRow'
import { rootSx } from './style'

type Props = {
    sx?: SxProps
    className?: string
    exampleId: string // ex1,ex2,...
}
export default function PyInsideExampleLinkBox(props: Props) {
    const { sx, className, exampleId } = props
    const handleClickRow = (example: PyExample) => {
        routerPush(example.link)
    }

    return (
        <Box className={clsx('PyInsideExampleLinkBox-root', className)} sx={flatSx(rootSx, sx)}>
            <Typography variant="body2" ml={3} color="#999" pb={1}>
                EXAMPLES
            </Typography>
            <Box sx={{ borderTop: '1px solid #ddd' }}>
                {EXAMPLE_DATAS.map((ex, i) => (
                    <PyInsideExampleRow
                        index={i}
                        example={ex}
                        selected={exampleId === ex.id}
                        onClick={handleClickRow}
                        key={ex.id}
                    />
                ))}
            </Box>
        </Box>
    )
}
