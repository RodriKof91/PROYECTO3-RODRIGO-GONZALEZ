import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Historial } from "./pages/historial"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/historial" element = {<Historial />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
