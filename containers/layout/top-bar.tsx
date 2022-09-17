import { Navigation } from "@yek-plus/panel.layout.navigation"
import { Breadcrumb, BreadcrumbProps } from "@yek-plus/panel.layout.breadcrumb"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"

const TopBar = () => {
    const router = useRouter()
    const [breadcrumb, setBreadcrumb] = useState<BreadcrumbProps["items"]>([])
    const [nextAvailable, setNextAvailable] = useState(false)
    const [previousAvailable, setPreviousAvailable] = useState(false)
    useEffect(() => {
        const items = [{
            title: "Home",
            url: "/"
        }]

        router.pathname.split("/").filter(item => item !== "").map(item => items.push({
            title: item.charAt(0).toUpperCase() + item.slice(1),
            url: `/${item}`
        }))
        setBreadcrumb(items)

        setPreviousAvailable(window.history.length > 1)
    }, [router])
    const handleBack = () => router.back()

    return <div className="w-full h-[70px] px-[10px] flex flex-col">
        <div className="h-[10px]"></div>
        <div className="pt-[20px] h-[60px] flex-full">
            <div className="w-full flex flex-row items-center justify-between gap-4">
                <Breadcrumb items={breadcrumb} wrapper={
                    ({ url, children }) => <Link href={url}>{children}</Link>
                } />
                <Navigation nextAvailable={nextAvailable} previousAvailable={previousAvailable} onPressPrevious={handleBack} />
            </div>
        </div>
    </div>
}
export default TopBar