import { Toaster } from "react-hot-toast";
import About from "./sections/About/About";
import Career from "./sections/Career/Career";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Gallery from "./sections/Gallery/Gallery";

export default function MyApp() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
