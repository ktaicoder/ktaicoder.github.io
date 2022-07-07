import { PyExample } from "./example-types";

const list: Omit<PyExample, 'link'>[] = [
    {
        id: 'ex0',
        label: '기본',
        title: '환경 설정 및 API 키발급',
        description: '호출어 테스트 예제입니다'
    },
    {
        id: 'ex1',
        label: '예제 1',
        title: 'ex1_kwstest.py',
        description: '호출어 테스트 예제입니다'
    },
    {
        id: 'ex2',
        label: '예제 2',
        title: 'ex2_getVoice2Text.py',
        description: 'STT 예제입니다'
    },
    {
        id: 'ex3',
        label: '예제 3',
        title: 'ex3_getText2VoiceUrl.py',
        description: 'TTS 예제입니다'
    },
    {
        id: 'ex4',
        label: '예제 4',
        title: 'ex4_getText2VoiceStream.py',
        description: 'STT 예제입니다'
    },
    {
        id: 'ex5',
        label: '예제 5',
        title: 'ex5_queryText.py',
        description: '?? 예제입니다'
    },
    {
        id: 'ex6',
        label: '예제 6',
        title: 'ex6_queryVoice.py',
        description: '?? 예제입니다'
    },
    {
        id: 'ex7',
        label: '예제 7',
        title: 'ex7_kwsstt.py',
        description: '?? 예제입니다'
    },
    {
        id: 'ex8',
        label: '예제 8',
        title: 'ex8_kwssttdss.py',
        description: '?? 예제입니다'
    },
    {
        id: 'ex9',
        label: '예제 9',
        title: 'ex9_btnSttDss.py',
        description: '?? 예제입니다'
    },
    {
        id: 'env',
        label: '기타',
        title: '파이썬 버전에 대한 이해',
        description: '여러 버전의 파이썬 버전을 사용할 때 주의할 점에 대한 설명입니다'
    },
]

const linkUrl = (id: string) => `/post-frame/codingpack-how-to-python-${id}`

export const EXAMPLE_DATAS: PyExample[] = list.map(it => ({ ...it, link: linkUrl(it.id) }))
