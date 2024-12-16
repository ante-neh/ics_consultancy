import Image from "next/image"
import Container from "./Container"
import { navigations } from "@/data/nav"
import Link from "next/link"


const Header = () => {
  return (
    <Container className="flex justify-between py-4 items-center">
        <div> 
            <Image src="/assets/logo.svg" width={80} height={80} alt="isc's logo"/>
        </div>
        <nav className="flex gap-4 items-center">
            {
              navigations.map((nav, index)=>(
                <Link key={index} href={nav.href} className="hover:bg-[#00EDCF] hover:rounded-lg px-2 py-1 hover:text-[#01013A] font-euclid font-medium">
                  {
                    nav.name
                  }
                </Link>
              ))
            }
        </nav>
    </Container>
  )
}

export default Header