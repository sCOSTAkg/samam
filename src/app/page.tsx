import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const latestProducts = [
    {
      id: 'opulent',
      name: 'Opulent',
      collection: 'Весна-Лето 27',
      type: 'Грейн',
      finish: 'Натуральная барабанная отделка',
      treatment: 'Полуанилиновая',
      image: 'https://ext.same-assets.com/1118492138/331861169.jpeg',
    },
    {
      id: 'papyrus',
      name: 'Papyrus',
      collection: 'Весна-Лето 27',
      type: 'Грейн',
      finish: 'Натуральная барабанная отделка',
      treatment: 'Специальная',
      image: 'https://ext.same-assets.com/1118492138/3988412587.jpeg',
    },
    {
      id: 'boho',
      name: 'Boho',
      collection: 'Весна-Лето 27',
      type: 'Грейн',
      finish: 'Тиснёная',
      treatment: 'Анилиновая',
      image: 'https://ext.same-assets.com/1118492138/3513175735.jpeg',
    },
    {
      id: 'sterling',
      name: 'Sterling',
      collection: 'Весна-Лето 27',
      type: 'Грейн',
      finish: 'Гладкая',
      treatment: 'Анилиновая',
      image: 'https://ext.same-assets.com/1118492138/3442149313.jpeg',
    },
  ];

  const featuredBrands = [
    {
      name: 'Adidas',
      logo: 'https://ext.same-assets.com/1118492138/542915801.jpeg'
    },
    {
      name: 'Camper',
      logo: 'https://ext.same-assets.com/1118492138/1400919951.jpeg'
    },
    {
      name: 'Carhartt',
      logo: 'https://ext.same-assets.com/1118492138/3272561453.jpeg'
    },
    {
      name: 'Nike',
      logo: 'https://ext.same-assets.com/1118492138/271436679.jpeg'
    },
    {
      name: 'Clarks',
      logo: 'https://ext.same-assets.com/1118492138/68077734.jpeg'
    },
  ];

  const sustainabilityPillars = [
    {
      title: "Операционное совершенство",
      description: "Оптимизация процессов для сокращения отходов и потребления ресурсов."
    },
    {
      title: "Цикличность",
      description: "Внедрение принципов круговой экономики на протяжении жизненного цикла продукта."
    },
    {
      title: "Борьба с изменением климата",
      description: "Сокращение нашего углеродного следа и инвестиции в возобновляемую энергию."
    },
    {
      title: "Социальное влияние",
      description: "Создание позитивных изменений в сообществах, где мы работаем."
    }
  ];

  return (
    <MainLayout transparentHeader={true}>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3414069527.jpeg"
            alt="Фон из текстуры кожи"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
            className="animate-ken-burns"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-8 pt-40 h-full flex flex-col justify-between pb-32">
          <div className="animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 animate-reveal">
              Двигайтесь <br />
              <span className="inline-block mt-2">вперёд.</span>
            </h1>
            <div className="mt-8 max-w-xl">
              <p className="text-xl sm:text-2xl font-medium animate-reveal-delay">
                Ваш партнёр по кожевенному производству,<br />
                ориентированный на будущее.
              </p>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Link
                href="/about-grandtex"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
                  alt="О GRANDTEX"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white font-medium text-xl mb-1 block">О GRANDTEX</span>
                    <p className="text-gray-300 text-sm">Узнайте нашу историю, ценности и видение</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/tanneries"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/3036160331.jpeg"
                  alt="Наши кожевенные заводы"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white font-medium text-xl mb-1 block">Наши кожевенные заводы</span>
                    <p className="text-gray-300 text-sm">Ознакомьтесь с нашими современными производствами</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/leathers"
                className="px-8 py-3 border border-white text-white rounded-full inline-block hover:bg-white hover:text-black transition-colors duration-300"
              >
                Исследовать наши кожи
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Leathers Section */}
      <section className="w-full py-24 px-8 bg-white opacity-0 animate-fade-in-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-scroll">
            <h2 className="text-4xl font-bold mb-4">Последняя коллекция</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ознакомьтесь с нашей коллекцией Весна-Лето 27, включающей премиальные кожи, созданные для универсальности и производительности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/leathers/${product.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.collection}</p>
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Тип</span>
                      <span className="text-sm">{product.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Отделка</span>
                      <span className="text-sm">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Обработка</span>
                      <span className="text-sm">{product.treatment}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center opacity-0 animate-fade-in-scroll" style={{ animationDelay: '600ms' }}>
            <p className="mb-8 text-gray-700 max-w-3xl mx-auto">
              От спортзала до поездки на работу SS27 отражает глубину и масштаб того, что GRANDTEX умеет делать лучше всего — создавать универсальные кожи, которые подстраиваются под ваши потребности. В рамках ребрендинга этот сезон ознаменует обновлённую приверженность обслуживать бренды любого размера с точностью, целью и партнёрством.
            </p>
            <Link
              href="/collections/spring-summer-2027"
              className="px-8 py-3 bg-black text-white rounded-full inline-block hover:bg-gray-900 transition-colors"
            >
              Посмотреть коллекцию
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="w-full py-24 px-8 bg-gray-50 relative overflow-hidden opacity-0 animate-fade-in-scroll">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://ext.same-assets.com/1118492138/180971912.jpeg"
            alt="Фон раздела устойчивого развития"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="opacity-0 animate-fade-in-scroll">
              <h2 className="text-4xl font-bold mb-6">Устойчивое развитие</h2>
              <p className="text-lg text-gray-700 mb-8">
                Устойчивое развитие всегда было в основе бизнеса GRANDTEX. Мы продвинули нашу приверженность дальше, установив цели по четырём направлениям: операционное совершенство, цикличность, борьба с изменением климата и социальное влияние.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {sustainabilityPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-[1.03] opacity-0 animate-fade-in-scroll"
                    style={{ animationDelay: `${index * 150 + 300}ms` }}
                  >
                    <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/sustainability"
                className="px-8 py-3 bg-black text-white rounded-full inline-block hover:bg-gray-900 transition-colors"
              >
                Узнать больше о наших инициативах
              </Link>
            </div>

            <div className="relative opacity-0 animate-fade-in-scroll" style={{ animationDelay: '600ms' }}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/180971912.jpeg"
                  alt="Устойчивое развитие"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold mb-2">Наша приверженность</h3>
                <p className="text-gray-700">
                  К 2030 году мы стремимся сократить потребление воды на 50 %, достичь углеродной нейтральности и обеспечить переработку или повторное использование 100 % отходов кожи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-24 px-8 bg-white opacity-0 animate-fade-in-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-scroll">
            <h2 className="text-4xl font-bold mb-4">Нам доверяют мировые бренды</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы сотрудничаем с брендами любого масштаба, сочетая мастерство мирового уровня с персонализированным сервисом для создания исключительных кожаных продуктов.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredBrands.map((brand, index) => (
              <div
                key={brand.name}
                className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden group hover:shadow-md transition-all opacity-0 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.8 }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-900 rounded-2xl p-12 text-white text-center opacity-0 animate-fade-in-scroll" style={{ animationDelay: '800ms' }}>
            <h3 className="text-3xl font-bold mb-6">Готовы начать?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ощутите преимущество GRANDTEX и узнайте, как наши премиальные кожи могут повысить уровень ваших продуктов.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium inline-block hover:bg-gray-100 transition-colors"
            >
              Свяжитесь с нами сегодня
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
