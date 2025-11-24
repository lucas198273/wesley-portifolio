// src/pages/ContactPage.tsx

import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-24 bg-black min-h-screen text-white">
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-[#4db8ff] drop-shadow-md"
            data-aos="fade-down"
          >
            Fale com WOlyve
          </h1>

          <p
            className="text-gray-300 max-w-2xl mx-auto mt-4"
            data-aos="fade-up"
          >
            Entre em contato para shows, projetos musicais, orquestras,
            parcerias, eventos ou qualquer outro assunto.  
            Estamos aqui para ouvir você.
          </p>
        </div>

        {/* Formulário */}
        <ContactForm />
      </section>
    </main>
  );
}
