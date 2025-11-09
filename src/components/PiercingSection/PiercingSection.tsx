"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";
import { toast } from "react-toastify";

interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  available?: boolean;
  artist?: string;
}

interface CategorySectionProps {
  category: "piercing";
}

export default function PiercingSection({ category }: CategorySectionProps) {
  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleWhatsApp = (product: Product) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse em um piercing semelhante ao trabalho de ${product.artist || "nosso estúdio"} (${product.name}).`
    );
    window.open(`https://wa.me/5531994340017?text=${mensagem}`, "_blank");
    toast.info("Abrindo conversa no WhatsApp...", { autoClose: 2500 });
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-black via-[#0f0f0f] to-[#1f2d10] relative overflow-hidden"
      id="piercings"
    >
      <h3
        className="text-4xl font-bold text-center text-[#9ACD32] mb-10"
        data-aos="fade-up"
      >
        Trabalhos — Piercings
      </h3>

      <div className="relative" data-aos="fade-up">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={idx * 80}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[260px]"
              >
                <div className="relative flex flex-col bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  {/* Imagem de fundo cobrindo o card */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradiente sobre imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Título e nome do artista */}
                  <div className="absolute top-3 left-0 right-0 text-center">
                    <h4 className="text-[#9ACD32] font-bold text-lg uppercase tracking-wide drop-shadow-md">
                      Trabalhos {item.category ? `— ${item.category}` : ""}
                    </h4>
                  </div>

                  {/* Botão WhatsApp */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button
                      onClick={() => handleWhatsApp(item)}
                      className="bg-[#4A5D23] hover:bg-[#3B4C1C] text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#4A5D23] text-white p-2 rounded-full z-10 hover:bg-[#3B4C1C] transition"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#4A5D23] text-white p-2 rounded-full z-10 hover:bg-[#3B4C1C] transition"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
