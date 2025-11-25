"use client";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Wesley Oliveira | Violoncelista</title>
        <meta
          name="description"
          content="O som que transcende palavras — Wesley Oliveira, violoncelista, intérprete e artista brasileiro."
        />
        <meta
          name="keywords"
          content="violoncelo, música clássica, músico, orquestra, violoncelista"
        />
      </Helmet>

      {/* 🔹 HERO MUSICAL - PRETO + AZUL METÁLICO */}
      <section
        className="relative w-full flex items-center justify-center px-4 py-20 md:py-28 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #020617 60%, #0A1628 100%)",
        }}
      >
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-10">

          {/* 🔵 TEXTO POÉTICO / EMOCIONAL */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-400 drop-shadow-[0_0_20px_rgba(0,150,255,0.4)]">
              Entre cordas, vibra o que <br /> palavras não alcançam.
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-md leading-relaxed">
              Wesley Oliveira, violoncelista formado pela UEMG, transita entre o
              clássico e o contemporâneo. Nascido em São Paulo e acolhido por
              Minas Gerais, carrega no som das cordas a força de sua história —
              passando pelo Instituto Ramacrisna, pelo punk hardcore, por
              orquestras, palcos, viagens e encontros com grandes nomes da
              música brasileira.  
            </p>

            <p className="text-base md:text-lg text-blue-400 font-semibold">
              Uma trajetória construída em alma, respiro e expressão.
            </p>

            <Link to="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30 text-white font-semibold rounded-md hover:shadow-blue-400/40">
                Agendar apresentação
            
            </Link>
        
          </div>

          {/* 🔵 IMAGEM ÚNICA — VIOLONCELO */}
          <div
            className="w-full md:w-1/2 flex justify-center relative"
            data-aos="fade-left"
          >
            <img
              src="/assets/imgs/img4.webp" // <- substitua pela foto dele
              alt="Wesley Oliveira tocando violoncelo"
              className="w-[40%] max-w-md rounded-xl shadow-2xl shadow-blue-500/20 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* 🔹 MODAL (opcional — mantive para você reaproveitar se quiser) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div
              className="bg-[#0A0F1C] border border-blue-500/30 text-white rounded-xl p-6 w-full max-w-md shadow-xl relative animate-[scale_0.3s_ease-in-out]"
              data-aos="zoom-in"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
                aria-label="Fechar formulário"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">
                Contato Profissional
              </h3>

              <p className="text-gray-300 text-center mb-4">
                Entre em contato para concertos, gravações, eventos e projetos.
              </p>

              <a
                href="https://wa.me/5531971705728"
                target="_blank"
                className="block w-full text-center py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 shadow-lg shadow-blue-500/40 transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
