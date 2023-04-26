import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeActivePage, removeActivePage } from "../features/header/headerSlice"
import logo from "/public/logo.png"

export default function Header(props) {
    const currentPage = useRouter().asPath
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            dispatch(removeActivePage())
            dispatch(changeActivePage(currentPage))
        }
        , [currentPage])
    
    const links_class = useSelector((state) => state.Header)

    const linkClassName = "sm:border-2  shadow-lg shadow-gray-100 border-b-4 py-3 px-5 mx-3 cursor-pointer active hover:bg-orange-300 hover:text-white active:bg-orange-500 active:text-white active:cursor-wait block sm:inline-block rounded-full active:animate-ping"

    return (
    <div className="flex">
        <div className="m-auto my-3 p-2 inline-block rounded-2xl sm:rounded-full shadow-xl bg-orange-50">
            <Link className={ linkClassName } href="/" for="home">خانه</Link>
            <Link className={ linkClassName } href="/aboutus">درباره ما</Link>
            <Link className={ linkClassName } href="/contactus">تماس با ما</Link>
            <Link className={ linkClassName } href="/samples">نمونه کار ها</Link>
        </div>
    </div>
    )
}


{/* <Link className={links_class.home} href="/" for="home">خانه</Link>
<Link className={links_class.aboutUs} href="/aboutus">درباره ما</Link>
<Link className={links_class.contactUs} href="/contactus">تماس با ما</Link>
<Link className={links_class.samples} href="/samples">نمونه کار ها</Link> */}