'use client'
import { useState, useEffect } from 'react'

const carouselSlides = [
    {
        id: 1,
        title: "Programação & Desenvolvimento",
        description: "Domine as tecnologias mais demandadas do mercado com projetos reais e mentoria especializada.",
        icon: "💻",
        stats: "95% de empregabilidade"
    },
    {
        id: 2,
        title: "Data Science & Inteligência Artificial",
        description: "Aprenda machine learning, análise de dados e IA com cases de empresas reais.",
        icon: "🤖",
        stats: "Salário médio: R$ 8.500"
    },
    {
        id: 3,
        title: "Design UX/UI & Product Design",
        description: "Crie experiências digitais incríveis e interfaces que encantam usuários.",
        icon: "🎨",
        stats: "100% dos alunos atuando"
    },
    {
        id: 4,
        title: "Cloud Computing & DevOps",
        description: "Especialize-se em infraestrutura cloud e metodologias ágeis de desenvolvimento.",
        icon: "☁️",
        stats: "Certificação internacional"
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
        <div  className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
            {/* Banner Hero */}
            <div className="relative bg-gradient-to-r from-green-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Sua carreira em
                                <span className="text-green-300 block">Tecnologia</span>
                            </h1>

                            <p className="text-lg md:text-xl text-green-100">
                                Cursos práticos com foco no mercado
                            </p>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold mb-4 text-center">Por que a Edutec?</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "🎯", text: "Mentoria" },
                                        { icon: "💼", text: "Projetos" },
                                        { icon: "📈", text: "Empregabilidade" },
                                        { icon: "🏆", text: "Certificação" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center bg-white/10 p-2 rounded-lg">
                                            <span className="text-lg mr-2">{item.icon}</span>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating elements menores */}
                            <div className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-bold rotate-3 shadow">
                                🎓 10K+
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold -rotate-3 shadow">
                                ⭐ 4.9/5
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider menor */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">
                        <path d="M0,0V30c120-30,240-30,360-10s240,40,360,40s240-30,360-40s240,10,360,10V0Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>

            {/* About Us Compact - Espaçamento ajustado */}
            <section id='sobre' className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                            Sobre a Edutec Brasil
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Há mais de 15 anos somos referência em educação tecnológica, formando profissionais
                            que estão transformando o mercado digital brasileiro.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { number: "15+", text: "Anos de experiência" },
                            { number: "10.000+", text: "Alunos formados" },
                            { number: "95%", text: "Taxa de empregabilidade" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">
                                    {stat.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <h3 className="text-xl font-bold text-blue-800 mb-3">
                                    Metodologia Exclusiva
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    Desenvolvemos uma abordagem única que combina teoria sólida com prática intensiva,
                                    preparando você para os desafios reais do mercado de trabalho.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Aprendizado baseado em projetos reais",
                                        "Mentoria individualizada",
                                        "Conectamos você com empresas",
                                        "Certificação reconhecida"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <img
                                    src="/api/placeholder/500/300"
                                    alt="Metodologia Edutec"
                                    className="rounded-lg shadow-lg"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-3 rounded-lg shadow-lg">
                                    <div className="font-bold text-sm">Educação que</div>
                                    <div className="font-bold text-sm">transforma!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Compact */}
            <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                            Nossas Áreas de Especialização
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Conheça as trilhas de aprendizado que vão acelerar sua carreira em tecnologia
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="overflow-hidden rounded-xl shadow-xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselSlides.map((slide) => (
                                    <div key={slide.id} className="w-full flex-shrink-0">
                                        <div className="bg-white p-6 md:p-8">
                                            <div className="grid lg:grid-cols-2 gap-6 items-center">
                                                <div>
                                                    <div className="text-5xl mb-4">{slide.icon}</div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-3">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                                        {slide.description}
                                                    </p>
                                                    <div className="bg-green-100 border border-green-200 rounded-lg p-3 inline-block mb-3">
                                                        <span className="text-green-800 font-semibold">
                                                            {slide.stats}
                                                        </span>
                                                    </div>
                                                   
                                                </div>
                                                <div className="relative">
                                                    <img
                                                        src={`/api/placeholder/600/400?text=${slide.title}`}
                                                        alt={slide.title}
                                                        className="rounded-lg shadow-lg w-full"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center mt-6 space-x-3">
                            {carouselSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ir para o slide ${index + 1}`}
                                    className={`w-10 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                            aria-label="Slide anterior"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
                            aria-label="Próximo slide"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}