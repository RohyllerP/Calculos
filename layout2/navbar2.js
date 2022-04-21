import React from 'react'
import { IoMdReturnLeft } from "react-icons/io"
import Link from "next/link"
function navbar2() {
    return (
        <div className="div-big-inicio-navbar">
            <div className="div-inicio-return">
                <Link href="/"><a>
                    <IoMdReturnLeft color="white" size="29px"  />
                    <h3>Regresar</h3>
                </a></Link>
            </div>
            <div className="div-inicio-operaciones"><h3>Operaciones matematicas</h3></div>
        </div>
    )
}

export default navbar2