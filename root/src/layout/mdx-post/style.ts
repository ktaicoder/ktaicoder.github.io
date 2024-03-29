import { SxProps } from '@mui/material'

export const rootSx: SxProps = {
    color: '#111827',
    overflow: 'hidden',
    pb: 10,
    pt: 3,
    fontSize: '1rem',
    lineHeight: '1.75rem',

    '& h1:not(.MuiTypography-root)': {
        fontSize: '1.65rem',
        fontWeight: 900,
        lineHeight: '2.8rem',
        mb: 4,
        pb: 1,
        pl: 0,
        textAlign: 'center',
        borderBottom: '1px solid #ccc',
    },
    '& h2:not(.MuiTypography-root)': {
        fontSize: '1.45rem',
        lineHeight: '2rem',
        fontWeight: 700,
        mt: 8,
        mb: 1,
    },
    '& h3:not(.MuiTypography-root)': {
        fontSize: '1.2rem',
        fontWeight: 600,
        ml: '2px',
        color: '#000',
        mt: 6,
        mb: 1,
    },

    '& h4:not(.MuiTypography-root)': {
        mt: 3,
        mb: 1,
        color: '#111',
        fontSize: '1.10rem',
        fontWeight: 600,
    },
    '& h5:not(.MuiTypography-root)': {
        m: 0,
        mt: 1,
        color: '#333',
        fontSize: '1.0rem',
        fontWeight: 600,
    },
    '& h6:not(.MuiTypography-root)': {
        m: 0,
        mt: 1,
        color: '#444',
        fontSize: '0.95rem',
        fontWeight: 600,
        lineHeight: '1.9rem',
    },
    '& > article > p:not(.MuiTypography-root)': {
        m: 0,
        color: '#444',
        mt: '0.5rem',
        mb: '0.5rem',
        fontSize: '0.95rem',
        fontWeight: 400,
        lineHeight: '1.75rem',
    },
    '& > pre': {
        overflow: 'auto',
        position: 'relative',
        wordWrap: 'break-word',
    },

    '& pre': {
        backgroundColor: '#1f2937',
        fontFamily:
            "'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        marginBottom: '16px',
    },
    '& :not(pre) > code': {
        backgroundColor: 'transparent',
        position: 'relative',
        color: '#000',
        fontWeight: 600,
        paddingLeft: '0.4em',
        paddingRight: '0.4em',
        fontFamily:
            "'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        fontSize: '85%',
        lineHeight: 1.5,
        wordBreak: 'break-word',
        whiteSpace: 'nowrap',
        '&::before': {
            position: 'absolute',
            content: '""',
            top: -2,
            right: 0,
            left: 0,
            bottom: -2,
            zIndex: 0,
            borderRadius: '6px',
            background: 'rgba(175,183,193,0.2)',
            padding: '0.2em 0.4em',
        },
    },
    '& pre > code': {
        padding: 0,
        color: 'inherit',
        background: 'inherit',
        whiteSpace: 'pre',
        fontFamily:
            "'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
    },

    '& ul > li,& ol > li': {
        lineHeight: '1.7rem',
    },
    '& ul > li + li,& ol > li + li': {
        mt: 0.5,
    },
    '& ul': {
        marginTop: '0.5em',
        marginBottom: '0.25em',
    },
    '& ul ul': {
        marginTop: '0.3em',
        marginBottom: '0.25em',
    },

    '& p': {
        marginTop: '0.7em',
        marginBottom: '0.25em',
    },

    '& table': {
        display: 'block',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        width: 'max-content',
        maxWidth: '100%',
        overflow: 'auto',
        mt: 0,
        mb: 2,
        '& > thead': {
            display: 'table-header-group',
            verticalAlign: 'middle',
            '& > tr': {
                bgcolor: '#e1e6ec',
            },
        },
        '& > tbody': {
            display: 'table-header-group',
            '& > tr:nth-child(even)': {
                bgcolor: '#f6f8fa',
            },
        },
        '& tr': {
            display: 'table-row',
            verticalAlign: 'middle',
            outline: 0,
            backgroundColor: '#fff',
            borderTop: '1px solid #d0d7de',
            '& td,& th': {
                display: 'table-cell',
                cursor: 'default',
                padding: '12px 14px',
                color: 'rgb(54,54,54)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                letterSpacing: '-0.04px',
                border: '1px solid #d0d7de',
                textAlign: 'left',
            },
        },
    },
}
