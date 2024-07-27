import { Toaster } from "react-hot-toast";
import About from "./sections/About/About";
import Career from "./sections/Career/Career";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";

export default function MyApp() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Career />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
