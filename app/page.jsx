import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Botton, Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Software Engineer | Data Engineer</span> */}
            <h1 className="h1">
              Hey I'm <br /><span className="text-accent">Arief Dwi Rachmadian</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify text-xl">Software Engineer | Data Engineer</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/Arief-Dwi-Rachmadian-CV.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home;