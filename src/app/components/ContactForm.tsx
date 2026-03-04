'use client'
import { useState } from 'react'

interface FormData {
  nome: string
  email: string
  telefone: string
  curso: string
  graduation: string
  timeActuation: string
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
    curso: '',
    graduation: '',
    timeActuation: '',
  })

  const [enviando, setEnviando] = useState(false)
  const [mensagem, setMensagem] = useState<string | null>(null)
  const [erro, setErro] = useState<string | null>(null)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const telefoneRegex = /^\+55\s?\(\d{2}\)\s?\d{5}-\d{4}$/

  const formatPhoneMask = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 12)
    if (digits.length === 0) return ''
    let formatted = '+55 (' + digits.slice(0, 2) + ') '
    if (digits.length > 2) formatted += digits.slice(2, 7)
    if (digits.length > 7) formatted += '-' + digits.slice(7, 12)
    return formatted
  }

  const cursosDisponiveis = [
  // ÁREA DA SAÚDE
  "Técnico em Agente Comunitário de Saúde",
  "Técnico em Análises Clínicas",
  "Técnico em Cuidados de Idosos",
  "Técnico em Equipamentos Biomédicos",
  "Técnico em Estética",
  "Técnico em Farmácia",
  "Técnico em Gerência em Saúde",
  "Técnico em Nutrição e Dietética",
  "Técnico em Radiologia",
  "Técnico em Saúde Bucal",
  "Técnico em Veterinária",
  "Técnico em Enfermagem",  

  // ÁREA DE ENGENHARIA E MANUTENÇÃO
  "Técnico em Automação Industrial",
  "Técnico em Eletromecânica",
  "Técnico em Eletrônica",
  "Técnico em Eletrotécnica",
  "Técnico em Manutenção de Máquinas Industriais",
  "Técnico em Manutenção de Máquinas Navais",
  "Técnico em Manutenção de Máquinas Pesadas",
  "Técnico em Metalurgia",
  "Técnico em Química",
  "Técnico em Refrigeração e Climatização",
  "Técnico em Soldagem",

  // ÁREA DE ADMINISTRAÇÃO E GESTÃO
  "Técnico em Administração",
  "Técnico em Logística",
  "Técnico em Marketing",
  "Técnico em Qualidade",
  "Técnico em Recursos Humanos",
  "Técnico em Secretaria Escolar",
  "Técnico em Segurança do Trabalho",
  "Técnico em Serviços Jurídicos",
  "Técnico em Transações Imobiliárias",
  "Técnico em Vendas",
  "Técnico em Eventos",

  // ÁREA DE CONSTRUÇÃO E INFRAESTRUTURA
  "Técnico em Agrimensura",
  "Técnico em Edificações",
  "Técnico em Mineração",
  "Técnico em Prevenção e Controle de Incêndios",
  "Técnico em Defesa Civil",
  "Técnico em Trânsito",

  // ÁREA DO MEIO AMBIENTE E AGROPECUÁRIA
  "Técnico em Agricultura",
  "Técnico em Agroindústria",
  "Técnico em Agropecuária",
  "Técnico em Aquicultura",
  "Técnico em Meio Ambiente",

  // ÁREA DE TECNOLOGIA E INFORMÁTICA
  "Técnico em Biotecnologia",
  "Técnico em Design Gráfico",
  "Técnico em Desenvolvimento de Sistemas",
  "Técnico em Informática para a Internet",
  "Técnico em Redes de Computadores",
  "Técnico em Sistemas de Energia Renovável",
  "Técnico em Telecomunicações",

  // ÁREA DE SERVIÇOS
  "Técnico em Gastronomia",
  "Técnico em Óptica",
  "Técnico em Design de Interiores",
  "Técnico em Guia de Turismo",

  // Final da lista
  "Outro (especifique no contato)"
].sort();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'telefone') {
      let digits = value.replace(/\D/g, '').slice(0, 14)
      if (digits.startsWith('55')) digits = digits.slice(2, 14)
      digits = digits.slice(0, 12)
      const formatted = formatPhoneMask(digits)
      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    if (name === 'nome') {
      const apenasLetras = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
      setFormData((prev) => ({ ...prev, [name]: apenasLetras }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMensagem(null)
    setErro(null)

    // Validações
    if (formData.nome.trim().length < 3) {
      setErro('O nome deve ter pelo menos 3 caracteres.')
      return
    }
    if (!emailRegex.test(formData.email)) {
      setErro('Por favor, insira um e-mail válido.')
      return
    }
    if (!telefoneRegex.test(formData.telefone)) {
      setErro('Telefone inválido. Use o formato +55 (99) 99999-9999.')
      return
    }
    if (!formData.curso) {
      setErro('Selecione o curso de interesse.')
      return
    }
    if (!formData.graduation) {
      setErro('Informe se possui Ensino Médio completo.')
      return
    }
    if (!formData.timeActuation) {
      setErro('Informe o tempo de atuação na área.')
      return
    }

    setEnviando(true)

    try {
      const payload = {
        form_type: 'alunos_modal',
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        curso: formData.curso,
        graduation: formData.graduation,
        timeActuation: formData.timeActuation,
        source: 'next_form',
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
      }

      // Log para debug: veja no console o que está sendo enviado
      console.log('Payload enviado:', payload)

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      console.log('Status da resposta:', response.status, response.statusText)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Erro na resposta:', errorText)
        throw new Error(`Erro HTTP ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        // Salva o consultor retornado (para página de obrigado)
        localStorage.setItem(
          'assignedConsultor',
          typeof result.consultor === 'object'
            ? JSON.stringify(result.consultor)
            : String(result.consultor || '')
        )

        // Evento GA4
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit_success', {
            event_category: 'Lead',
            event_label: 'Formulário Contato',
            value: 1,
            curso: formData.curso,
            consultor: result.consultor,
          })
        }

        window.location.href = '/obrigado'
      } else {
        setErro('Erro ao registrar dados: ' + (result.error || 'Tente novamente'))
      }
    } catch (err) {
      console.error('Erro completo no envio:', err)
      setErro('Erro de conexão ou servidor. Tente novamente ou verifique sua internet.')
    } finally {
      setEnviando(false)
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
              {erro && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <strong>Erro: </strong>
                  {erro}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    maxLength={100}
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
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  maxLength={19}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black"
                  placeholder="+55 (99) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Possui Ensino Médio Completo? <span className="text-red-600 text-xl">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="graduation"
                      value="Sim"
                      checked={formData.graduation === 'Sim'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Sim
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="graduation"
                      value="Não"
                      checked={formData.graduation === 'Não'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Não
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual o tempo de Atuação na Área? <span className="text-red-600 text-xl">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="timeActuation"
                      value="Menos de 1 Ano"
                      checked={formData.timeActuation === 'Menos de 1 Ano'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Menos de 1 Ano
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="timeActuation"
                      value="1 Ano ou Mais"
                      checked={formData.timeActuation === '1 Ano ou Mais'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    1 Ano ou Mais
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="curso" className="block text-sm font-medium text-gray-700 mb-2">
                  Curso de Interesse *
                </label>
                <select
                  id="curso"
                  name="curso"
                  value={formData.curso}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-black bg-white"
                >
                  <option value="">Selecione o curso desejado</option>
                  {cursosDisponiveis.map((curso) => (
                    <option key={curso} value={curso}>
                      {curso}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">💡</span>
                  <p className="text-blue-800 text-sm">
                    Ao enviar este formulário, nossa equipe de consultores entrará em contato com você em breve via WhatsApp ou e-mail.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={enviando}
              >
                {enviando ? 'Processando...' : 'Solicitar Contato Agora'}
              </button>
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