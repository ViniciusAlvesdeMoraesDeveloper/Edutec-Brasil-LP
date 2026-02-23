'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const carouselSlides = [
    {
        id: 1,
        title: "Técnico em Enfermagem",
        description: "Prepare-se para atuar na área da saúde, oferecendo cuidados essenciais e promovendo o bem-estar dos pacientes.",
        icon: "🏥",
        stats: "Alta demanda profissional",
        imagePath: "/tecnicoenfermagem.webp"
    },
    {
        id: 2,
        title: "Técnico Eletromecânica",
        description: "Una conhecimentos de eletricidade e mecânica para projetar e manter sistemas industriais complexos.",
        icon: "⚙️",
        stats: "Salário competitivo na indústria",
        imagePath: "/tecnicoeletromecanica.webp"
    },
    {
        id: 3,
        title: "Técnico em Transação Imobiliária (TTI)",
        description: "Obtenha a formação necessária para atuar como corretor de imóveis, intermediando compras, vendas e aluguéis.",
        icon: "🏠",
        stats: "Seja um corretor credenciado",
        imagePath: "/tecnicotrasacaoimobiliaria.webp"
    },
    {
        id: 4,
        title: "Técnico em Agricultura",
        description: "Aprenda sobre gestão de recursos agrícolas, sustentabilidade e tecnologias modernas para o agronegócio.",
        icon: "🚜",
        stats: "Foco no Agronegócio 4.0",
        imagePath: "/tecnicoagricultura.webp"
    }
]

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
            {/* Banner Hero - Grande Promessa */}
            <div className="relative bg-gradient-to-r from-green-600 to-blue-800 text-white overflow-hidden">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-3/5 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                Conquiste seu Diploma Técnico
                                <span className="text-green-300 block mt-2">em até 6 meses!</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto lg:mx-0">
                                Já tem experiência na área? Pare de perder tempo e burocracia:
                                formalize seu conhecimento com curso técnico reconhecido e entre (ou volte)
                                ao mercado mais rápido que nunca.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="#contato"
                                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                                >
                                    Quero meu diploma rápido →
                                </Link>
                                <Link
                                    href="#contato"
                                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-lg px-10 py-5 rounded-xl border border-white/40 transition-all"
                                >
                                    Ver todos os cursos
                                </Link>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm md:text-base">
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                    <span className="text-2xl mr-2">🔥</span>
                                    <span>Reconhecido pelo MEC</span>
                                </div>
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                    <span className="text-2xl mr-2">⚡</span>
                                    <span>100% EAD flexível</span>
                                </div>
                                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                                    <span className="text-2xl mr-2">💼</span>
                                    <span>Alta empregabilidade</span>
                                </div>
                            </div>
                        </div>

                        {/* Card de prova social à direita */}
                        <div className="lg:w-2/5 relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-center">Por que milhares já escolheram a Edutec?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: "🎯", text: "Início imediato" },
                                        { icon: "🚀", text: "Conclusão rápida" },
                                        { icon: "💼", text: "Emprego mais rápido" },
                                        { icon: "🏆", text: "Diploma válido" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col items-center text-center bg-white/10 p-4 rounded-xl">
                                            <span className="text-3xl mb-2">{item.icon}</span>
                                            <span className="font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Elementos flutuantes de credibilidade */}
                            <div className="absolute -top-6 -right-6 bg-yellow-500 text-gray-900 px-5 py-3 rounded-xl text-xl font-bold rotate-6 shadow-xl">
                                +10.000 formados
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-5 py-3 rounded-xl text-xl font-bold -rotate-6 shadow-xl">
                                4.9/5 ⭐ Avaliação
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
                        <path d="M0,0V30c120-30,240-30,360-10s240,40,360,40s240-30,360-40s240,10,360,10V0Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>


           <section id="cursos" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
    <div className="container mx-auto px-4">
        {/* Cabeçalho reforçando a promessa do Hero */}
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
                Conquiste Seu Diploma Técnico em Tempo Recorde
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
                Já tem experiência na área? Pare de esperar anos por um diploma: 
                <span className="text-green-700 font-bold"> formalize seu conhecimento em até poucos meses </span> 
                com cursos 100% EAD, reconhecidos pelo MEC e focados no mercado de trabalho.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                São mais de 60 opções práticas – veja alguns dos mais procurados e acelere sua entrada (ou promoção) no mercado agora!
            </p>

            {/* Mini CTA para capturar atenção logo aqui */}
            <div className="mt-8">
                <a 
                    href="#contato" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                >
                    Quero começar rápido → Matrícula aberta
                </a>
            </div>
        </div>

        
        <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselSlides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0">
                            <div className="bg-white p-8 md:p-12">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="text-6xl mb-6">{slide.icon}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                                            {slide.title}
                                        </h3>
                                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                            
                                            {slide.title.includes("Enfermagem") && 
                                                "Formalize sua experiência em cuidados de saúde e atue rápido em hospitais e clínicas – alta demanda e diploma em tempo recorde."}
                                            {slide.title.includes("Eletromecânica") && 
                                                "Combine eletricidade e mecânica para vagas industriais bem pagas. Conclua rápido e entre no mercado 4.0."}
                                            {slide.title.includes("Transação Imobiliária") && 
                                                "Torne-se corretor credenciado em meses, aproveitando o boom imobiliário sem burocracia demorada."}
                                            {slide.title.includes("Agricultura") && 
                                                "Domine o agronegócio moderno e sustentável. Diploma rápido para oportunidades no campo e na gestão rural."}
                                            {!["Enfermagem", "Eletromecânica", "Transação Imobiliária", "Agricultura"].some(t => slide.title.includes(t)) && 
                                                slide.description} {/* fallback para outros */}
                                        </p>
                                        <div className="bg-green-100 border border-green-200 rounded-lg p-4 inline-block">
                                            <span className="text-green-800 font-semibold text-lg">
                                                {slide.stats} • Conclusão acelerada
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={slide.imagePath}
                                            alt={`Curso Técnico em ${slide.title} - Diploma rápido EAD`}
                                            fill
                                            className="rounded-lg shadow-lg object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                                        {/* Badge de velocidade flutuante no card */}
                                        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-md text-sm">
                                            Diploma em meses!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                aria-label="Slide anterior"
                className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all border border-gray-200"
            >
                <span className="text-2xl">‹</span>
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
                aria-label="Próximo slide"
                className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all border border-gray-200"
            >
                <span className="text-2xl">›</span>
            </button>

            <div className="flex justify-center mt-8 space-x-3">
                {carouselSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                        className={`w-4 h-4 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    </div>
</section>
        </div>
    )
}