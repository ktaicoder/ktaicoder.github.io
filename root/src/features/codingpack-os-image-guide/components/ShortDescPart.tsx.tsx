import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Button, ButtonBase, ButtonBaseProps, Grid, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { CODINGPACK } from 'src/lib/codingpack-version'
import { routerPush, routerUrlOf } from 'src/lib/urls'

const LinkButton = (props: { title: string; href: string } & ButtonBaseProps) => {
    const { title, href, ...restProps } = props

    return (
        <ButtonBase
            sx={{
                pr: 1,
                py: 1.5,
                pl: 2,
                borderRadius: 0,
                background: '#fff',
                color: '#4F566F',
                border: '1px solid #4F566F',
                '&:hover': {
                    fontWeight: 700,
                },
            }}
            onClick={() => routerPush(href)}
            {...restProps}
        >
            {title}
            <ChevronRightIcon />
        </ButtonBase>
    )
}

const Subtitle = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: '1.15rem',
    fontWeight: 600,
    lineHeight: '1.8rem',
}))

export default function ShortDescPart() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [brief1Visible, setBrief1Visible] = useState(false)
    const [brief2Visible, setBrief2Visible] = useState(false)

    return (
        <Box
            sx={{
                display: 'block',
                mt: 10,
                '& em': {
                    fontStyle: 'normal',
                    color: 'primary.main',
                    ml: '2px',
                    mr: '4px',
                    fontWeight: 500,
                },
            }}
        >
            <Box
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    lineHeight: '1.8rem',
                }}
            >
                개요
            </Box>
            <Box>
                <Box my={2}>
                    <Box mt={1} mb={2}>
                        <em>OS 이미지란?</em> KT 코딩팩을 구동하려면 운영체제가 필요합니다. 이 운영 체제를{' '}
                        <em>하나의 파일</em>에 넣어둔 것을 OS 이미지라고 합니다.
                    </Box>
                </Box>
                <Button
                    color={brief1Visible ? 'secondary' : 'primary'}
                    onClick={() => setBrief1Visible((p) => !p)}
                    endIcon={brief1Visible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    variant="outlined"
                >
                    개요 {brief1Visible ? '접기' : '펼치기'}
                </Button>

                {brief1Visible && (
                    <Box sx={{ border: '1px dashed #ccc', my: 2 }}>
                        <Box
                            style={{
                                border: '0px dashed #ddd',
                                borderRadius: '12px',
                                padding: theme.spacing(2, smDown ? 1 : 3),
                            }}
                        >
                            <Box display="flex" justifyContent="center">
                                <Box
                                    component="img"
                                    src={routerUrlOf('/images/codingpack/codingpack_sd1.png')}
                                    sx={{ height: '120px', objectFit: 'contain' }}
                                />
                            </Box>
                            <Box mt={1} mb={3}>
                                OS가 하나의 파일에 담겨 있으므로 <em>용량이 매우 큽니다.</em> 그래서 압축 파일로
                                다운로드 하고, SD 카드에 구울 때는 압축을 풀어서 구워야 합니다.
                            </Box>

                            <Box mt={1} mb={3}>
                                OS 이미지는 약 8GB 정도되며, <em>압축하면 2.8GB</em> 정도입니다. SD 카드에는 압축을
                                풀어서 복사하므로, 최소 8GB 이상의 공간이 필요합니다. 원활한 이용을 위해{' '}
                                <em>SD 카드 용량은 16GB 이상</em>을 권장합니다.
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Box
                                    component="img"
                                    src={routerUrlOf('/images/codingpack/select_target1.png')}
                                    sx={{ height: '120px', objectFit: 'contain' }}
                                />
                            </Box>
                            <Box mt={1} mb={2}>
                                OS 이미지는 일반적인 파일과는 형태가 달라서, SD 카드에 복사할 때{' '}
                                <em>특수한 방법으로 복사</em>
                                해야 합니다. <em>에처(etcher)</em>라는 프로그램을 이용해서 복사합니다.
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>

            <Box
                mt={5}
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    lineHeight: '1.8rem',
                }}
            >
                요약 설명
            </Box>
            <Button
                color={brief2Visible ? 'secondary' : 'primary'}
                onClick={() => setBrief2Visible((p) => !p)}
                sx={{ mt: 2 }}
                endIcon={brief2Visible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                variant="outlined"
            >
                요약 설명 {brief2Visible ? '접기' : '펼치기'}
            </Button>
            {brief2Visible && (
                <Box sx={{ border: '1px dashed #ccc', p: 2, mt: 2 }}>
                    <Subtitle>1. OS 이미지 준비</Subtitle>

                    <Box
                        component="ul"
                        sx={{
                            py: 3,
                            pl: 3,
                            background: '#f0f0f0',
                            borderRadius: 2,
                            listStyle: 'disc',
                            listStylePosition: 'inside',
                            '& li + li': {
                                mt: 1,
                            },
                        }}
                    >
                        <li>OS 이미지를 다운로드 후 압축을 해제합니다.</li>
                        <li>압축 해제 시 나오는 img파일을 OS 제작 프로그램을 통해 Write 합니다.</li>
                        <li>
                            기본 사용자 ID는 <em>pi</em>이며, 암호는 <em>kt123!@#</em> 입니다.
                        </li>
                        <li>
                            라즈베리파이 3B+ <em>{CODINGPACK.rp3.version}</em>
                            <span>
                                <i></i>
                            </span>
                            {CODINGPACK.rp3.date}
                        </li>
                        <li>
                            라즈베리파이 4B <em>{CODINGPACK.rp4.version}</em>
                            <span>
                                <i></i>
                            </span>
                            {CODINGPACK.rp4.date}
                        </li>
                    </Box>
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <LinkButton
                                    style={{ width: '100%' }}
                                    title="라즈베리파이 3B+ OS 이미지 다운로드"
                                    href={`https://aicodingblock.kt.co.kr/_static/codingpack/${CODINGPACK.rp3.fileName}`}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <LinkButton
                                    style={{ width: '100%' }}
                                    title="라즈베리파이 4B OS 이미지 다운로드"
                                    href={`https://aicodingblock.kt.co.kr/_static/codingpack/${CODINGPACK.rp4.fileName}`}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={4}>
                        <Subtitle>2. 에처(etcher)를 이용해 SD 카드에 OS 이미지를 굽기</Subtitle>

                        <Box
                            component="ul"
                            sx={{
                                py: 3,
                                pl: 3,
                                background: '#f0f0f0',
                                borderRadius: 2,
                                listStyle: 'disc',
                                listStylePosition: 'inside',
                                '& li + li': {
                                    mt: 1,
                                },
                            }}
                        >
                            <li>OS 이미지 다운로드 후 압축 해제하여 나온 img 파일을 준비합니다.</li>
                            <li>
                                OS 제작프로그램(<em>etcher</em>)를 다운로드 합니다.
                            </li>
                            <li>에처(etcher)를 실행하고 다운로드 받은 OS 이미지 파일을 선택합니다.</li>
                            <li>컴퓨터에 SD 카드를 삽입하고 해당 SD카드로 디스크를 설정합니다.</li>
                            <li>
                                Flash 버튼을 누르고 완료되면 KT코딩팩에 SD 카드를 삽입하고, 전원을 연결해 구동합니다.
                            </li>
                        </Box>
                    </Box>
                    <Box mt={4}>
                        <Subtitle>3. OS 이미지를 구운 후에 해야할 일</Subtitle>

                        <Box
                            component="ul"
                            sx={{
                                py: 3,
                                pl: 3,
                                background: '#f0f0f0',
                                borderRadius: 2,
                                listStyle: 'disc',
                                listStylePosition: 'inside',
                                '& li + li': {
                                    mt: 1,
                                },
                            }}
                        >
                            <li>raspi-config 명령을 통해 디스크를 확장해야 합니다.</li>
                            <li>인터넷 연결을 설정하세요.</li>
                            <li>인터넷이 연결된 후에 코딩팩 바탕화면의 시스템 초기화을 실행해주세요</li>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
