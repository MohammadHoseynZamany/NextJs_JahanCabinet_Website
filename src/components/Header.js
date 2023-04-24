import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeActivePage, removeActivePage } from "../features/header/headerSlice"
import logo from "../../public/logo.png"


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
    const ulStyle = {
        backgroundColor: '#FAEDCD'
    }

    return (
        <div className="container">
        <ul className="nav nav-expand-lg nav-tabs justify-content-center my-2 mx-3 pt-2 rounded d-block d-sm-flex text-center" style={ulStyle}>
            <li className="nav-item">
                <Link className={links_class.home} href="/">خانه</Link>
            </li>
            <li className="nav-item">
                <Link className={links_class.aboutUs} href="/aboutus">درباره ما</Link>
            </li>
            <li className="nav-item">
                <Link className={links_class.contactUs} href="/contactus">تماس با ما</Link>
            </li>
            <li className="nav-item">
                <Link className={links_class.samples} href="/samples">نمونه کار ها</Link>
            </li>
        </ul>
        </div>
    )
}