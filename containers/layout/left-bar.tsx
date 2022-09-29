import { Logo } from "@yek-plus/panel.layout.logo"
import { MenuButton } from "@yek-plus/panel.layout.menu-button"
import { HomeIcon, BanknotesIcon, RocketLaunchIcon, CreditCardIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"


const LeftBar = () => {
    const router = useRouter()
    const [currentPath, setCurrentPath] = useState(router.pathname)
    useEffect(() => {
        const pathRoot = router.pathname.split('/')[1]
        if (currentPath !== pathRoot) {
            setCurrentPath(pathRoot)
        }
    }, [currentPath, router])
    return <div className="p-2 flex flex-col gap-4">
        <div className="h-[60px]">
            <Logo appName="ADMIN" />
        </div>
        <hr />
        <div className="flex flex-col gap-4 px-4 py-2">
            <Link href={"/"}>
                <a className="flex flex-col">
                    <MenuButton title="Dashboard" icon={<HomeIcon />} active={currentPath === ""} />
                </a>
            </Link>
            <Link href={"/projects"}>
                <a className="flex flex-col">
                    <MenuButton title="Projects" icon={<RocketLaunchIcon />} active={currentPath === "projects"} />
                </a>
            </Link>
            <Link href={"/users"}>
                <a className="flex flex-col">
                    <MenuButton title="Users" icon={<CreditCardIcon />} active={currentPath === "users"} />
                </a>
            </Link>
            <Link href={"/invoices"}>
                <a className="flex flex-col">
                    <MenuButton title="Invoices" icon={<BanknotesIcon />} active={currentPath === "invoices"} />
                </a>
            </Link>
        </div>
    </div>
}
export default LeftBar