import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Toaster } from "./components/ui/toaster"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  )
}

export default App
