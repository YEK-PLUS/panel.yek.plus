import { Logo } from "@yek-plus/panel.layout.logo"
import { MenuButton } from "@yek-plus/panel.layout.menu-button"
import { HomeIcon, BanknotesIcon, ArrowUturnLeftIcon, BookmarkIcon } from "@heroicons/react/20/solid"
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
            <Logo appName="DEALTIVE" />
        </div>
        <hr />
        <div className="flex flex-col gap-4 px-4 py-2">
            <Link href={"/"}>
                <a className="flex flex-col">
                    <MenuButton title="Search" icon={<HomeIcon />} active={currentPath === ""} />
                </a>
            </Link>
            <Link href={"/history"}>
                <a className="flex flex-col">
                    <MenuButton title="History" icon={<ArrowUturnLeftIcon />} active={currentPath === "history"} />
                </a>
            </Link>
            <Link href={"/saved-searchs"}>
                <a className="flex flex-col">
                    <MenuButton title="Saved Searchs" icon={<BookmarkIcon />} active={currentPath === "saved-searchs"} />
                </a>
            </Link>
            <Link href={"/saved-products"}>
                <a className="flex flex-col">
                    <MenuButton title="Saved Products" icon={<BookmarkIcon />} active={currentPath === "saved-products"} />
                </a>
            </Link>
        </div>
    </div>
}
export default LeftBar