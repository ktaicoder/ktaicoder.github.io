import { SimpleSxProps } from 'src/lib/sx-props'

export const rootSx: SimpleSxProps = {
    pt: 2,
    mt: 5,
    pb: 15,

    '& h3': {
        textAlign: 'center',
        fontSize: '2.3rem',
        fontFamily: 'Black Han Sans',
        fontWeight: 'unset',
        mt: 10,
        mb: 2,
        color: '#191919',
    },

    '& h5': {
        textAlign: 'center',
        fontSize: '1.3rem',
        fontWeight: 600,
        mt: 1,
        mb: 6,
        color: '#191919',
    },

    '& section': {
        mt: 6,
        mb: 2,
    },

    '& p': {
        textAlign: 'center',
        fontSize: '1.0rem',
        color: '#333',
        fontWeight: 400,
        mx: 'auto',
        maxWidth: 600,
        lineHeight: 1.8,
        mt: 2,
        mb: 1,
    },

    '& em': {
        fontStyle: 'normal',
        color: 'primary.dark',
    },

    '& .CodingBlockIntro-imageBox': {
        bgcolor: '#fff',
        borderRadius: 1,
        boxShadow: 0,
        border: '1px solid #eee',
        my: 1,
    },
}
