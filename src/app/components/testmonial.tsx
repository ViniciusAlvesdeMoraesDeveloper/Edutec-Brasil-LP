'use client'
import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Maria Silva",
        role: "Desenvolvedora Front-end",
        company: "Tech Solutions",
        avatar: "/api/placeholder/100/100",
        content: "A Edutec transformou minha carreira. Em 6 meses já estava atuando como desenvolvedora júnior. A metodologia prática fez toda a diferença!",
        rating: 5,
        course: "Programação Full Stack"
    },
    {
        id: 2,
        name: "João Santos",
        role: "Cientista de Dados",
        company: "Data Analytics Co.",
        avatar: "/api/placeholder/100/100",
        content: "O curso de Data Science superou minhas expectativas. Os projetos reais me prepararam perfeitamente para o mercado de trabalho.",
        rating: 5,
        course: "Data Science & IA"
    },
    {
        id: 3,
        name: "Ana Costa",
        role: "Product Designer",
        company: "Design Innovation",
        avatar: "/api/placeholder/100/100",
        content: "A mentoria individual foi fundamental para meu desenvolvimento. Hoje trabalho em uma das maiores empresas de tecnologia do país.",
        rating: 5,
        course: "UX/UI Design"
    },
    {
        id: 4,
        name: "Pedro Oliveira",
        role: "DevOps Engineer",
        company: "Cloud Systems",
        avatar: "/api/placeholder/100/100",
        content: "A certificação da Edutec é reconhecida no mercado. Consegui minha vaga antes mesmo de terminar o curso!",
        rating: 5,
        course: "Cloud Computing"
    },
    {
        id: 5,
        name: "Carla Rodrigues",
        role: "Mobile Developer",
        company: "App Masters",
        avatar: "/api/placeholder/100/100",
        content: "Do zero ao profissional em menos de 1 ano. A Edutec me deu toda base técnica e confiança que precisava.",
        rating: 5,
        course: "Desenvolvimento Mobile"
    },
    {
        id: 6,
        name: "Ricardo Lima",
        role: "Full Stack Developer",
        company: "Digital Transform",
        avatar: "/api/placeholder/100/100",
        content: "Investi na minha educação com a Edutec e foi a melhor decisão da minha carreira. Salário triplicou em 1 ano!",
        rating: 5,
        course: "Programação Avançada"
    }
]

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + 3)
    
    // Garante que sempre mostre 3 depoimentos
    if (visibleTestimonials.length < 3) {
        visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length))
    }

    return (
        <section id='text' className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                        O que nossos alunos dizem
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Histórias reais de transformação e sucesso profissional
                    </p>
                </div>

                {/* Grid de Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Header do Depoimento */}
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                                ))}
                            </div>

                            {/* Conteúdo do Depoimento */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Curso */}
                            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                                <p className="text-sm text-green-800 font-semibold">
                                    Curso: {testimonial.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2">
                    {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Estatística Final */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-blue-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.9/5</div>
                                <div className="text-gray-600">Avaliação média</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                                <div className="text-gray-600">Recomendariam a Edutec</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10K+</div>
                                <div className="text-gray-600">Depoimentos positivos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}