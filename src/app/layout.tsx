import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importações dos Componentes Estruturais (Mantidos)
import TopBar from "./components/topbar";
import Footer from "./components/footer";

// Importações de Conteúdo Específico (Removidas/Comentadas)
// import Banner from "./components/banner" 
// import EdutecHero from "./components/herosection";
// import ContactForm from "./components/ContactForm";
// import Testimonials from "./components/testmonial";
// import BottomUpper from "./components/bottomupper"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduTec Brasil",
  description: "Colégio Edutec-Brasil",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <TopBar />

        
        {children}

        
        <Footer />
      </body>
    </html>
  );
}