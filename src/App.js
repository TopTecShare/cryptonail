import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import CyberSnail from "./pages/CyberSnail"
import CyberKey from "./pages/CyberKey"
import TotalUpload from "./pages/TotalUpload"
import Upload from "./pages/Upload"
import Claim from "./pages/Claim"

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cybersnail" element={<CyberSnail />} />
          <Route path="cyberkey" element={<CyberKey />} />
          <Route path="totalupload" element={<TotalUpload />} />
          <Route path="upload" element={<Upload />} />
          <Route path="claim" element={<Claim />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
