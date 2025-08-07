import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="font-poppins shadow-md relative z-20 bg-white">
      <div className="flex flex-wrap items-center justify-center md:justify-between bg-[#272727] text-white px-4 sm:px-8 lg:px-24 py-3 gap-y-4 gap-x-6 text-sm">
        <div className="flex items-center gap-2 border-white border-2 rounded-full px-4 py-1">
          <img
            src="https://placehold.co/32x32/FFFFFF/000000?text=ID"
            alt="indonesia-flag"
            className="w-6 h-6 rounded-full object-cover"
          />
          <h1 className="hidden sm:block">Indonesia</h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MdMailOutline className="size-5" />
            <a
              href="mailto:humas@ilkom.unsri.ac.id"
              className="underline hover:text-gray-300 transition-colors"
            >
              humas@ilkom.unsri.ac.id
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="size-5" />
            <a href="#" className="hover:text-gray-300 transition-colors">
              @humasfasilkomunsri
            </a>
          </div>
          <div className="flex items-center gap-2">
            <BsYoutube className="size-5" />
            <a href="#" className="hover:text-gray-300 transition-colors">
              FASILKOM UNSRI TV
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 border-2 border-white rounded-full px-3 py-1">
          <IoSearch className="size-5" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent placeholder-gray-300 focus:outline-none w-24 sm:w-auto"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4">
        <div className="flex items-center gap-3">
          <img
            src="logo-unsri.png"
            alt="logo-unsri"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <div>
            <h1 className="font-bold text-base sm:text-lg text-gray-800">
              Faculty of Computer Science
            </h1>
            <p className="text-sm text-gray-600">Universitas Sriwijaya</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="text-[#82412B] hidden lg:flex font-medium gap-6 text-base">
          <li className="hover:text-black transition-colors cursor-pointer">
            Beranda
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Profil
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Program Studi & Unit
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Dosen & Pegawai
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            PPID
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Zona Integritas
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            E-PPT
          </li>
        </ul>

        {/* Hamburger Menu Button - visible on screens smaller than lg */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="size-8" />
            ) : (
              <HiMenu className="size-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - shown/hidden based on isMenuOpen state */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl">
          <ul className="flex flex-col items-center text-[#82412B] font-medium text-lg py-4">
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Beranda
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Profil
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Program Studi & Unit
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Dosen & Pegawai
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              PPID
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              Zona Integritas
            </li>
            <li className="w-full text-center py-3 hover:bg-gray-100 transition-colors cursor-pointer">
              E-PPT
            </li>
          </ul>
          {/* Contact info for mobile menu */}
          <div className="flex flex-col items-center gap-4 border-t border-gray-200 pt-4 pb-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MdMailOutline className="size-5" />
              <a href="mailto:humas@ilkom.unsri.ac.id" className="underline">
                humas@ilkom.unsri.ac.id
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="size-5" />
              <a href="#">@humasfasilkomunsri</a>
            </div>
            <div className="flex items-center gap-2">
              <BsYoutube className="size-5" />
              <a href="#">FASILKOM UNSRI TV</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
