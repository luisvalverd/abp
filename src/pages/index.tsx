import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "../components/navigation";
import WaveTop from "@/components/waves-top";
import WaveBotton from "../components/waves-botton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className} bg-slate-100 text-black`}
    >
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <Navigation></Navigation>
      </div>

      <WaveTop></WaveTop>

      <div className="w-full flex flex-col justify-center items-center px-0 mt-32 md:px-24 sm:px-0">
        <div className="flex flex-col justify-center items-center mb-40 w-4/5 py-8 bg-white rounded-lg shadow-xl sm:py-0 md:py-0 lg:py-0 sm:w-3/4 sm:flex-row">
          <Image
            src="/imgs/image1.jpeg"
            width={300}
            height={400}
            alt="foto elegante de nosotros"
            className=" border-8 rounded-lg border-purple-800 mr-0 mb-10 md:mb-0 lg:mb-0 sm:mr-4"
          ></Image>
          <p className="mx-10 text-center sm:mt-16 md:mt-0 lg:mt-0 md:text-left md:ml-4 md:mr-12">
            Desde el momento en que te vi, supe que eras la persona adecuada
            para mí. Tu sonrisa, tu risa, tu forma de ser, todo en ti me hizo
            enamorarme. Eres mi mejor amiga y mi amor verdadero, mi compañera en
            la vida y mi confidente. No puedo imaginar mi vida sin ti, eres la
            razón por la que me despierto cada mañana con una sonrisa en el
            rostro.
          </p>
        </div>
        <div className="flex flex-col items-center mb-40 w-4/5 py-8 bg-white rounded-lg shadow-xl md:py-0 lg:py-0 sm:w-3/4 sm:flex-row-reverse">
          <Image
            src="/imgs/image2.jpeg"
            width={300}
            height={400}
            alt="foto elegante de nosotros"
            className=" border-8 rounded-lg border-purple-800 mr-0 mb-10 sm:ml-4 md:mb-0 lg-mb-0"
          ></Image>
          <p className="mx-10 text-center sm:mt-16 md:mt-0 lg:mt-0 md:text-right md:mr-4 md:ml-12">
            Me haces querer ser una mejor persona, y estoy muy agradecido por
            ser parte de tu vida. Eres la única persona en el mundo que me
            entiende completamente, y no puedo esperar a pasar el resto de mi
            vida contigo. Te amo más allá de las palabras, y siempre estaré aquí
            para ti. Gracias por ser mi compañera en la vida, y por hacerme el
            hombre más feliz del mundo.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mb-20 py-8 w-3/4 md:py-24 bg-white rounded-lg shadow-xl">
          <div className="flex flex-row">
            <Image
              src="/imgs/image_mini_gaby.jpeg"
              width={200}
              height={200}
              alt="mini gaby"
              className="rounded-l-full border-l-8 border-y-8 border-purple-800 w-36 md:w-52 lg:w-72"
            ></Image>
            <Image
              src="/imgs/image_mini_lucho.jpeg"
              width={200}
              height={200}
              alt="mini lucho"
              className="rounded-r-full border-r-8 border-y-8 border-purple-800 w-36 md:w-52 lg:w-72"
            ></Image>
          </div>
          <p className="mt-12 px-10 text-center md:px-40 md:mt-20">
            Mi vida enserio te amo mucho no te imaginas lo mucho que te amo
            quiero siempre hacerte feliz, el solo hecho de ver tu sonrisa me
            alegra el dia mi vida para mi te has convertido en una persona muy
            especial y voy a hacer todo lo posible para que siempre te sientas
            especial y feliz te amo.
          </p>
          <h1 className="my-12 text-4xl flex justify-center font-bold md:text-6xl">
            Te Amo Gaby
          </h1>
        </div>
      </div>
      <WaveBotton></WaveBotton>
    </main>
  );
}
