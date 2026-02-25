'use client'
import { useState } from 'react' 

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Envio de Documentação",
            description: "Matricule-se online em minutos. Envie seus documentos básicos (RG, CPF, histórico escolar) e comprovantes de experiência profissional (carteira de trabalho, declaração de empregador ou certificados). Isso permite aproveitar o que você já sabe e acelerar o processo significativamente.",
            icon: "📄",
            color: "bg-green-100 text-green-700"
        },
        {
            number: "2",
            title: "Avaliação Online",
            description: "Acesse a plataforma 100% EAD e realize avaliações teóricas e/ou práticas online (provas, atividades, portfólio). Tudo flexível, sem horários fixos. Se já tem experiência, o aproveitamento reduz o volume de conteúdo – muitos alunos aprovam rápido!",
            icon: "💻",
            color: "bg-blue-100 text-blue-700"
        },
        {
            number: "3",
            title: "Diploma em Mãos",
            description: "Após aprovação, emitimos seu diploma técnico reconhecido pelo MEC/SISTEC em tempo recorde (prazo médio de 7 a 30 dias). Registro automático no sistema oficial, validade nacional e possibilidade de registro em conselhos de classe. Receba digital ou impresso – pronto para usar na carreira!",
            icon: "🎓",
            color: "bg-yellow-100 text-yellow-800"
        }
    ]

    return (
        <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-br from-white to-green-50">
            <div className="container mx-auto px-4">
                {/* Título da dobra */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
                        O Método: Simples, Rápido e 100% Online
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
                        Conquiste seu diploma técnico em apenas <span className="text-green-600 font-bold">3 etapas claras</span>. 
                        Sem complicação, sem burocracia excessiva – projetado para quem já tem experiência e quer formalizar rápido.
                    </p>
                </div>

                {/* Timeline de Etapas */}
                <div className="relative">
                    {/* Linha conectora (desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-green-200 transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
                            >
                                {/* Número grande */}
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg">
                                    {step.number}
                                </div>

                                {/* Ícone */}
                                <div className="text-6xl md:text-7xl mb-6">{step.icon}</div>

                                {/* Título */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                    {step.title}
                                </h3>

                                {/* Descrição */}
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reforço final + CTA */}
                <div className="text-center mt-16 md:mt-20">
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Pronto! Em poucas semanas (ou até menos, dependendo da sua experiência), você tem o diploma oficial nas mãos e pode acelerar sua carreira com segurança e reconhecimento MEC.
                    </p>

                    <a
                        href="#contato"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                    >
                        Quero Começar Agora → Cadastre-se!
                    </a>

                    <p className="mt-6 text-sm text-gray-500">
                        Processo 100% online • Reconhecido pelo MEC/SISTEC • Validade nacional
                    </p>
                </div>
            </div>
        </section>
    )
}