const NavLink = [
  "Kemahawasiswaan & Kerjasama",
  "Akademik & Penelitian",
  "Vacancies",
  "Distinguished Lecture Series",
  "ICT Services",
  "Media Sosial Ormawaw Fakultas",
  "Students Statistic",
  "Scholarships",
  "Administration",
];

export default function NewsSection2() {
  return (
    <section
      id="news-information-2"
      className="font-poppins my-12 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-8"
    >
      <div className="w-full lg:w-2/3">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold">
            FASILKOM UNSRI TV
          </h1>
          <a
            href="#"
            className="text-[#82412B] hover:underline flex-shrink-0 ml-4"
          >{`See More >>`}</a>
        </div>
        <div>
          <img
            src="/youtube-1.png"
            alt="youtube-1"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <img
              src="/youtube-2.png"
              alt="youtube-2"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/youtube-3.png"
              alt="youtube-3"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/youtube-4.png"
              alt="youtube-4"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold mb-8">
          NAVIGATION LINKS
        </h1>
        <ul className="space-y-2">
          {NavLink.map((link, index) => (
            <li
              key={index}
              className="text-lg md:text-xl font-semibold py-3 border-b-2 border-[#CFCFCF] hover:text-black transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
