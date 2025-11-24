import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-16 border-t border-[#1a7fbf]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* 🔹 Nome / Logo */}
        <h2 className="text-2xl font-bold drop-shadow-sm text-[#4db8ff] tracking-wide">
          WOlyve Music
        </h2>

        {/* 🔹 Ícones sociais */}
        <div className="flex space-x-6 text-2xl items-center">
          <a
            href="https://www.instagram.com/wolyve_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4db8ff] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@wolyve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4db8ff] transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/5531971705728?text=Olá!%20Quero%20falar%20sobre%20shows,%20agendamentos%20ou%20parcerias.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#4db8ff] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* 🔹 Linha divisória e créditos */}
      <div className="border-t border-[#1a7fbf]/30 mt-6 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#4db8ff] font-semibold">WOlyve</span>.  
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
