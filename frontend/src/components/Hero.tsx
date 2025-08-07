export default function Hero() {
  return (
    <section id="hero" className="font-poppins bg-[#3A3A3A]">
      <div className="bg-[url(/bg-unsri-hero.png)] w-full h-screen bg-cover bg-center flex justify-between">
        <div className="flex justify-between px-6 lg:ps-24 py-16 mx-auto">
          <div className="flex flex-col gap-8 justify-center text-center lg:text-left w-full">
            <div className="flex gap-4 sm:gap-6 w-full justify-center lg:justify-start items-center flex-wrap">
              <img src="logo-unsri.png" alt="logo UNSRI" className="w-16" />
              <img
                src="logo-lam-infokom.png"
                alt="logo LAM INFOKOM"
                className="h-10 sm:h-12"
              />
              <img
                src="logo-ppid.png"
                alt="logo PPID"
                className="h-10 sm:h-12"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                UNIVERSITAS SRIWIJAYA
              </h1>
              <div className="flex justify-center lg:justify-start">
                <div className="bg-[#F5CE44] text-[#272727] px-4 py-2 w-fit text-lg sm:text-xl font-bold rounded-full">
                  <h2>FAKULTAS ILMU KOMPUTER</h2>
                </div>
              </div>
              <p className="text-white text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                Fakultas Ilmu Komputer Universitas Sriwijaya berawal dari
                Program Diploma Komputer (PDK) yang resmi berdiri pada 5
                September 2003, menjadi pionir pendidikan ICT di Unsri. Gagasan
                pendiriannya telah ada sejak 1985 melalui pelatihan komputer di
                Pusat Komputer Unsri, disertai penyiapan dosen melalui studi
                lanjut di bidang teknologi informasi, baik di dalam maupun luar
                negeri.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/bg-unsri-layo.png"
          alt="Background UNSRI Layo"
          className="hidden lg:block "
        />
      </div>
    </section>
  );
}
