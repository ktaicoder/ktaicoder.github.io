import { SystemStyleObject } from '@mui/system'

/**
 * 배열이 아닌 SxProps
 */
export type SimpleSxProps<Theme extends object = {}> =
    | SystemStyleObject<Theme>
    | ((theme: Theme) => SystemStyleObject<Theme>)
