import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Apartado from "./components/Apartado";
import Testimonios from "./components/Testimonios";
import Productos from "./components/Productos";
import ProductoDetalle from "./components/ProductoDetalle";
import Contacto from "./components/Contacto";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Apartado />
                  <Testimonios />
                </>
              }
            />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />{" "}
            {/* 👈 */}
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
