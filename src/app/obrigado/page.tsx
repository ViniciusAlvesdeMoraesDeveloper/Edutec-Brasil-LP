export default function Obrigado() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <div className="text-center p-8 md:p-12 max-w-3xl mx-auto">
        <div className="text-7xl mb-6">🎉</div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-6 leading-tight">
          Obrigado pelo seu interesse!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">
          Seu formulário foi recebido com sucesso!
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Acabamos de direcionar seu contato para um dos nossos consultores via WhatsApp. 
          <br className="hidden sm:block" />
          Em instantes você receberá uma mensagem diretamente no seu WhatsApp para conversarmos sobre o curso escolhido, valores, processo rápido de certificação e como podemos acelerar seu diploma.
        </p>

        <div className="bg-green-100 border border-green-300 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-green-800">
            <strong>Dica:</strong> Verifique seu WhatsApp agora (inclusive a aba de "Solicitações de mensagem" ou "Spam", caso não apareça de imediato). 
            <br />
            Se preferir, também podemos entrar por e-mail ou ligação.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Voltar para o início
          </a>
          
         
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Edutec – Cursos Técnicos Reconhecidos pelo MEC/SISTEC • 100% Online • Diploma em até 48h após aprovação
        </p>
      </div>
    </div>
  )
}