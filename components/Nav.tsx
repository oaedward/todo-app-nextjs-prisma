import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 p-4">
          <Link href="/" className="flex gap-2">
            <Image src="EddLogo.svg" width={20} height={20} alt="brand" />
            <span>CWETodoApp</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
