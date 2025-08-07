import { FaMapLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#272727] font-poppins px-6 sm:px-12 lg:px-24 py-12 text-white"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">
        <div className="w-full lg:w-1/3 lg:pr-8">
          <div className="flex gap-4 items-center">
            <img src="/logo-unsri.png" alt="logo-unsri" className="w-14 h-14" />
            <div>
              <h1 className="text-xl font-medium">
                Faculty of Computer Science
              </h1>
              <p className="text-gray-400">Universitas Sriwijaya</p>
            </div>
          </div>
          <div className="space-y-6 mt-6">
            <div>
              <div className="flex items-center gap-3 text-xl mb-1">
                <FaMapLocationDot className="size-6 text-gray-300 flex-shrink-0" />
                <h1 className="font-semibold">Kampus Indralaya</h1>
              </div>
              <p className="text-gray-400 pl-9">
                Jl. Palembang - Prabumulih KM.32 Kabupaten Ogan Ilir, Sumatera
                Selatan, Indonesia
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xl mb-1">
                <FaMapLocationDot className="size-6 text-gray-300 flex-shrink-0" />
                <h1 className="font-semibold">Kampus Palembang</h1>
              </div>
              <p className="text-gray-400 pl-9">
                Jl. Srijaya Negara Bukit Besar Palembang 30139
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-12 sm:gap-8 lg:pl-8 lg:border-l-2 lg:border-gray-700">
          <div className="w-full sm:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium mb-4">About</h1>
            <ul className="text-lg space-y-3">
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Sejarah Fakultas
              </li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Visi & Misi
              </li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Struktur Organisasi Fasilkom
              </li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Kerja Sama
              </li>
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Grup Riset
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium mb-4">Kontak</h1>
            <ul className="text-lg space-y-4">
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <MdMailOutline className="size-5 flex-shrink-0" />
                <a
                  href="mailto:humas@ilkom.unsri.ac.id"
                  className="hover:underline"
                >
                  humas@ilkom.unsri.ac.id
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <FaInstagram className="size-5 flex-shrink-0" />
                <a href="#" className="hover:underline">
                  @humasfasilkomunsri
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <FaFacebook className="size-5 flex-shrink-0" />
                <a href="#" className="hover:underline">
                  humasfasilkomunsri
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <FaYoutube className="size-5 flex-shrink-0" />
                <a href="#" className="hover:underline">
                  FASILKOM UNSRI TV
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <LuPhoneCall className="size-5 flex-shrink-0" />
                <span>Telp: (0711) 379249</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
