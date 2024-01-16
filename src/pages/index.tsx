import { Inter } from "next/font/google";
import Image from "next/image";
import Navigation from "../components/navigation";
import WaveTop from "@/components/waves-top";
import WaveBotton from "../components/waves-botton";
import speaker from "../../public/imgs/speaker.svg";

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
        <div className=" justify-center items-center">
          <p className=" text-center justify-center sm:mt-16 md:mt-0 lg:mt-0 md:text-right md:mr-4 md:ml-12 text-initial mt-10 mb-14 text-2xl">
            "Find your voice and conquer the stage. Our page is here to guide you in the art of public speaking and unleash your full communication potential."
          </p>
        </div>
        <div className="flex flex-row justify-center items-center mb-40 w-4/5 py-8 bg-white rounded-lg shadow-xl sm:py-0 md:py-0 lg:py-0 sm:w-3/4 sm:flex-row p-8">
          <div className="flex flex-col my-10 w-3/6">
            <h3 className="mb-5 font-bold text-xl">
              Conquer the Stage: Inspirational Tips for Strong Speech
            </h3>
            <ul>
              <li>
                <h4 className="font-bold text-md mt-4">Understand your fear:</h4>
                <p className="mt-2 text-sm">
                  Reflect on why you feel fearful about public speaking.
                  Identify the specific things that make you anxious.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Peparation</h4>
                <p className="mt-2 text-sm">
                  Research and familiarize yourself with the topic you are going to present.
                  Organize your presentation in a logical structure.
                  Practice your speech several times out loud to feel more comfortable with the content.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Know your audience:</h4>
                <p className="mt-4 text-sm">
                  Understanding your audience can help you tailor your message and feel more connected to them.
                  If possible, interact with the audience before the presentation to reduce the feeling of unfamiliarity.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Positive visualization:</h4>
                <p className="mt-4 text-sm">
                  Imagine the scenario before the presentation.
                  Visualize a positive response from the audience and feel confident as you speak.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Breathe deeply:</h4>
                <p className="mt-4 text-sm">
                  Practice deep breathing techniques to reduce anxiety.
                  Deep breathing can help you stay calm and control nerves.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Start with something familiar:</h4>
                <p className="mt-4 text-sm">
                  Start your presentation with something familiar or comfortable.
                  You can tell a personal anecdote or start with facts that are familiar to you.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Make eye contact:</h4>
                <p className="mt-4 text-sm">
                  Maintain eye contact with the audience to create a stronger connection.
                  This also helps you feel more in control of the situation.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Practice gradual exposition:</h4>
                <p className="mt-4 text-sm">
                  Start with smaller presentations before facing a larger audience.
                  Participate in small groups and gradually increase the size of the audience.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-md mt-4">Accept mistakes:</h4>
                <p className="mt-2 text-sm">
                  Understand that it is normal to make mistakes during a presentation.
                  Focus on the information you are sharing and not on perfection.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <Image src={speaker} width={800} height={900} alt="speaker"></Image>
          </div>
        </div>

      </div>
      <WaveBotton></WaveBotton>
    </main>
  );
}
