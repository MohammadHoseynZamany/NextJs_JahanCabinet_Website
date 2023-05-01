import { Watermark } from "@hirohe/react-watermark"
import Image from "next/image"
import Logo from "../../public/logo.png"

export default function Test() {
    return (
        <Watermark text="جهان کابینت">
            <Image src={Logo}/>
        </Watermark>
    )
}