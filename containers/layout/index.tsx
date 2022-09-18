import { Section } from "@yek-plus/panel.layout.section"
import { Copyright } from "@yek-plus/panel.layout.copyright"
import LeftBar from "./left-bar"
import TopBar from "./top-bar"

type LayoutProps = {
    children: React.ReactNode
    title: string
    subtitle?: string
}

const Layout = ({ children, title, subtitle }: LayoutProps) => {
    return (
        <div className="container mx-auto shadow-lg rounded-xl overflow-hidden my-8 flex bg-[#f1f1f1]">
            <div className="w-1/5 p-1 rounded-xl overflow-hidden bg-[#5bb4ba] bg-opacity-30">
                <div className="bg-white h-full rounded-xl">
                    <LeftBar />
                </div>
            </div>
            <div className="w-3/5 flex flex-col py-3 px-8 gap-4">
                <TopBar />
                <hr />
                <Section>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <span className="text-sm text-gray-500">{subtitle}</span>
                </Section>
                {children}
            </div>
            <div className="w-1/5 p-1 rounded-xl overflow-hidden bg-opacity-30">
                <div className="bg-white h-full flex flex-col rounded-xl">
                    <div className="p-2 mt-auto">
                        <Copyright appName="PANEL" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout