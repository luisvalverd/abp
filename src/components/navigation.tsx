import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-24 flex items-center justify-between bg-purple-800 px-14 text-white">
      <div>
        <h1 className="text-3xl font-bold">LADK</h1>
      </div>
      <div>
        <ul className="list-none flex flex-row">
          <li>
            <Link href="/" className="pl-4">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="https://padlet.com/alemi5627/abp-kd6ahssnk7refvix" className="pl-4">
              Pallet
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
