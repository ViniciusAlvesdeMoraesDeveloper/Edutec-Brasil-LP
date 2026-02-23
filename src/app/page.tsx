import Banner from "./components/banner"
import EdutecHero from "./components/herosection";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/testmonial";
import BottomUpper from "./components/bottomupper";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>



       
        <EdutecHero />
        <BottomUpper />
        <Testimonials />
        <Faq/>
        <ContactForm />
       
    </main>
  );
}
