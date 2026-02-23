'use client'
import { useState } from 'react'

const faqItems = [
    {
        question: "Quanto tempo leva para conquistar o diploma técnico?",
        answer: "Nossos cursos técnicos EAD são projetados para conclusão em tempo recorde: em média de 6 a 12 meses, dependendo do curso e da sua dedicação. Quem já tem experiência prática pode acelerar ainda mais aproveitando o aproveitamento de conhecimentos prévios. Tudo 100% online e flexível!"
    },
    {
        question: "O diploma é reconhecido pelo MEC e válido em todo o Brasil?",
        answer: "Sim! Todos os nossos cursos técnicos são devidamente registrados e reconhecidos pelo MEC (Ministério da Educação), com validade nacional. Você pode consultar a regularidade no portal e-MEC ou SISTEC a qualquer momento. O diploma tem o mesmo valor que o de cursos presenciais."
    },
    {
        question: "Quais são os requisitos para me matricular?",
        answer: "Para a maioria dos cursos técnicos, basta ter concluído o Ensino Médio (ou estar cursando). Não exigimos vestibular ou prova de ingresso. Algumas áreas (como Enfermagem) podem requerer estágio supervisionado presencial, mas o curso teórico é 100% EAD."
    },
    {
        question: "Preciso fazer prova ou exame final presencial?",
        answer: "A maioria das avaliações é online (provas, trabalhos e atividades na plataforma). Para alguns cursos, há avaliações práticas ou estágio presencial obrigatório (conforme normas do MEC), mas organizamos tudo de forma conveniente, inclusive em polos próximos a Coronel Fabriciano e região de MG."
    },
    {
        question: "Posso aproveitar minha experiência profissional para reduzir o tempo do curso?",
        answer: "Sim! Enviamos um formulário de aproveitamento de estudos/conhecimentos prévios logo após a matrícula. Muitos alunos reduzem significativamente o tempo de conclusão com base em experiência comprovada (certificados, carteira de trabalho, etc.)."
    },
    {
        question: "Como funciona o curso 100% EAD na prática?",
        answer: "Você acessa a plataforma online a qualquer hora, assiste videoaulas, faz exercícios, participa de fóruns e tira dúvidas com tutores via chat ou WhatsApp. Aulas práticas são simuladas ou realizadas em laboratórios virtuais/ presenciais mínimos conforme exigido."
    },
    {
        question: "Há estágio obrigatório? Como é organizado?",
        answer: "Depende do curso: áreas como Enfermagem e Eletromecânica exigem estágio supervisionado (geralmente 200–400 horas). Nós ajudamos a encontrar vagas em empresas parceiras na região de Minas Gerais, e o estágio pode ser remunerado ou aproveitado da sua experiência atual."
    },
    
    {
        question: "Posso começar imediatamente?",
        answer: "Sim! Matrículas abertas o ano todo. Após confirmação de pagamento, você recebe acesso à plataforma em até 24h e já inicia os estudos."
    }
]

export default function FAQAndCapture() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        course: ''
    })

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        alert('Obrigado! Entraremos em contato via WhatsApp em breve para acelerar sua matrícula.')
        
        setFormData({ name: '', whatsapp: '', email: '', course: '' })
    }

    return (
        <section id="faq-captura" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Título da dobra */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
                        Tire Suas Últimas Dúvidas e Conquiste Seu Diploma Rápido
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Respondemos as perguntas mais frequentes para você decidir com total confiança. Ainda com dúvida? Deixe seus dados e um consultor te explica tudo via WhatsApp!
                    </p>
                </div>

                {/* FAQ Acordeão */}
                <div className="mb-16 space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-lg text-gray-800 hover:bg-green-50 transition"
                            >
                                <span>{item.question}</span>
                                <span className="text-2xl text-green-600">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}