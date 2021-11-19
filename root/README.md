# AI 코딩블록 개발자 가이드

AI 코딩블록 개발자 가이드 웹사이트 프로젝트입니다.

https://ktaicoder.github.io


## 다음과 같이 설치할 수 있습니다.

```bash
$  yarn install
$  yarn dev
```

브라우저에서 http://localhost:3000 에 접속합니다.



#### src/custom/hw/awesome/`AwesomeControl`.tsx 파일

- `IAwesomeControl` 인터페이스의 구현 부분 입니다

```javascript 
// file: src/custom/hw/awesome/AwesomeControl.tsx

import SerialPort, { parsers } from 'serialport'
import { ISerialPortInfo } from 'src/custom-types/base-types'
import { IHwContext, SerialPortHelper } from 'src/custom/serial-port'
import { IAwesomeControl } from './IAwesomeControl'

const DEBUG = true
const DELIMITER = Buffer.from([0x52, 0x58, 0x3d, 0x0, 0x0e])
const chr = (ch: string): number => ch.charCodeAt(0)

/**
 * 하드웨어 서비스
 */
export class AwesomeControl implements IAwesomeControl {
    private _context: IHwContext | null = null

    /**
     * 하드웨어 제어 컨텍스트
     * PC 프로그램에서 이 값을 주입(Injection)해 줍니다
     */
    setContext = (context: IHwContext | undefined | null) => {
        this._context = context ?? null
    }


    /**
     * 시리얼 포트 헬퍼 생성
     * 시리얼 포트 헬퍼 = 시리얼 포트 + 패킷 구분자(Delimiter)
     * 패킷 구분자를 사용하지 않는 경우 null을 입력
     * 
     * 시리얼 포트 헬퍼는 사용하지 않아도 됩니다
     */
    static createSerialPortHelper = (path: string): SerialPortHelper => {
        const sp = new SerialPort(path, {
            autoOpen: true,
            baudRate: 38400,
            lock: false,
        })

        const parser = new parsers.Delimiter({ delimiter: DELIMITER, includeDelimiter: false })
        return SerialPortHelper.create(sp, parser)
    }


    /**
     * 시리얼 포트가 매치되는지 여부
     */
    static isMatch = (portInfo: ISerialPortInfo): boolean => {
        return portInfo.manufacturer === 'Silicon Labs'
    }

    /**
     * 시리얼 포트 헬퍼
     */
    private get serialPortHelper(): SerialPortHelper | undefined {
        return this._context?.provideSerialPortHelper?.()
    }

    /**
     * @override IHwControl
     * @returns 읽기 가능 여부
     */
    isReadable = (): boolean => {
        return this.serialPortHelper?.isReadable() === true
    }

    /**
     * 시리얼 포트가 연결되었는지 체크 
     */
    private checkSerialPort(): SerialPortHelper {
        if (!this.isReadable()) {
            throw new Error('hw not open')
        }

        return this.serialPortHelper!
    }

    /**
     * IAwesomeControl 인터페이스 구현
     */
    async digitalRead(): Promise<number[]> {
        const helper = this.checkSerialPort()
        const values = await helper.readNext()

        // [pin1 ~ pin5]
        const values = new Array(5).fill(0).map((_, i) => values[i] ?? 0)
        return values.map((v) => (v > 100 ? 1 : 0))
    }


    /**
     * IAwesomeControl 인터페이스 구현
     */
    async digitalWrite(pin: 1 | 2 | 3 | 4 | 5, value: number): Promise<void> {
        const helper = this.checkSerialPort()
        value = value > 0 ? 1 : 0

        const pkt = [chr('X'), chr('R'), 2, 0, 0, 0, 0, 0, chr('S')]
        pkt[2 + pin] = value
        if (DEBUG) console.log(`digitalWrite: pin=${pin}, value=${value}`)
        await helper.write(pkt)
    }
}
```
