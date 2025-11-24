import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function About() {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll automático para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Mostrar botão scroll ao topo quando rolar 200px para baixo
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup do listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar para o topo ao clicar no botão
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      

      {/* Botão voltar ao topo */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-[#00b4d8] hover:bg-[#009acd] text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
