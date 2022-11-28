import { SimpleSxProps } from 'src/lib/sx-props'

export const rootSx: SimpleSxProps = {
    width: '100%',
    maxWidth: 400,
    border: '1px solid #ddd',
    borderRadius: 1,
    display: 'block',
    mx: 'auto',
    p: 1,
    '& .PyExampleRow-root': {
        py: 1,
        width: '100%',
        '& + .PyExampleRow-root': {
            mt: '2px',
        },
    },
}
