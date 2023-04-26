import Link from "next/link"
import Image from "next/image"
import logo from "/public/logo.png"

export default function Header(props) {

    const linkClassName = "sm:border-2  shadow-lg shadow-gray-100 border-b-4 py-3 px-5 mx-3 cursor-pointer hover:bg-orange-300 hover:text-white active:bg-orange-500 active:text-white active:cursor-wait block sm:inline-block rounded-full active:animate-ping"

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