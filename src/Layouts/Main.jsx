import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Main() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <div className="min-h-[calc(100vh-380px)]  ">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}
