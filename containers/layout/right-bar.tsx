import { Logo } from "@yek-plus/panel.layout.logo"
import { UserLine } from "@yek-plus/panel.layout.user-line"
import { Copyright } from "@yek-plus/panel.layout.copyright"


const RightBar = () => {
    return <div className="p-2 h-full flex flex-col gap-4">
        <div className="h-[60px] flex items-center">
            <UserLine fullName='YEK' title='Welcome' avatar='https://avatars.githubusercontent.com/u/25279263?v=4' />
        </div>
        <hr />
        <div className="mt-auto">
            <Copyright appName="PANEL" />
        </div>
    </div>
}
export default RightBar