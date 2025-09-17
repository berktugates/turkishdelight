import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link
        className="text-3xl font-semibold bg-gradient-to-r from-[#e91e63] via-[#ff6b35] to-[#f39c12] bg-clip-text text-transparent"
        href={"/"}
      >
        turkish<br/>delight.
      </Link>
      <a href="mailto:berktugberke@icloud.com" className="bg-gradient-to-br from-[#ff6b35] to-[#e91e63] px-4 py-2 text-white rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block">
        İletişime Geç
      </a>
    </nav>
  );
}
