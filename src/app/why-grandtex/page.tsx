import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function WhyGrandtexPage() {
  const advantages = [
    {
      title: "Безупречное качество",
      description:
        "Наша приверженность качеству непоколебима. Мы объединяем традиционное мастерство с современными технологиями, создавая кожи, соответствующие высоким стандартам производительности и эстетики.",
      icon: "🏆",
    },
    {
      title: "Инновации",
      description:
        "Мы постоянно инвестируем в исследования и разработки, создавая инновационные кожаные решения для меняющихся потребностей клиентов и отрасли.",
      icon: "💡",
    },
    {
      title: "Устойчивое развитие",
      description:
        "Экологическая ответственность лежит в основе нашей деятельности. Мы развиваем устойчивые практики, минимизируя воздействие и повышая качество продукции.",
      icon: "🌱",
    },
    {
      title: "Глобальное присутствие",
      description:
        "Благодаря стратегическим локациям в ключевых производственных регионах, мы обеспечиваем эффективный сервис и надёжную доставку клиентам по всему миру.",
      icon: "🌎",
    },
    {
      title: "Ориентация на клиента",
      description:
        "Мы строим долгосрочные отношения с клиентами благодаря оперативному сервису, совместной разработке и глубокому пониманию их уникальных потребностей.",
      icon: "👥",
    },
    {
      title: "Универсальность",
      description:
        "Наш широкий ассортимент кож подходит для множества применений — от обуви и аксессуаров до обивки и автомобильной промышленности.",
      icon: "🔄",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] md:h-[50vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/2560085916.jpeg"
            alt="Why GRANDTEX"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Почему GRANDTEX?
            </h1>
            <p className="text-xl max-w-2xl">
              Узнайте, что делает нас вашим надёжным партнёром в области
              премиальных кожаных решений.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ваш партнёр по кожевенному производству, ориентированный на будущее
          </h2>

          <div className="prose prose-lg max-w-none">
            <p>
              В GRANDTEX мы не просто производим кожу — мы создаём возможности.
              Будучи одной из ведущих мировых кожевенных групп, мы объединяем
              многовековое мастерство с передовыми инновациями, создавая кожаные
              продукты, превосходящие ожидания по качеству, устойчивости и
              производительности.
            </p>

            <p>
              Нас отличает уникальная способность обслуживать бренды любого
              масштаба с неизменной приверженностью совершенству. Будь вы
              мировым производителем обуви или бутик-брендом, создающим
              лимитированные аксессуары, мы сохраняем одинаковую приверженность
              качеству, сервису и инновациям в каждом сотрудничестве.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Преимущества GRANDTEX
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Экспертная команда</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Наша команда объединяет специалистов по коже со всего мира,
                  сочетая разнообразные взгляды и опыт для создания выдающихся
                  продуктов. От мастеров-кожевенников с десятилетиями опыта до
                  инновационных химиков и экологов — наши профессионалы работают
                  вместе, расширяя границы возможного в кожевенном производстве.
                </p>

                <p>
                  Такое сочетание традиционных знаний и инноваций позволяет нам
                  решать сложные задачи, разрабатывать индивидуальные решения и
                  постоянно совершенствовать продукты и процессы.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about-grandtex"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/800804989.jpeg"
                  alt="GRANDTEX Expert Team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/3646578739.jpeg"
                  alt="GRANDTEX Technology"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Технологии и инновации
              </h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Наши современные предприятия сочетают традиционные методы
                  дубления с новейшими технологическими инновациями. Такой
                  подход позволяет сохранять ремесленное качество кожи,
                  одновременно достигая стабильности, эффективности и
                  устойчивости в масштабах.
                </p>

                <p>
                  Мы постоянно инвестируем в исследования и разработки,
                  сотрудничая с ведущими институтами и технологическими
                  партнёрами, чтобы внедрять новые процессы, материалы и
                  применения. От водосберегающих технологий до инновационных
                  отделок — стремление к прогрессу лежит в основе всего, что мы
                  делаем.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/tanneries"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Изучить наши предприятия
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Approach */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Наш клиенториентированный подход
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Понимание</h3>
              <p className="text-gray-700">
                Мы уделяем время, чтобы по-настоящему понять ваши потребности,
                задачи и видение, создавая основу для успешного сотрудничества.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Сотрудничество</h3>
              <p className="text-gray-700">
                Наша команда тесно сотрудничает с вашей, объединяя экспертизу
                для разработки решений, отвечающих вашим требованиям.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Реализация</h3>
              <p className="text-gray-700">
                Мы выполняем работу точно и в срок, предоставляя
                высококачественные кожи и надёжную поддержку на всех этапах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Что говорят наши партнёры
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">&quot;</div>
              <p className="text-lg mb-6">
                GRANDTEX постоянно поставляет исключительную кожу,
                соответствующую нашим строгим стандартам. Их техническая
                экспертиза и совместный подход сделали их незаменимым партнёром
                в процессе разработки продукции.
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-400">
                  Materials Director, Global Footwear Brand
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">&quot;</div>
              <p className="text-lg mb-6">
                Будучи бутиковым производителем, мы ценим готовность GRANDTEX
                работать с небольшими объёмами заказов, сохраняя при этом такой
                же уровень качества и сервиса, как и для крупных брендов.
              </p>
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-gray-400">
                  Founder, Artisanal Leather Goods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы ощутить преимущество GRANDTEX?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей командой, чтобы обсудить ваши потребности в коже и
            узнать, как мы можем помочь вам достичь целей.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block"
          >
            Связаться
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
