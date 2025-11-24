import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // Ajustado para o caminho correto

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMidia/SocialMIdia";
import { CartProvider } from "../contexts/CartContext";

import ProductPage from "./pages/ProductPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CategorySection from "./components/CategorySection/CategorySection";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";
import AboutMusicArtistWesley from "./components/AboutMusicArtistWesley/AboutMusicArtistWesley";

import { HelmetProvider, Helmet } from "react-helmet-async";
import PoliticaEPrivacidade from "./pages/PoliticasEPrivacidade";
import ContactPage from "./pages/ContactPage";

function AppContent() {


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />

      {/* Scroll automático para topo em mudança de rota */}
      <ScrollToTopOnRouteChange />

      {/* Botão para voltar ao topo manualmente */}
      <ScrollTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Estúdio de Tatuagem em Betim | Soisa Tattoo Studio</title>
                <meta
                  name="description"
                  content="Estúdio de tatuagem e piercing com profissionais experientes. Agende sua sessão com nossos artistas."
                />
                <meta
                  name="keywords"
                  content="tatuagem, piercing, estúdio, betim, soisa, tatuadores"
                />
              </Helmet>
              <main className="pt-20 min-h-screen flex flex-col">
                <Hero />
                <AboutMusicArtistWesley />
                <section className="bg-white py-10">
                  <CategorySection category="apresentacoes" />
                </section>
               
                <section className="bg-white">
                  <CategorySection category="ensaios" />
                </section>
                
               
                <SocialMediaSection />
              </main>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Politicas" element={<PoliticaEPrivacidade />} />
      </Routes>

      <Footer />

    
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}