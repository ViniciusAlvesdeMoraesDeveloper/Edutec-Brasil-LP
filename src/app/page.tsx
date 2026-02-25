import Banner from "./components/banner"
import EdutecHero from "./components/herosection";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/testmonial";
import Faq from "./components/Faq";
import Pilares from "./components/Pilares";
import Metodo from"./components/Metodo";
import Prova from "./components/Prova";
import Oferta from "./components/Oferta";
export default function Home() {
  return (
    <main>



       
        <EdutecHero />
       <Pilares/>
       <Metodo/>
        <Prova/>
        <Testimonials />
        <Oferta/>
        <ContactForm />
        <Faq/>
    </main>
  );
}
