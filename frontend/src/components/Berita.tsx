import React, { useEffect, useState } from "react";

function CardBerita({ title, description, tanggal, imageUrl }) {
  return (
    <div className="rounded-lg w-full shadow-lg overflow-hidden bg-white flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-black text-lg font-medium flex-grow">
          {description}
        </p>
        <h2 className="text-gray-500 text-sm mt-2">Posted on {tanggal}</h2>
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

export default function Berita() {
  const [dataBerita, setDataBerita] = useState<BeritaItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/berita?limit=3&is_priority=true")
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
          imageUrl: item.cover
        }));

        setDataBerita(berita);
      });
  }, []);


  return (
    <section id="berita" className="font-poppins my-12 px-6 sm:px-12 lg:px-24">
      <div className="py-4 px-10 border-b-4 border-[#F5CE44] w-fit mx-auto">
        <h1 className="text-[#82412B] text-2xl md:text-3xl font-semibold text-center">
          BERITA UTAMA
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        {dataBerita.map((berita, index) => (
          <div key={index} className="w-full md:w-1/3 flex">
            <CardBerita
              title={berita.title}
              description={berita.description}
              tanggal={berita.tanggal}
              imageUrl={berita.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
