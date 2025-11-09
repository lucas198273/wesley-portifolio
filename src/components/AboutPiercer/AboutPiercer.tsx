


export default function AboutPiercer() {




  return (
    <section className="bg-black border-t-4 border-[#556b2f] py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem da profissional à esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/piercing/img-p1.webp"
            alt="Body Piercer residente"
            className="max-w-[220px] md:max-w-[280px] rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#556b2f] mb-5">
            Profissionalismo e Estilo em Cada Piercing
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Conheça nossa body piercer residente, especialista em transformar estilo e atitude em arte corporal com total segurança e técnica. Experiência, cuidado e personalidade em cada aplicação. Agende seu horário e viva essa transformação com confiança.
          </p>
         
        </div>
      </div>
    </section>
  );
}
