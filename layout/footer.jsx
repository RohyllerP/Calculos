import { BsFacebook, BsInstagram,BsLinkedin } from "react-icons/bs"
import Link from "next/link"
export default function Footer() {
  return (
    <div className="div-footer-big">
      <div className="div-footer-h3">
        <h3>@ Rohyller Pereira</h3>
      </div>
      <div className="div-footer-icon">
        <div>
          <p><Link href="#"><a><BsFacebook  size="1.5rem"/></a></Link></p>
        </div>
        <div>
          <p><Link href="#"><a><BsInstagram size="1.5rem"/></a></Link></p>
        </div>
        <div>
          <p><Link href="#"><a><BsLinkedin size="1.5rem"/></a></Link></p>
        </div>
      </div>
    </div>
  )
}
