import { Section } from "@yek-plus/panel.layout.section"
import LeftBar from "./left-bar"
import TopBar from "./top-bar"

type LayoutProps = {
    children: React.ReactNode
    title: string
    subtitle?: string
}

const Layout = ({ children, title, subtitle }: LayoutProps) => {
    return (
        <div className="container mx-auto shadow-lg rounded-xl overflow-hidden my-8 p-1 flex bg-[#f1f1f1]">
            <div className="w-1/6 bg-white rounded-xl">
                <LeftBar />
            </div>
            <div className="flex-1 flex flex-col py-2 px-8 gap-4">
                <TopBar />
                <hr />
                <Section>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <span className="text-sm text-gray-500">{subtitle}</span>
                </Section>
                {children}
            </div>
            <div className="w-1/4 bg-white rounded-xl">
                test
            </div>
        </div>
    )
}
export default Layout