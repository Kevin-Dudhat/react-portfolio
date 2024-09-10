import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src="/img/kevinLogo.png" alt="kevinLogo" className="mx-2 w-10"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaInstagram/>
        </div>
    </nav>
  )
}
