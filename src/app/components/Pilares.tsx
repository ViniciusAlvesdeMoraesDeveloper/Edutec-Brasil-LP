'use client'
import { useState } from 'react' 
export default function TrustIndicators() {
    const trustItems = [
        {
            icon: "🏛️",
            title: "Reconhecido pelo MEC / SISTEC",
            description: "Todos os cursos registrados no SISTEC (Sistema Nacional de Informações da Educação Profissional e Tecnológica) do MEC. Diplomas com validade nacional e consulta pública de autenticidade disponível.",
            bgColor: "bg-green-100",
            textColor: "text-green-800"
        },
        {
            icon: "✅",
            title: "Registro em Conselhos de Classe",
            description: "Possibilidade de registro profissional: COREN (Enfermagem), CFT/CRT (Eletromecânica e industriais), CRECI (Transação Imobiliária), CFTA (Agricultura e agronegócio). Diploma equiparado ao presencial.",
            bgColor: "bg-blue-100",
            textColor: "text-blue-800"
        },
        {
            icon: "⚡",
            title: "100% EAD Flexível",
            description: "Estude onde e quando quiser, com plataforma online 24/7. Aproveitamento de experiência prática para acelerar o processo – sem perder tempo em aulas presenciais desnecessárias.",
            bgColor: "bg-green-50",
            textColor: "text-green-700"
        },
        {
            icon: "🔒",
            title: "Segurança Jurídica Garantida",
            description: "Amparado pela Lei nº 9.394/96 (LDB) e resoluções do CNE/MEC. Diplomas válidos em todo o Brasil, aceitos em concursos, promoções e mercado de trabalho formal.",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-800"
        },
        {
            icon: "💼",
            title: "Alta Empregabilidade",
            description: "Cursos alinhados ao mercado atual. Milhares de alunos já formalizaram carreira e aumentaram salário com diploma oficial reconhecido.",
            bgColor: "bg-purple-50",
            textColor: "text-purple-800"
        },
        {
            icon: "📊",
            title: "Verifique Você Mesmo",
            description: "Consulte a autenticidade do seu futuro diploma diretamente no portal SISTEC do MEC ou e-MEC. Transparência total para sua tranquilidade.",
            bgColor: "bg-gray-100",
            textColor: "text-gray-800"
        }
    ]

    return (
        <section id="autoridade" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Título da dobra */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
                        Autoridade e Credibilidade Garantidas
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
                        Nossos cursos técnicos são 100% legítimos, reconhecidos oficialmente e projetados para dar segurança jurídica à sua formação profissional.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Pare de duvidar: diploma válido em todo o Brasil, registro em conselhos e consulta pública no MEC/SISTEC.
                    </p>
                </div>

                {/* Grid de Indicadores de Confiança */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl shadow-lg p-6 md:p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-300 ${item.bgColor}`}
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className={`text-xl md:text-2xl font-bold mb-3 ${item.textColor}`}>
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Seção de Badges menores (base no seu snippet) - para reforço visual */}
                <div className="mt-16 flex flex-wrap gap-4 md:gap-6 justify-center">
                    <div className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md text-base md:text-lg font-semibold">
                        <span className="text-2xl mr-3">🏛️</span>
                        Reconhecido pelo MEC/SISTEC
                    </div>
                    <div className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-base md:text-lg font-semibold">
                        <span className="text-2xl mr-3">🔐</span>
                        Validade Nacional
                    </div>
                    <div className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-md text-base md:text-lg font-semibold">
                        <span className="text-2xl mr-3">⚡</span>
                        100% Online Flexível
                    </div>
                    <div className="flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-md text-base md:text-lg font-semibold">
                        <span className="text-2xl mr-3">📜</span>
                        Registro em Conselhos
                    </div>
                </div>

                {/* Call to action sutil */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600 mb-6">
                        Tudo transparente e respaldado por lei. Pronto para conquistar seu diploma com segurança?
                    </p>
                    <a
                        href="#contato"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                    >
                        Tire dúvidas ou matricule-se agora →
                    </a>
                </div>
            </div>
        </section>
    )
}