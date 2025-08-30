import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:h-[60vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
            alt="About GRANDTEX"
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">О GRANDTEX</h1>
            <p className="text-xl max-w-2xl">
              Узнайте историю GRANDTEX — мирового лидера в производстве кожи.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Наша история</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              GRANDTEX возник из желания объединить традиционный процесс изготовления кожи многолетнего кожевенного бизнеса с развитием обувной промышленности в Азии.
            </p>

            <p>
              В 1999 году два ведущих американских кожевенника объединились с мировым производителем обуви, чтобы создать GRANDTEX, сформировав новую бизнес-модель, предлагающую высококачественную кожу с надёжной доставкой в регионы производства обуви. Стратегия заключалась в создании кожевенных заводов, адаптировавших традиционный американский опыт к ожиданиям стремительно развивающейся мировой обувной индустрии.
            </p>

            <p>
              Основа культуры GRANDTEX строилась на сочетании американского кожевенного мастерства с передовыми азиатскими производственными практиками. Это создало среду, где традиционное ремесло объединяется с современными технологиями, приводя к инновационным и эффективным методам производства кожи.
            </p>

            <p>
              Сегодня GRANDTEX управляет двумя стратегически расположенными кожевенными заводами: один во Вьетнаме для обслуживания индустрии обуви Юго-Восточной Азии и другой в Китае для внутреннего китайского рынка. Каждое предприятие нанимает квалифицированных работников и поддерживает самые высокие стандарты качества, уделяя особое внимание устойчивым практикам.
            </p>

            <p>
              Смотря в будущее, GRANDTEX остаётся приверженным инновациям, устойчивому развитию и соблюдению самых высоких стандартов качества в производстве кожи. Мы продолжаем инвестировать в новые технологии и процессы, которые снижают наше влияние на окружающую среду и повышают характеристики и внешний вид нашей продукции.
            </p>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-gray-700">
                Создавать исключительные кожаные изделия благодаря инновационным и устойчивым практикам, выступая надёжным партнёром для брендов по всему миру.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Наше видение</h3>
              <p className="text-gray-700">
                Быть лидером кожевенной индустрии в области устойчивости, инноваций и качества, устанавливая новые стандарты ответственного производства.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Команда руководителей</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square bg-gray-200 rounded-full w-48 h-48 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">Имя руководителя</h3>
                  <p className="text-gray-500">Должность</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашему пути</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Узнайте, как GRANDTEX может стать вашим партнёром в создании высококачественных и устойчивых кожаных изделий.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block">
            Свяжитесь с нами
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
