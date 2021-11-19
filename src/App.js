import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

import Header from "./components/Header/Header";
import CarouselApp from "./components/carousel";
import Cards from "./components/Cards";
import Producto from "./components/Producto";
import Footer from "./components/footer";

export default function App() {
  return (
    <main>
      <Header />
      <CarouselApp />

      <div className="d-flex align-items-center justify-content-center">
        <Cards />
      </div>

      <Footer />
    </main>
  );
}
