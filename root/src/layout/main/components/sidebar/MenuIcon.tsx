import AdbIcon from '@mui/icons-material/Adb'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import BluetoothIcon from '@mui/icons-material/Bluetooth'
import BugReportIcon from '@mui/icons-material/BugReport'
import BuildIcon from '@mui/icons-material/Build'
import ConstructionIcon from '@mui/icons-material/Construction'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import GradeIcon from '@mui/icons-material/Grade'
import HardwareIcon from '@mui/icons-material/Hardware'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import ScienceIcon from '@mui/icons-material/Science'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import UsbIcon from '@mui/icons-material/Usb'
import { SvgIconProps } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'

type Props = {
    iconName: string
} & SvgIconProps

export default function MenuIcon(props: Props) {
    const { iconName, ...restProps } = props
    switch (iconName) {
        case 'description':
            return <DescriptionOutlinedIcon {...restProps} />
        case 'terminal':
            return <TerminalOutlinedIcon {...restProps} />
        case 'adb':
            return <AdbIcon {...restProps} />
        case 'science':
            return <ScienceIcon {...restProps} />
        case 'grade':
            return <GradeIcon {...restProps} />
        case 'github':
            return <GitHubIcon {...restProps} />
        case 'construction':
            return <ConstructionIcon {...restProps} />
        case 'build':
            return <BuildIcon {...restProps} />
        case 'bug_report':
            return <BugReportIcon {...restProps} />
        case 'dashboard':
            return <DashboardIcon {...restProps} />
        case 'settings':
            return <SettingsIcon {...restProps} />
        case 'settings_input_hdmi':
            return <SettingsInputHdmiIcon {...restProps} />
        case 'exit_to_app':
            return <ExitToAppIcon {...restProps} />
        case 'logout':
            return <LogoutIcon {...restProps} />
        case 'usb':
            return <UsbIcon {...restProps} />
        case 'bluetooth':
            return <BluetoothIcon {...restProps} />
        case 'info':
            return <InfoOutlinedIcon {...restProps} />
        case 'mosaic':
            return <AutoAwesomeMosaicIcon {...restProps} />
    }
    return <HardwareIcon />
}
