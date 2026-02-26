'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Obrigado() {
  useEffect(() => {
    const timer = setTimeout(() => {

      const lastIndexStr = localStorage.getItem('lastConsultorIndex')
      const lastIndex = lastIndexStr ? parseInt(lastIndexStr, 10) : 0

      const consultores = [
        { nome: "Camille Lopes", whatsapp: "5531973123670" },
        { nome: "Luana Guedes", whatsapp: "5531982642835" },
        { nome: "Hyago Henrique", whatsapp: "5531973123734" },
        { nome: "Laura Perez", whatsapp: "5531982665400" },
      ]

      const consultor = consultores[lastIndex]

      // Mensagem simples para o WhatsApp
      const mensagemWhats = encodeURIComponent(
        `Olá, ${consultor.nome}! Tudo bem?\n\n` +
        `Acabei de preencher o formulário no site da Edutec e fui direcionado para você.\n\n` +
        `Gostaria de falar sobre o curso escolhido e o processo rápido de certificação!`
      )

      // Redireciona para o WhatsApp após 10 segundos
      window.location.href = `https://wa.me/${consultor.whatsapp}?text=${mensagemWhats}`
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Google Tag Manager - Novo ID Atualizado */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NCB9R27Q');
        `}
      </Script>

      {/* Google Tag Manager (noscript) - Novo ID Atualizado */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NCB9R27Q"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Conteúdo da página de agradecimento */}
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
            Em até 10 segundos você será levado automaticamente para o WhatsApp dele(a) com uma mensagem pré-pronta.
          </p>

          <div className="bg-green-100 border border-green-300 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-green-800">
              <strong>Aguarde só um pouquinho...</strong>
              <br />
              Se não abrir automaticamente, verifique seu WhatsApp (inclusive "Solicitações de mensagem" ou spam).
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
    </>
  )
}