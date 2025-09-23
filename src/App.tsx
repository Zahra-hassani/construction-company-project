import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./mycomponents/Home"
import Services from "./mycomponents/Services"
import Blog from "./mycomponents/Blog"
import About from "./mycomponents/About"
import Contact from "./mycomponents/Contact"
import Weather from "./mycomponents/Weather"
import NotFound from "./mycomponents/NotFound"
import Navbar from "./mycomponents/Navbar"

function App() {

  return (
    <div  className="relative">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
