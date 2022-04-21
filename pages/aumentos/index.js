import Navbar2 from '../../layout2/navbar2'
import Aside from "../../layout2/aside"

function Index() {
  return (
    <div className="div-color-black">
      <div><Navbar2 /></div>
      <div className="div-big-inicio">
        <div><Aside /></div>
        <div className="div-inicio-home"><h3>Aumentos y descuentos</h3></div>
      </div>
    </div>
  )
}

export default Index