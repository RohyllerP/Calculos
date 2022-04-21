import React from 'react'
import Link from "next/link"

function House() {
  return (
    <div className="home-1">
      <div className="home-principal"><h1>Algunas de las operaciones 
        matematicas que podrán realizar serían</h1></div>
      <div className="home-grid">
        <div>
          <div className="home-grid-1"><p>Operaciones con suma y resta</p></div>
          <div className="home-grid-1"><p>Operaciones con multiplicación y división</p></div>
          <div className="home-grid-1"><p>Operaciones con promedios</p></div>
          <div className="home-grid-1"><p>Operaciones con aumentos y descuentos</p></div>
        </div>
        <div className="home-grid-2"><div></div></div>
      </div>
      <div className="home-big-button">
          <div className="home-button">
              <button className="button_one"><Link href="/inicio"><a>Ingresar a la página</a></Link></button>
          </div>
      </div>
    </div>
  )
}

export default House