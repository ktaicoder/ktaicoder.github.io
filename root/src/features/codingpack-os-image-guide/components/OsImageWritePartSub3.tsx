import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'

export default function OsImageWritePartSub3() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', ml: 4, fontWeight: 600 }}>
                3. Flash! - 이미지 파일 굽기
            </Typography>

            <Box
                sx={{
                    p: 3,
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src="/images/codingpack/flash1.png"
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 1, '& > div + div': { mt: 1 } }}>
                <ListText text="Flash 버튼을 누르고 완료되면 KT코딩팩에 SD카드를 삽입하고, 전원을 연결해 구동합니다." />
            </Box>

            <Box
                sx={{
                    p: 3,
                    mt: 10,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src="/images/codingpack/flash2.png"
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 1, '& > div + div': { mt: 1 } }}>
                <ListText text="1분정도 기다리면 보라색 로딩(Flashing)이 시작됩니다. 완료까지 대략 5~10분 정도 소요됩니다." />
            </Box>

            <Box
                sx={{
                    p: 3,
                    mt: 10,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src="/images/codingpack/flash3.png"
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 1, '& > div + div': { mt: 1 } }}>
                <ListText text="연두색 로딩(Validating)은 SD 카드를 검사하는 과정입니다." />
                <ListText text="SD 카드가 불량인 경우 이 단계에서 알 수 있습니다" />
                <ListText text="요즘엔 불량인 경우가 별로 없어서 대부분 정상 통과합니다." />
                <ListText text="시간이 없다면 생략하셔도 됩니다. (Skip 버튼 클릭)" />
            </Box>

            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 6, '& > div + div': { mt: 1 } }}>
                <Typography variant="h6" sx={{ color: 'error.main' }}>
                    혹시 이미지 굽기가 안되시나요?
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                    백신 프로그램이 원인일 수 있습니다. <br />
                    백신 프로그램을 잠시 중지한 후에 시도해보세요.
                    <br />
                    윈도우 10의 Defender(디펜더)를 사용 중인 경우 다음과 같이 해보세요.
                </Typography>
                <ListText text="Windows 설정 > Windows 보안 > 랜섬웨어 방지 관리 > 제어된 폴더 액세스 끔" />
                <ListText text="Windows 설정 > Windows 보안 > 바이러스 및 위협 방지 > 설정 관리 > 실시간 보호 끔" />
                <ListText text="OS 이미지 굽기를 완료한 후에, 백신 프로그램을 다시 원래대로 설정하는 것을 잊지마세요" />

                <Box
                    sx={{
                        p: 3,
                        mt: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        component="img"
                        className="lightbox"
                        src="/images/codingpack/windows_defender.png"
                        sx={{
                            objectFit: 'contain', //
                            maxWidth: 600,
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                        }}
                    />
                    <Typography variant="caption">윈도우 보안 설정 화면</Typography>
                </Box>
            </Box>
        </Box>
    )
}
