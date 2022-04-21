import House from "../layout/home";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

export default function Home() {
  return (
    <div className="box-grande">
        <Navbar />
        <House />
        <Footer />
    </div>
  )
}
