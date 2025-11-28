import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

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

      {/* Scroll ao topo ao trocar rota */}
      <ScrollToTopOnRouteChange />

      {/* Botão flutuante de voltar ao topo */}
      <ScrollTop />

      <Routes>
        {/* ===================== HOME ===================== */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                {/* SEO Básico */}
                <title>Wesley Oliveira | Músico de Música Clássica e Violinista Profissional</title>
                <meta
                  name="description"
                  content="Wesley Oliveira é músico de música clássica e violinista profissional, disponível para casamentos, eventos, concertos e apresentações exclusivas."
                />
                <meta
                  name="keywords"
                  content="música clássica, violinista, músico profissional, música para casamento, música para eventos, violinista para evento"
                />
                <link rel="canonical" href="https://wesleyoliveira.art/" />

                {/* Open Graph */}
                <meta property="og:title" content="Wesley Oliveira | Violinista e Músico de Música Clássica" />
                <meta
                  property="og:description"
                  content="Contrate um violinista profissional para casamentos, eventos e apresentações exclusivas."
                />
                <meta property="og:image" content="https://wesleyoliveira.art/imagens/wesley.jpg" />
                <meta property="og:url" content="https://wesleyoliveira.art/" />
                <meta property="og:type" content="website" />

             
                {/* Schema.org */}
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Musician",
                      "name": "Wesley Oliveira",
                      "jobTitle": "Músico de Música Clássica",
                      "instrument": "Violino",
                      "url": "https://wesleyoliveira.art",
                      "image": "https://wesleyoliveira.art/imags/wesley.jpg",
                      "description": "Violinista profissional especializado em música clássica e apresentações em eventos.",
                      "sameAs": [
                        "https://instagram.com/seuperfil",
                        "https://youtube.com/seucanal",
                        "https://facebook.com/seuperfil"
                      ]
                    }
                  `}
                </script>
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

        {/* ===================== OUTRAS PÁGINAS ===================== */}
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
