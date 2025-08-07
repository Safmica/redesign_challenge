import React, { useEffect, useState } from "react";

function Card({ title, description, tanggal, imageUrl }) {
  return (
    <div className="rounded-lg w-full flex border-[#CFCFCF] border-2 p-4 items-center gap-4 hover:shadow-md transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md flex-shrink-0"
      />
      <div>
        <p className="text-black text-base sm:text-lg font-medium">
          {description}
        </p>
        <h2 className="text-gray-500 text-sm mt-1">Posted on {tanggal}</h2>
      </div>
    </div>
  );
}

type BeritaItem = {
  title: string;
  description: string;
  tanggal: string;
  imageUrl: string;
};

type FileItem = {
  file_name: string;
  file_path: string;
};

export default function NewsSection1() {
  const [dataBerita, setDataBerita] = useState<BeritaItem[]>([]);
  const [fileList, setFileList] = useState<FileItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/berita?limit=3")
      .then((res) => res.json())
      .then((data) => {
        const berita = data.berita.map((item: any) => ({
          title: item.judul,
          description: item.judul,
          tanggal: new Date(item.posted_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          imageUrl: item.cover,
        }));
        setDataBerita(berita);
      });

    fetch("http://127.0.0.1:8080/api/file")
      .then((res) => res.json())
      .then((data) => {
        setFileList(data.file);
      });
  }, []);

  return (
    <section
      id="news-information-1"
      className="font-poppins my-12 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-8"
    >
      <div className="w-full lg:w-2/3">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold">
            NEWS & INFORMATION
          </h1>
          <a
            href="#"
            className="text-[#82412B] hover:underline flex-shrink-0 ml-4"
          >
            {`See More >>`}
          </a>
        </div>
        <div className="space-y-4">
          {dataBerita.map((berita, index) => (
            <Card
              key={index}
              title={berita.title}
              description={berita.description}
              tanggal={berita.tanggal}
              imageUrl={berita.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/3 space-y-10">
        <div>
          <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold mb-8">
            RESEARCH GROUPS
          </h1>
          <div className="space-y-4">
            <div className="border-[#CFCFCF] border-2 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <img
                src="/logo-comnets.png"
                alt="logo-comnets"
                className="mx-auto"
              />
            </div>
            <div className="border-[#CFCFCF] border-2 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <img
                src="/logo-isysrg.png"
                alt="logo-isysrg"
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold">
              DOWNLOAD
            </h1>
            <a
              href="#"
              className="text-[#82412B] hover:underline flex-shrink-0 ml-4"
            >
              {`See More >>`}
            </a>
          </div>
          <ul className="space-y-4">
            {fileList.map((file, index) => (
              <li key={index}>
                <a
                  href={file.file_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl md:text-2xl font-semibold py-3 border-b-2 border-[#CFCFCF] hover:text-black transition-colors"
                >
                  {file.file_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
