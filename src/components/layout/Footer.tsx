import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/collections"
                className="text-gray-600 hover:text-black"
              >
                Коллекции
              </Link>
            </li>
            <li>
              <Link href="/leathers" className="text-gray-600 hover:text-black">
                Кожи
              </Link>
            </li>
            <li>
              <Link
                href="/tanneries"
                className="text-gray-600 hover:text-black"
              >
                Дубильни
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability"
                className="text-gray-600 hover:text-black"
              >
                Устойчивость
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-black">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Информация</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about-grandtex"
                className="text-gray-600 hover:text-black"
              >
                О GRANDTEX
              </Link>
            </li>
            <li>
              <Link
                href="/why-grandtex"
                className="text-gray-600 hover:text-black"
              >
                Почему GRANDTEX?
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Подписка</h3>
          <p className="text-sm text-gray-600 mb-4">
            Подпишитесь на нашу рассылку, чтобы получать последние новости о
            производстве и услугах.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Электронная почта"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 GRANDTEX</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="https://www.linkedin.com"
            className="text-gray-600 hover:text-black"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com"
            className="text-gray-600 hover:text-black"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
