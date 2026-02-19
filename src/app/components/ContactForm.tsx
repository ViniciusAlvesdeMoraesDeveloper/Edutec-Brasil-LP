'use client'
import { useState } from 'react'

interface FormData {
  nome: string
  email: string
  telefone: string
  
}

    


/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}



export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    
  })

    const [enviando, setEnviando] = useState(false);
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMensagem(null);
        setErro(null);
        setEnviando(true);

        try {
            console.log("Iniciando envio para Apps Script");
            console.log("Payload formulário", formData);

            const payload = {
                form_type: "alunos_modal",
                name: formData.nome,
                email: formData.email,
                phone: formData.telefone,
                source: "next_form",
                pageUrl: typeof window !== "undefined" ? window.location.href : "",
                userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
            };
            console.log("Payload JSON", payload);

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwdMwlI0O23wyJCSAHsqzy2sshU2O1pvoutR9JDLR3TpCjIR9r-Y5d4GHjFF1CosklzKA/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const text = await response.text();
            console.log("Resposta Apps Script status", response.status);
            console.log("Resposta Apps Script corpo", text);

            if (!response.ok) {
                setErro(`Erro HTTP ${response.status}`);
                return;
            }

            let data: { success?: boolean; error?: string } | null = null;
            try {
                data = JSON.parse(text);
            } catch {
                data = null;
            }

            if (data && data.success === false) {
                setErro(data.error || "Não foi possível enviar seus dados.");
                return;
            }
            
            setFormData({
              nome:'',
              email:"",
              telefone:"",
            })
            setMensagem("Dados enviados com sucesso!");
            window.scrollTo({top:0, behavior:'smooth'});
            
        } catch {
            setErro("Ocorreu um erro ao enviar seus dados. Tente novamente.");
        } finally {
            setEnviando(false);
        }
    }


  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-700">
              Fale conosco e descubra como podemos transformar sua carreira
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-shadow-lime-700 font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">💡</span>
                  <p className="text-blue-800 text-sm">
                    Ao enviar este formulário, nossa equipe de consultores entrará em contato com você em breve
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                disabled={enviando}
              >
               {enviando ? "Enviando..." : "Solicitar Contato Agora"}
              </button>
              {mensagem && <p className="text-green-600 font-medium text-center">{mensagem}</p>}

              {erro && <p className="text-red-600 font-medium text-center">{erro}</p>}

            </form>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">📞</div>
                <div className="font-semibold text-gray-800">Atendimento</div>
                <div className="text-gray-600 text-sm">Seg à Sex: 8h-18h</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">💬</div>
                <div className="font-semibold text-gray-800">WhatsApp</div>
                <div className="text-gray-600 text-sm">Resposta rápida</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-green-600 text-2xl mb-2">🎓</div>
                <div className="font-semibold text-gray-800">Consultoria</div>
                <div className="text-gray-600 text-sm">Educacional gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}