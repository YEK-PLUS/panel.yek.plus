import { Logo } from "@yek-plus/panel.layout.logo"

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="max-w-sm w-full mx-auto shadow-lg rounded-xl overflow-hidden my-8 p-1 flex bg-[#5bb4ba] bg-opacity-30">
            <div className="flex-1 w-full bg-white rounded-xl p-2 flex flex-col items-center gap-4">
                <div className="w-full">
                    <Logo appName="OLDU!" />
                </div>
                <hr className="w-full" />
                {children}
            </div>
        </div>
    )
}
export default AuthLayout