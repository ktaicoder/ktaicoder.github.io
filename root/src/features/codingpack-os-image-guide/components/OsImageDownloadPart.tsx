import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CODINGPACK } from 'src/lib/codingpack-version'
import ListText from './ListText'
import ListTextBox from './ListTextBox'
import RaspDownloadButton from './RaspDownloadButton'
import StepTitle from './StepTitle'

function downloadLink(href: string) {
    if ('download' in HTMLAnchorElement.prototype) {
        const downloadLink = document.createElement('a')
        document.body.appendChild(downloadLink)
        downloadLink.href = href
        downloadLink.type = 'application/octet-stream'
        downloadLink.click()
        document.body.removeChild(downloadLink)
    } else {
        // iOS Safari, open a new page and set href to data-uri
        let popup: Window | null = window.open('', '_blank')
        if (popup) {
            popup.location.href = href
        } else {
            console.warn('window.open() fail')
        }
    }
}

export default function OsImageDownloadPart() {
    const theme = useTheme()
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
        <Box>
            <StepTitle step="1단계" title="OS 이미지 다운로드" />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: down700 ? 'column' : 'row',
                        alignItems: 'center',
                        maxWidth: 700,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '0.8rem' }}>
                            {CODINGPACK.rp3.version}
                            <Box component="span" ml={1} sx={{ color: '#888' }}>
                                {CODINGPACK.rp3.date}
                            </Box>
                        </Typography>
                        <RaspDownloadButton
                            raspVersion="3B+"
                            onClick={() =>
                                downloadLink(
                                    `https://aicodingblock.kt.co.kr/_static/codingpack/${CODINGPACK.rp3.fileName}`,
                                )
                            }
                        />
                    </Box>
                    {!down700 && (
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                alignSelf: 'flex-end',
                                height: 56,
                                mx: 4,
                            }}
                        />
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            mt: down700 ? 4 : 0,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontSize: '0.8rem' }}>
                            {CODINGPACK.rp4.version}
                            <Box component="span" ml={1} sx={{ color: '#888' }}>
                                {CODINGPACK.rp4.date}
                            </Box>
                        </Typography>
                        <RaspDownloadButton
                            raspVersion="4B"
                            onClick={() =>
                                downloadLink(
                                    `https://aicodingblock.kt.co.kr/_static/codingpack/${CODINGPACK.rp4.fileName}`,
                                )
                            }
                        />
                    </Box>
                </Box>
            </Box>
            <ListTextBox>
                <ListText
                    text={
                        <>
                            코딩팩에 맞는 OS 이미지를 다운로드 후 압축을 해제합니다.{' '}
                            <span style={{ whiteSpace: 'nowrap' }}>(약 2.6GB)</span>{' '}
                        </>
                    }
                />
                <ListText text="압축 해제 시 나오는 img파일을 OS 제작 프로그램을 통해 Write 합니다." />
                <ListText
                    text={
                        <>
                            코딩팩에 로그인 시 사용자 ID는{' '}
                            <Box component="span" sx={{ whiteSpace: 'nowrap', fontWeight: 600, color: 'primary.dark' }}>
                                pi
                            </Box>{' '}
                            , 암호는{' '}
                            <Box component="span" sx={{ whiteSpace: 'nowrap', fontWeight: 600, color: 'primary.dark' }}>
                                kt123!@#
                            </Box>
                            입니다.
                        </>
                    }
                />
            </ListTextBox>
        </Box>
    )
}
