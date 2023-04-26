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

    const liClassName = "border-solid border-2 border-gray-300 display: inline-block py-3 px-5 mx-3 cursor-pointer active hover:bg-neutral-300 active:bg-teal-100 active:coursor-wait"

    return (
        <div className="container">
        <ul className="text-center border-solid border-2 border-gray-400 display">
            <li className={ liClassName } id="home">
                <Link className={links_class.home} href="/" for="home">خانه</Link>
            </li>
            <li className={ liClassName }>
                <Link className={links_class.aboutUs} href="/aboutus">درباره ما</Link>
            </li>
            <li className={ liClassName }>
                <Link className={links_class.contactUs} href="/contactus">تماس با ما</Link>
            </li>
            <li className={ liClassName }>
                <Link className={links_class.samples} href="/samples">نمونه کار ها</Link>
            </li>
        </ul>
        </div>
    )
}