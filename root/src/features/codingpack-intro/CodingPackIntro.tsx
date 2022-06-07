import { Box, Container } from '@mui/material'
import SimplePlayer from './components/SimplePlayer'

export default function CodingPackIntro() {
    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }} className="CodingPackIntro-root">
            <Container maxWidth="md" component="div" style={{ maxWidth: 760 }}>
                <SimplePlayer videoUrl="https://www.youtube.com/watch?v=WtujHpeIzX4" />
            </Container>
        </Box>
    )
}
