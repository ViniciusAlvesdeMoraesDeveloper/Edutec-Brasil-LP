'use client'
import Link from 'next/link'
import { Instagram, Youtube, Music2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-green-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Coluna 1: Sobre a Edutec */}
          <div>
            <h3 className="text-2xl font-bold mb-5">Edutec Brasil</h3>
            <p className="text-green-100 mb-6 leading-relaxed max-w-lg">
              Há mais de 15 anos transformando vidas através da educação técnica de qualidade.  
              Cursos 100% EAD, reconhecidos pelo MEC, com foco total na empregabilidade e no seu crescimento profissional.
            </p>

            {/* Redes sociais */}
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/edutec_brasil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Edutec"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6 text-green-100" />
              </a>

              <a
                href="https://www.tiktok.com/@edutec_brasil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Edutec"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <Music2 className="w-6 h-6 text-green-100" />
              </a>

              <a
                href="https://www.youtube.com/@EduTecBrasil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Edutec"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <Youtube className="w-6 h-6 text-green-100" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Contato</h4>
            <ul className="space-y-4 text-green-100">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <a 
                  href="tel:+5531982628327" 
                  className="hover:text-green-300 transition-colors"
                >
                  (31) 98262-8327
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a 
                  href="mailto:educacaoedutecbrasil@gmail.com" 
                  className="hover:text-green-300 transition-colors break-all"
                >
                  educacaoedutecbrasil@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  Rua Luiz Rodrigues dos Santos, 44 – Todos os Santos<br />
                  Coronel Fabriciano/MG – CEP 35170-061
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-2xl">🕒</span>
                Seg a Sex: 8h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200 text-sm">
          <p>
            © {currentYear} Edutec Brasil. Todos os direitos reservados.<br />
            CNPJ: 61.594.318/0001-32
          </p>
        </div>
      </div>
    </footer>
  )
}