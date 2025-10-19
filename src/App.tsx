import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Weather from "./Pages/Weather"
import NotFound from "./Pages/NotFound"
import Navbar from "./mycomponents/Navbar"
import Footer from "./mycomponents/Footer"

function App() {

  return (
    <div  className="relative">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
