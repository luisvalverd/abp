import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-24 flex items-center justify-between bg-purple-800 px-14 text-white">
      <div>
        <h1 className="text-2xl font-bold">Te Amo Gaby</h1>
      </div>
      <div>
        <ul className="list-none flex flex-row">
          <li>
            <Link href="#" className="pl-4">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#" className="pl-4">
              Leeme
            </Link>
          </li>
          <li>
            <Link href="#" className="pl-4">
              Gracias
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
