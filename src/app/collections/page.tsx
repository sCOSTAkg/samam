import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function CollectionsPage() {
  const collections = [
    {
      id: "spring-summer-2027",
      title: "Весна-Лето 27",
      description:
        "От спортзала до поездки на работу SS27 отражает глубину и масштаб того, что GRANDTEX делает лучше всего — создаёт универсальные кожи, которые адаптируются к вашим потребностям.",
      image: "https://ext.same-assets.com/1118492138/1829320189.jpeg",
      season: "Весна-Лето",
      year: "2027",
      isLatest: true,
    },
    {
      id: "fw26",
      title: "Осень-Зима 26",
      description:
        "Коллекция Осень-Зима 26 сочетает прочность и изысканность, предлагая премиальные кожи, созданные для холодного сезона.",
      image: "https://ext.same-assets.com/1118492138/68077734.jpeg",
      season: "Осень-Зима",
      year: "2026",
      isLatest: false,
    },
    {
      id: "spring-summer-2026",
      title: "Весна-Лето 26",
      description:
        "Коллекция Весна-Лето 26 представляет лёгкие и дышащие кожи, идеально подходящие для тёплой погоды и активного отдыха.",
      image: "https://ext.same-assets.com/1118492138/3513175735.jpeg",
      season: "Весна-Лето",
      year: "2026",
      isLatest: false,
    },
    {
      id: "fw25",
      title: "Осень-Зима 25",
      description:
        "Коллекция Осень-Зима 25 подчёркивает насыщенные текстуры и глубокие цвета, идеально подходящие для выразительных изделий в холодные месяцы.",
      image: "https://ext.same-assets.com/1118492138/3505676007.jpeg",
      season: "Осень-Зима",
      year: "2025",
      isLatest: false,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] md:h-[40vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/1829320189.jpeg"
            alt="Leather Collections"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Коллекции</h1>
            <p className="text-xl max-w-2xl">
              Изучите наши сезонные коллекции кожи, созданные для удовлетворения
              развивающихся потребностей моды и функциональности.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Collection */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-md overflow-hidden">
                <Image
                  src={collections[0].image}
                  alt={collections[0].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-medium mb-4">
                Последняя коллекция
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {collections[0].title}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {collections[0].description}
              </p>
              <p className="mb-8">
                В рамках нашего ребрендинга этот сезон ознаменует обновлённую
                приверженность обслуживать бренды любого размера с точностью,
                целью и партнёрством. Независимо от того, создаёте ли вы
                массовые линии или лимитированные силуэты, наши продукты готовы
                адаптироваться.
              </p>
              <Link
                href={`/collections/${collections[0].id}`}
                className="px-6 py-3 bg-black text-white rounded-full inline-block self-start"
              >
                Изучить коллекцию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Collections */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Прошлые коллекции</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {collection.season}, {collection.year}
                    </span>
                    <span className="text-accent font-medium group-hover:underline">
                      Подробнее
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Лукбуки коллекций</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Скачайте лукбуки коллекций для подробной информации о
            характеристиках, цветах и вариантах применения кожи.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4">Лукбук</p>
                <button className="px-4 py-2 bg-black text-white rounded-md text-sm w-full">
                  Скачать PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужны индивидуальные решения?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Наша команда поможет разработать индивидуальные кожаные решения,
            адаптированные под ваши требования и идентичность бренда.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-gray-900 rounded-full text-lg inline-block"
          >
            Связаться с нашей командой
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
