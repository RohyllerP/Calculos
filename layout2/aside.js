import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link"
function Aside() {
  return (
      <div className="div-big-aside">
        <div className="div-aside-logo-big">
          <div className="div-aside-logo">
            <div><FaUserCircle size="4.5em" /></div>
            <div><h3>Usuario</h3></div>
          </div>
        </div>
        <div><hr /></div>
        <div className="div-aside-category">
          <div>
            <h3><Link href="/inicio"><a>Inicio</a></Link></h3>
          </div>
          <div>
            <h3><Link href="/sumas"><a>Sumas y restas</a></Link></h3>
          </div>
          <div>
            <h3><Link href="/multiplicacion"><a>Multiplicación y división</a></Link></h3>
          </div>
          <div>
            <h3><Link href="/promedio"><a>Con promedios</a></Link></h3>
          </div>
          <div>
            <h3><Link href="/aumentos"><a>Con aumentos y descuentos</a></Link></h3>
          </div>
        </div>
      </div>
  )
}

export default Aside