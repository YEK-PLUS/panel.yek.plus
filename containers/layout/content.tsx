import { Navigation } from "@yek-plus/panel.layout.navigation"
import { Breadcrumb, BreadcrumbProps } from "@yek-plus/panel.layout.breadcrumb"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Section } from "@yek-plus/panel.layout.section"

const TopBar = ({
    children,
    title,
    subtitle,
}: {
    children?: React.ReactNode
    title: string
    subtitle?: string
}) => {
    const router = useRouter()
    const [breadcrumb, setBreadcrumb] = useState<BreadcrumbProps["items"]>([])
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
    }, [router])

    return <div className="w-full p-2 flex flex-col gap-4">
        <div className="h-[60px] flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{title}
                <span className="ml-2 text-sm text-gray-500">{subtitle}</span>
            </h1>
            <div className="w-full flex flex-row items-center justify-between gap-4">
                <Breadcrumb items={breadcrumb} wrapper={
                    ({ url, children }) => <Link href={url}>{children}</Link>
                } />
            </div>
        </div>
        <hr />
        {children}
    </div>
}
export default TopBar
