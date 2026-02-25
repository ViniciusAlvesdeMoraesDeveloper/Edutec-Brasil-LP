export default function Obrigado() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Obrigado pelo seu interesse!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Recebemos seus dados com sucesso. Nossa equipe da Edutec entrará em contato com você em breve via WhatsApp ou e-mail para acelerarmos seu processo de diploma técnico.
        </p>

        <p className="text-lg text-gray-600 mb-10">
          Enquanto isso, você pode voltar para a página inicial ou explorar nossos cursos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all"
          >
            Voltar para o início
          </a>
          
        </div>
      </div>
    </div>
  )
}