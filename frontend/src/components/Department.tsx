import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const dataDepartment = [
  {
    title: "DIPLOMA 3 (D3)",
    programs: [
      "Manajemen Informatika",
      "Komputerisasi Akuntansi",
      "Teknik Komputer",
    ],
  },
  {
    title: "SARJANA 1 (S1)",
    programs: ["Teknik Informatika", "Sistem Informasi", "Sistem Komputer"],
  },
  {
    title: "STRATA 2 (S2)",
    programs: ["Ilmu Komputer"],
  },
];

export default function Department() {
  return (
    <section
      id="department"
      className="bg-[#3A3A3A] font-poppins px-6 sm:px-12 lg:px-24 py-16 sm:py-24"
    >
      <div className="py-3 sm:py-4 px-8 sm:px-12 border-b-4 border-white w-fit mx-auto mb-12">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold text-center">
          DEPARTMENT
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {dataDepartment.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 w-full md:w-1/3 flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#272727]">
              {dept.title}
            </h2>
            <ul className="text-lg space-y-3">
              {dept.programs.map((program, pIndex) => (
                <li key={pIndex} className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="size-6 flex-shrink-0" />
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
