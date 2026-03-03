'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">

      <div className="relative bg-gradient-to-r from-green-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-19">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo acima do título principal */}
            <div className="mb-6 md:mb-10">
              <Image
                src="/EDUTEC.webp"
                alt="Logo Edutec - Cursos Técnicos Reconhecidos MEC"
                width={180}
                height={80}
                className="w-48 md:w-64 lg:w-64 h-auto mx-auto drop-shadow-lg"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Conquiste seu Diploma Técnico
              <span className="text-yellow-400 block mt-2">em até 48 horas!</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl">
              Já tem experiência na área? Pare de perder tempo e burocracia:
              formalize seu conhecimento com curso técnico reconhecido e entre (ou volte)
              ao mercado mais rápido que nunca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contato" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-12 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                Quero meu diploma rápido →
              </a>
            </div>
          </div>
        </div>


      </div>


      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
              Conquiste Seu Diploma Técnico em Tempo Recorde
            </h2>

            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Já tem experiência na área? Pare de esperar anos por um diploma:
              <span className="text-green-700 font-bold">
                formalize seu conhecimento em até poucos meses
              </span>{' '}
              com cursos 100% EAD, reconhecidos pelo MEC e focados no mercado de trabalho.
            </p>

            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              São mais de 60 opções práticas – veja alguns dos mais procurados e acelere sua
              entrada (ou promoção) no mercado agora!
            </p>

            {/* Mini CTA */}
            <div className="mt-10">
              <a
                href="#contato"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg transform hover:scale-105 transition-all"
              >
                Quero começar rápido → Matrícula aberta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

