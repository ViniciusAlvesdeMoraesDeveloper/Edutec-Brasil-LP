'use client'
// Não precisa importar Link para âncoras internas

export default function OfferClosing() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-4 leading-tight">
            Invista no seu conhecimento
            <br />
            e conquiste seu diploma!
          </h1>
        </div>

        {/* Card Principal de Oferta */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-400">
          {/* Cabeçalho com Valor Real */}
          <div className="bg-gradient-to-r from-green-600 to-blue-800 text-white py-8 px-6 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Valor Real do Investimento:
            </h3>
            <p className="text-2xl md:text-3xl font-semibold">
              Certificação por Competência: <span className="text-4xl">R$ 1.300,00</span>
            </p>
          </div>

          {/* Conteúdo da Oferta */}
          <div className="p-8 md:p-12 text-center">
            <p className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              HOJE a partir de:
            </p>

            <p className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4">
              12x de R$ 89,90
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              ou R$ 1.078,80 à vista
            </p>

            {/* Economia */}
            <div className="inline-block bg-green-100 border-2 border-green-500 rounded-full px-10 py-5 mb-8">
              <p className="text-2xl md:text-3xl font-bold text-green-700">
                Economia de mais de R$ 200 reais!
              </p>
            </div>

            {/* Texto pequeno */}
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              *Consulte condições e saiba mais.
            </p>

            
            <a
              href="#contato"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-xl md:text-2xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Consulte condições e saiba mais →
            </a>
          </div>
        </div>

        {/* Seção "Por que a Edutec?" */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
            Por que a Edutec?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                MEC/SISTEC
              </h3>
              <p className="text-gray-700 text-lg">
                Registro oficial e válido nacionalmente
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                48 HORAS
              </h3>
              <p className="text-gray-700 text-lg">
                Receba seu diploma em 48h após aprovação
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                100% ONLINE
              </h3>
              <p className="text-gray-700 text-lg">
                Todo o processo é feito 100% online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}