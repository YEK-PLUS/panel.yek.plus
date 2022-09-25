import LeftBar from "./left-bar"
import Content from "./content"
import RightBar from "./right-bar"

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
            <div className="w-3/5 flex flex-col p-1 gap-4">
                <Content title={title} subtitle={subtitle}>
                    {children}
                </Content>
            </div>
            <div className="w-1/5 p-1 rounded-xl overflow-hidden bg-opacity-30">
                <div className="bg-white h-full rounded-xl">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}
export default Layout