import { Outlet } from "react-router";
import Navbar1 from "../components/Navbar1";


export default function RootLayout() {
  return (
    <div>
      <Navbar1 />
      <main>
        <Outlet />
      </main>
       <Navbar1 />
    </div>
  );
}
