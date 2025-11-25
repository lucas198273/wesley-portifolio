import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { products } from "../../data/Product";

interface CategorySectionProps {
  category: "apresentacoes" | "orquestras" | "ensaios" | "projetos";
}

export default function CategorySection({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const categoryTitles: Record<CategorySectionProps["category"], string> = {
    apresentacoes: "Apresentações",
    orquestras: "Orquestras e Concertos",
    ensaios: "Ensaios e Estudos",
    projetos: "Projetos e Grupos",
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de falar sobre o trabalho do músico WOlyver referente à categoria: ${categoryTitles[category]}.`
    );

    const link = `https://wa.me/553197470497?text=${msg}`;
    window.open(link, "_blank");
  };

  return (
    <div className="mb-20">
      {/* 🔹 Título */}
      <h3
        className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-wide"
        data-aos="fade-up"
      >
        {categoryTitles[category]}
      </h3>

      {/* 🔹 Carrossel */}
      <div className="relative" data-aos="fade-up">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="flex-none w-[70%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="rounded-xl overflow-hidden h-[360px] shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Navegação */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full z-10 hover:bg-blue-900 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full z-10 hover:bg-blue-900 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 🔹 WhatsApp */}
      <div className="flex justify-center mt-10" data-aos="fade-up">
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-900 transition-all duration-300"
        >
          <MessageCircle size={20} />
          Falar sobre esta categoria
        </button>
      </div>
    </div>
  );
}
