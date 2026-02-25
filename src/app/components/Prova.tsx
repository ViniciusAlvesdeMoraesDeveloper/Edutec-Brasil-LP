'use client'
import { useEffect, useRef } from 'react' 

export default function QuantitativeProof() {
    const stats = [
        {
            number: "+40%",
            title: "Aumento Salarial Médio",
            description: "Alunos que formalizam com diploma técnico relatam ganho médio de 40% no salário após 6–12 meses (comparado a experiência sem certificação). Ex: de auxiliar para técnico em enfermagem ou industrial.",
            icon: "📈",
            color: "text-green-600"
        },
        {
            number: "85%",
            title: "Conseguem Emprego ou Promoção Rápida",
            description: "Mais de 85% dos formados conseguem colocação no mercado ou promoção em até 1 ano, graças ao diploma reconhecido MEC/SISTEC e registro em conselhos de classe.",
            icon: "🏆",
            color: "text-blue-600"
        },
        {
            number: "3x Mais Oportunidades",
            title: "Multiplicador de Vagas",
            description: "Profissionais com curso técnico acessam 3x mais vagas qualificadas, promoções e salários competitivos no mercado atual (dados de empregabilidade em áreas como saúde, indústria e agronegócio).",
            icon: "💼",
            color: "text-green-700"
        },
        {
            number: "Investimento Inteligente",
            title: "O Curso que se Paga Sozinho",
            description: "A diferença salarial conquistada com o diploma cobre todo o custo do curso em poucos meses. É o caminho mais rápido para sair de funções de apoio e assumir cargos técnicos com maior valorização financeira.",
            icon: "💰",
            color: "text-yellow-600"
        }
    ]

    return (
        <section id="prova-quantitativa" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Título da dobra */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
                        Resultados Reais: O Retorno do Seu Investimento
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
                        Veja os números que provam: fazer um curso técnico na Edutec não é custo – é o melhor investimento na sua carreira. 
                        <span className="text-green-700 font-bold"> Ganho lógico e comprovado.</span>
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Levantamento interno Edutec (baseado em alunos formados 2024–2026) + tendências de mercado.
                    </p>
                </div>

                {/* Grid de Estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center border border-green-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4"
                        >
                            
                            <div className="text-6xl md:text-7xl mb-6">{stat.icon}</div>

                           
                            <div className={`text-5xl md:text-4xl font-extrabold mb-4 ${stat.color}`}>
                                {stat.number}
                            </div>

                            
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                                {stat.title}
                            </h3>

                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Seção de depoimento estatístico + CTA */}
                <div className="mt-16 text-center bg-white rounded-2xl shadow-xl p-10 md:p-12 max-w-4xl mx-auto border border-blue-100">
                    <p className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                        "Meu salário subiu 45% após o diploma. Valeu cada minuto!"
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        – Aluno formado em Técnico em Enfermagem (levantamento interno Edutec)
                    </p>

                    <a
                        href="#contato"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                    >
                        Quero Meu Aumento Salarial → Matricule-se Agora!
                    </a>

                    <p className="mt-8 text-sm text-gray-500">
                        Resultados variam por dedicação, experiência prévia e região. Dados baseados em média de alunos Edutec + mercado 2026.
                    </p>
                </div>
            </div>
        </section>
    )
}