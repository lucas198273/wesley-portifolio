"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutCp() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // animações rápidas e suaves
  }, []);

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#3B4C1C]"
      id="sobre"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bloco de informações */}
          <div data-aos="fade-right" className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <img
                  src="/assets/logo.webp"
                  alt="Logo do Estúdio"
                  className="w-full h-full object-cover rounded-full border-2 border-[#4A5D23] shadow-lg"
                />
              </div>
              <h2 className="text-[#9ACD32] text-4xl font-bold tracking-tight">
                Nosso Estúdio
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-gray-200 text-lg leading-relaxed">
                Atendemos em um ambiente acolhedor, moderno e criativo — projetado para garantir
                conforto, segurança e a melhor experiência possível durante seu atendimento.
              </p>

              <p className="text-gray-300 text-lg">
                Localizados no coração de Betim, estamos prontos para receber você com todo o
                profissionalismo e cuidado que sua arte merece.
              </p>

              {/* Mapa */}
              <div
                data-aos="fade-up"
                className="w-full h-64 rounded-lg overflow-hidden shadow-xl border border-[#4A5D23]/40"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9897350156!2d-44.1994186!3d-19.9669339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cafc1e0b8f3f7b%3A0x1234567890abcdef!2sAvenida%20Amazonas%20608%2C%20Centro%2C%20Betim%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1741203465263!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Estúdio"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bloco de fotos */}
          <div data-aos="fade-left" className="flex flex-col gap-8">
            <h3 className="text-[#9ACD32] text-3xl font-semibold">
              Nosso Espaço
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-48 rounded-xl overflow-hidden group shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={`/assets/businesimg/img-es-${i}.webp`}
                    alt={`Foto do Estúdio ${i}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Botão de ação */}
            <div className="flex justify-center lg:justify-start mt-4">
              <a
                href="/piercing"
                className="inline-block bg-[#4A5D23] hover:bg-[#3B4C1C] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300"
              >
                Ver Piercings e Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCp;
