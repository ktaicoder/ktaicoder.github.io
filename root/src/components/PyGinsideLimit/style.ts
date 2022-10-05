import { SimpleSxProps } from 'src/lib/sx-props'

export const rootSx: SimpleSxProps = {
    width: '100%',
    // maxWidth: 400,
    border: '1px solid #ddd',
    borderRadius: 2,
    background: 'rgba(0,0,0,0.05)',
    display: 'block',
    mx: 'auto',
    p: 1,
    mb: 2,
    '& .PyGinsideLimit-list': {
        '& em': {
            color: 'primary.main',
            fontStyle: 'normal',
        },
    },
}
