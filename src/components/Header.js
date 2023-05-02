import Link from "next/link"

export default function Header(props) {

    const linkClassName = "bg-teal-300 shadow-lg shadow-teal-900 border-b-4 py-3 px-5 mx-3 my-3 lg:px-10 xl:px-20 cursor-pointer hover:bg-teal-700 hover:text-white active:bg-teal-800 active:text-white active:cursor-wait block sm:inline-block rounded-full  italic active:-translate-y-2 active:translate-x-1"

    return (
    <div className="flex mt-2 mb-20">
        <div className="m-auto p-2 px-5 inline-block rounded-lg sm:rounded-lg shadow-2xl shadow-gray-400 bg-red-800 hover:px-6 hover:py-3">
            <Link className={ linkClassName } href="/" for="home">خانه</Link>
            <Link className={ linkClassName } href="/aboutus">درباره ما</Link>
            <Link className={ linkClassName } href="/contactus">تماس با ما</Link>
            <Link className={ linkClassName } href="/samples">نمونه کار ها</Link>
        </div>
    </div>
    )
}