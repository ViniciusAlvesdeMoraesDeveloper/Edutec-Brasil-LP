'use client'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Beatriz Oliveira",
        role: "Técnica em Enfermagem",
        company: "Hospital Santa Maria – Coronel Fabriciano, MG",
        avatar: "/api/placeholder/100/100", // Substitua por foto real
        content: "Já trabalhava como auxiliar de enfermagem há 3 anos, mas faltava o diploma oficial. O curso da Edutec foi 100% EAD e prático, com aulas que aproveitam nossa experiência. Consegui o diploma em poucos meses e agora sou técnica reconhecida – meu salário aumentou 40% e entrei no hospital dos meus sonhos!",
        rating: 5,
        course: "Técnico em Enfermagem"
    },
    {
        id: 2,
        name: "Carlos Eduardo Silva",
        role: "Técnico em Eletromecânica",
        company: "Indústria Metalúrgica Alfa",
        avatar: "/api/placeholder/100/100",
        content: "Com experiência na manutenção industrial, precisava formalizar para crescer na carreira. O curso foi direto, com foco em automação e projetos reais. Em tempo recorde, conquistei o diploma reconhecido pelo MEC e hoje sou responsável pela equipe de manutenção preventiva. Recomendo para quem quer subir rápido!",
        rating: 5,
        course: "Técnico Eletromecânica"
    },
    {
        id: 3,
        name: "Mariana Costa",
        role: "Corretora de Imóveis",
        company: "Imobiliária Prime – MG",
        avatar: "/api/placeholder/100/100",
        content: "Sempre vendia imóveis por conta própria, mas sem o CRECI não conseguia fechar grandes negócios. O curso TTI da Edutec foi rápido, flexível e com todo o conteúdo prático de legislação e marketing. Tirei meu CRECI em meses e agora tenho minha própria carteira de clientes. Mudou minha vida financeira!",
        rating: 5,
        course: "Transação Imobiliária (TTI)"
    },
    {
        id: 4,
        name: "Antônio Pires",
        role: "Consultor Agrícola",
        company: "Fazenda Progresso – Interior de MG",
        avatar: "/api/placeholder/100/100",
        content: "Trabalhava na roça desde pequeno, mas queria profissionalizar. O Técnico em Agricultura trouxe técnicas modernas de precisão e sustentabilidade que apliquei imediatamente. A produtividade da fazenda subiu 25% e ganhei mais autonomia. Curso prático, EAD que cabe na rotina do campo!",
        rating: 5,
        course: "Técnico em Agricultura"
    },
    {
        id: 5,
        name: "Juliana Rocha",
        role: "Técnica em Enfermagem",
        company: "Clínica Vida Nova",
        avatar: "/api/placeholder/100/100",
        content: "Precisava de uma formação sólida e rápida para entrar no mercado de saúde com qualidade. Os professores são atenciosos, as aulas práticas são reais e o suporte é excelente. Concluí o curso aproveitando minha experiência anterior e já estou atuando com segurança e orgulho. Vale cada minuto!",
        rating: 5,
        course: "Técnico em Enfermagem"
    },
    {
        id: 6,
        name: "Guilherme Santos",
        role: "Corretor Autônomo – CRECI-MG",
        company: "Autônomo",
        avatar: "/api/placeholder/100/100",
        content: "Conciliava trabalho e estudo sem problemas graças à flexibilidade EAD. O material do TTI é excelente e direto: aprendi tudo para tirar o CRECI e começar a vender de verdade. Em pouco tempo já estava com minha carteira ativa. Para quem tem pressa em crescer, é a melhor escolha!",
        rating: 5,
        course: "Transação Imobiliária (TTI)"
    }
]

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 6000) // Aumentei para 6s para ler melhor
        return () => clearInterval(timer)
    }, [])

    const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + 3)
    if (visibleTestimonials.length < 3) {
        visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length))
    }

    return (
        <section id="depoimentos" className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
                        Alunos que Conquistaram o Diploma Rápido e Transformaram a Carreira
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                        Veja como pessoas como você formalizaram a experiência, ganharam reconhecimento oficial e aceleraram o sucesso profissional com a Edutec.
                    </p>
                </div>

                {/* Grid de Depoimentos - mostra 3 por vez */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-md">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                                    <p className="text-base text-gray-700">{testimonial.role}</p>
                                    <p className="text-sm text-gray-500 italic">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-center">
                                <p className="text-base font-semibold text-green-800">
                                    {testimonial.course} • Diploma reconhecido MEC
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicadores de navegação (um por grupo de 3) */}
                <div className="flex justify-center space-x-3 mb-12">
                    {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index * 3)}
                            className={`w-4 h-4 rounded-full transition-all ${index === Math.floor(currentTestimonial / 3) ? 'bg-green-600 scale-125' : 'bg-gray-300'}`}
                            aria-label={`Ir para grupo de depoimentos ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Estatística Final - reforçando prova social */}
                <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto border border-blue-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-5xl font-bold text-green-600 mb-2">4.9</div>
                                <div className="text-xl text-gray-700">Avaliação média dos alunos</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                                <div className="text-xl text-gray-700">Recomendam a Edutec</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-green-600 mb-2">10K+</div>
                                <div className="text-xl text-gray-700">Alunos transformados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}