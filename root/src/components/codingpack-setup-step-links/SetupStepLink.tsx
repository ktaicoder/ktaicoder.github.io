import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Box, ButtonBase } from '@mui/material'

type Props = {
    stepNumber: number
    title: string
    active: boolean
    onClick: () => void
}
export default function SetupStepLink(props: Props) {
    const { onClick, stepNumber, title, active } = props
    return (
        <ButtonBase
            onClick={onClick}
            component="div"
            sx={{
                width: '100%',
                minHeight: '48px', //
                border: '0px solid red',
                borderRadius: '8px',
                px: 1,
            }}
        >
            <Box sx={{ width: '20px' }}>
                {active && <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px', color: 'primary.main' }} />}
            </Box>
            <Box
                sx={{
                    bgcolor: active ? 'primary.main' : '#eee',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    ml: 1,
                    py: '2px',
                    px: 1,
                    fontWeight: 200,
                    color: active ? '#FFF' : 'rgba(0,0,0,0.7)',
                    '& > span': {
                        marginLeft: '2px',
                        fontSize: '0.87rem',
                        marginRight: '2px',
                        fontWeight: 600,
                    },
                }}
            >
                <span>{stepNumber}</span> 단계
            </Box>
            <Box
                sx={{
                    fontSize: '0.9rem',
                    fontWeight: active ? 600 : 400,
                    flex: 1,
                    ml: 2,
                    color: active ? 'primary.main' : '#333',
                }}
            >
                {title}
            </Box>

            <ChevronRightIcon sx={{ fontSize: '0.9rem', color: '#888' }} />
        </ButtonBase>
    )
}
