import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from "./componentes/Head";
import Body from "./componentes/Body";
import Feet from "./componentes/Feet";
import Servicios from "./componentes/Servicios";
import About from "./componentes/About"
import Productos from "./componentes/Productos"
import Contacto from "./componentes/Contacto"

function App() {
    return (
        <Router>
            <Head />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path='/about' element={<About/>} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path='/productos' element={<Productos/>} />
                <Route path='/contacto' element={<Contacto/>} />
            </Routes>
            <Feet />
        </Router>
    )
}

export default App;
