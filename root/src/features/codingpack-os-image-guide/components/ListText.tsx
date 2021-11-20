import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'

export default function ListText(props: { text: React.ReactNode }) {
    const { text } = props
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="xs" style={{ marginTop: '6px' }} />
            <Typography variant="body1" sx={{ ml: 1, fontSize: '0.95rem' }}>
                {text}
            </Typography>
        </Box>
    )
}
