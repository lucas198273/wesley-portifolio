import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SocialMediaSection: React.FC = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center no-font-boost">

          {/* 🎵 Logo do músico */}
          <img
            src="/assets/logo.webp"
            alt="Logo Wesley Oliveira"
            className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-xl bg-black"
          />

          {/* 🎻 Nome / Título */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400 drop-shadow-md">
            Wesley Oliveira • Violoncelista
          </h2>

          {/* 🎼 Descrição */}
          <p className="mb-6 text-lg italic text-gray-300">
            Acompanhe performances, projetos musicais, bastidores, ensaios e novidades
            sobre o trabalho artístico de Wesley Oliveira.
          </p>

          {/* 🔗 Redes sociais */}
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://instagram.com/" // coloque o insta dele aqui
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110 text-blue-500 hover:text-white"
            >
              <FaInstagram className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaSection;
