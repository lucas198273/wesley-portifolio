import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContactFormProps {
  whatsappNumber?: string; // Ex: "5531999999999"
}

export default function ContactForm({
  whatsappNumber = "5531997470497",
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 👉 Inicializa animações
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // 👉 Atualiza inputs
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // 👉 Quando clica em enviar no formulário
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // abre modal
    setIsModalOpen(true);
  }

  // 👉 Gera mensagem formatada
  function generateWhatsappMessage() {
    return encodeURIComponent(
      `🎤 *Novo contato via site oficial do WOlyve*

👤 *Nome:* ${form.name}
📧 *Email:* ${form.email}
❓ *Motivo do contato:* ${form.reason}

💬 *Mensagem:* 
${form.message}

Enviado pelo site oficial.`
    );
  }

  // 👉 Envia para WhatsApp
  function sendToWhatsapp() {
    const msg = generateWhatsappMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setIsModalOpen(false);
  }

  return (
    <>
      {/* FORM */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-[#4db8ff] drop-shadow mb-6">
            Entre em Contato
          </h2>

          <p className="text-center text-gray-300 mb-12">
            Preencha o formulário abaixo e diga como podemos te ajudar.  
            Você será guiado até o WhatsApp com a mensagem pronta.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#0d0d0d] p-8 rounded-2xl shadow-xl border border-[#1a7fbf]/20"
          >
            {/* NOME */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">Seu nome</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#1a7fbf]/40 focus:border-[#4db8ff] outline-none transition"
                placeholder="Digite seu nome completo"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#1a7fbf]/40 focus:border-[#4db8ff] outline-none transition"
                placeholder="Seu email"
              />
            </div>

            {/* MOTIVO */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Motivo do contato
              </label>
              <input
                name="reason"
                required
                value={form.reason}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#1a7fbf]/40 focus:border-[#4db8ff] outline-none transition"
                placeholder="Show, parceria, orçamento, etc."
              />
            </div>

            {/* MENSAGEM */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">Mensagem</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 h-32 rounded-lg bg-black border border-[#1a7fbf]/40 focus:border-[#4db8ff] outline-none transition resize-none"
                placeholder="Descreva sua necessidade"
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#4db8ff] hover:bg-[#1a7fbf] transition font-bold text-black text-lg"
            >
              Avançar para confirmação
            </button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="bg-[#0d0d0d] p-8 rounded-2xl shadow-xl border border-[#1a7fbf]/30 max-w-md w-full"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold text-[#4db8ff] mb-4">
              Tudo certo, {form.name}! 🚀
            </h3>

            <p className="text-gray-300 mb-6">
              Você será redirecionado para o WhatsApp com uma mensagem já
              formatada contendo seus dados.  
              <br />
              <br />
              👉 *A mensagem só será enviada quando você clicar em “Enviar no WhatsApp”.*
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                Revisar
              </button>

              <button
                onClick={sendToWhatsapp}
                className="px-4 py-2 rounded-lg bg-[#4db8ff] hover:bg-[#1a7fbf] text-black font-semibold transition"
              >
                Entendi as orientações
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
