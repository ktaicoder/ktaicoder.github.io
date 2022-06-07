const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function generateString(length: number) {
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

export function randomCssClassName(prefix?: string | null) {
    const pre = prefix ?? `${generateString(5)  }-`
    const numeric1 = Math.random().toString().substring(2, 7)
    const numeric2 = Math.random().toString().substring(2, 7)
    return `${pre}${numeric1}${numeric2}`
}
