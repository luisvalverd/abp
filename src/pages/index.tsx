import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className} bg-slate-100 text-black`}
    >
      <div className="w-full fixed left-0 right-0 top-0 z-10">
        <Navigation></Navigation>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="relative left-0 right-0 top-24 z-0"
      >
        <path
          fill="#6b21a8"
          fill-opacity="1"
          d="M0,128L18.5,144C36.9,160,74,192,111,218.7C147.7,245,185,267,222,240C258.5,213,295,139,332,96C369.2,53,406,43,443,58.7C480,75,517,117,554,122.7C590.8,128,628,96,665,90.7C701.5,85,738,107,775,144C812.3,181,849,235,886,218.7C923.1,203,960,117,997,112C1033.8,107,1071,181,1108,224C1144.6,267,1182,277,1218,261.3C1255.4,245,1292,203,1329,165.3C1366.2,128,1403,96,1422,80L1440,64L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
        ></path>
      </svg>

      <div className="w-full flex flex-col justify-center items-center px-52 mt-32">
        <div className="flex flex-row items-center mb-40">
          <Image
            src="/imgs/image1.jpeg"
            width={300}
            height={400}
            alt="foto elegante de nosotros"
            className=" border-8 rounded-lg border-purple-800 mr-4"
          ></Image>
          <p className="ml-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            vero officia dolore aliquid debitis rerum excepturi fugit. Ex
            quaerat quidem dolorum ipsam! Libero, natus illo. Quia vitae
            similique nemo repellat!
          </p>
        </div>
        <div className="flex flex-row-reverse items-center mb-40">
          <Image
            src="/imgs/image2.jpeg"
            width={300}
            height={400}
            alt="foto elegante de nosotros"
            className=" border-8 rounded-lg border-purple-800 ml-4"
          ></Image>
          <p className="mr-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            vero officia dolore aliquid debitis rerum excepturi fugit. Ex
            quaerat quidem dolorum ipsam! Libero, natus illo. Quia vitae
            similique nemo repellat!
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-row">
            <Image
              src="/imgs/image_mini_gaby.jpeg"
              width={300}
              height={300}
              alt="mini gaby"
              className="rounded-l-full border-8 border-purple-800"
            ></Image>
            <Image
              src="/imgs/image_mini_lucho.jpeg"
              width={300}
              height={300}
              alt="mini lucho"
              className="rounded-r-full border-8 border-purple-800"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
