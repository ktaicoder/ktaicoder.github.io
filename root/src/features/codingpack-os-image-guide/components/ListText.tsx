import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'

export default function ListText(props: { text: string }) {
    const { text } = props
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCheckCircle} size="xs" />
            <Typography variant="body1" sx={{ ml: 1, fontSize: '0.85rem' }}>
                {text}
            </Typography>
        </Box>
    )
}
