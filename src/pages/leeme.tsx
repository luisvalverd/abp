import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import WaveTop from "@/components/waves-top";
import WaveBotton from "../components/waves-botton";

const inter = Inter({ subsets: ["latin"] });

export default function Leeme() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className} bg-slate-100 text-black`}
    >
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <Navigation></Navigation>
      </div>

      <WaveTop></WaveTop>

      <div className="flex justify-center mt-20">
        <ul>
          <li className="flex justify-center flex-col items-center">
            <h3 className="text-2xl font-bold text-center">
              Si pudiera volver a nacer
            </h3>
            <p className="text-gray-700 text-center font-light text-sm">
              Autor: Anonimo.
            </p>
            <ul className="flex justify-center items-center w-72">
              <li className="w-full">
                <p className="mt-10 text-center">
                  Si pudiera volver a nacer, elegiría volver a conocerte. Eres
                  la luz que ilumina mi camino, la razón por la que sonrío cada
                  día.{" "}
                </p>{" "}
                <p className="mt-10 text-center">
                  {" "}
                  Tu amor me hace sentir vivo, y no puedo imaginar mi vida sin
                  ti. Eres mi mejor amiga y mi amor verdadero, y estoy muy
                  agradecido por tenerte en mi vida.{" "}
                </p>{" "}
                <p className="mt-10 text-center">
                  Juntos hemos pasado por altibajos, pero siempre hemos salido
                  adelante. Tu amor y apoyo incondicional han sido mi roca en
                  los momentos difíciles.{" "}
                </p>{" "}
                <p className="mt-10 text-center">
                  {" "}
                  Te amo más allá de las palabras, y siempre estaré aquí para
                  ti. Gracias por ser mi compañera en la vida, y por hacerme el
                  hombre más feliz del mundo.
                </p>
              </li>
            </ul>
          </li>
          <li className="mt-52 flex justify-center flex-col items-center">
            <h3 className="text-2xl font-bold text-center">Esclava mía</h3>
            <p className="text-gray-700 text-center font-light tet-sm">
              Autor: Pablo Neruda
            </p>
            <ul className="flex justify-center items-center w-72">
              <li>
                <p className="mt-10 text-center">
                  Esclava mía, negra como el ébano, hermosa como un día recién
                  nacido, te traigo flores, muchas, recién cortadas, para que
                  las huelas y te sientas amada.
                </p>
                <p className="mt-10 text-center">
                  Esclava mía, morena como el trigo, dulce como la miel, suave
                  como el viento, te traigo besos, muchos, recién robados, para
                  que los sientas y te sientas amada.
                </p>
                <p className="mt-10 text-center">
                  Esclava mía, dueña de mi corazón, mi vida es tuya, mi alma es
                  tuya, te traigo todo lo que tengo, todo lo que soy, para que
                  lo aceptes y te sientas amada.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <WaveBotton></WaveBotton>
    </main>
  );
}
