import { Link } from "react-router-dom";
export default function AboutMusicArtistWesley() {

  // 🔧 >>> CONFIGURAÇÃO FÁCIL DO TAMANHO DA IMAGEM <<<
  const imageSizeMobile = "w-60";     // tamanho no mobile
  const imageSizeDesktop = "w-96";    // tamanho no desktop (md+)
  // Exemplo de tamanhos: w-32, w-40, w-48, w-56, w-64, w-72, w-80

 

  return (
    <section className="bg-black border-t-4 border-blue-600 py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* 🎻 Imagem do músico */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/imgs/img1.webp"
            alt="Wesley Oliveira — músico e violoncelista"
            className={`${imageSizeMobile} md:${imageSizeDesktop} rounded-xl shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform duration-300 ease-in-out`}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 🎵 Texto */}
        <div className="w-full  md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-400 mb-5">
            Wesley Oliveira — Violoncelista e Artista Musical
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Wesley Oliveira é um músico apaixonado pela arte e movido pela
            intensidade da música instrumental. Seu violoncelo é extensão de sua
            alma, transformando emoções em melodias marcantes que tocam o público
            profundamente.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Com experiência em apresentações ao vivo, eventos especiais,
            cerimônias e produções artísticas, Wesley domina técnicas clássicas e
            contemporâneas, entregando performances únicas, sensíveis e
            inesquecíveis.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Sua musicalidade é marcada por precisão, sentimento e presença
            artística — um equilíbrio que transforma cada apresentação em uma
            experiência singular.
          </p>
            <Link to="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30 text-white font-semibold rounded-md hover:shadow-blue-400/40">
                Agendar apresentação
            
            </Link>
        
        </div>
      </div>
    </section>
  );
}
