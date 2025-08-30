"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Вы успешно подписались на рассылку.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Не удалось подписаться. Попробуйте позже.");
    }
  }

  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-gray-600 hover:text-black">
                Услуги
              </Link>
            </li>
            <li>
              <Link
                href="/production"
                className="text-gray-600 hover:text-black"
              >
                Производство
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-gray-600 hover:text-black"
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link
                href="/calculator"
                className="text-gray-600 hover:text-black"
              >
                Калькулятор стоимости
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
          <h3 className="font-medium mb-4">Услуги</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/patterns"
                className="text-gray-600 hover:text-black"
              >
                Разработка лекал
              </Link>
            </li>
            <li>
              <Link
                href="/services/sewing"
                className="text-gray-600 hover:text-black"
              >
                Пошив изделий
              </Link>
            </li>
            <li>
              <Link
                href="/services/quality"
                className="text-gray-600 hover:text-black"
              >
                Контроль качества
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Информация</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/why-grandtex"
                className="text-gray-600 hover:text-black"
              >
                Почему GRANDTEX?
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-black">
                О компании
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-black"
              >
                Ресурсы
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать последние новости о
              производстве и услугах.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Электронная почта"
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                Подписаться
              </button>
              {status === "success" && (
                <p className="text-green-600 text-sm">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">{message}</p>
              )}
            </form>
          </div>
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
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-black"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
