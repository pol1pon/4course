import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-32 h-32 flex items-center justify-center -my-8 shrink-0">
            <Image
              src="/planto2.png"
              width={128}
              height={128}
              alt="Planto"
              className="w-32 h-32 object-contain"
            />
          </div>
          <span className="font-serif text-2xl font-medium text-stone-900 tracking-tight">
            Planto
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <a href="#catalog" className="hover:text-stone-950 transition-colors">
            Каталог
          </a>
          <a href="#features" className="hover:text-stone-950 transition-colors">
            Преимущества
          </a>
          <a href="#contacts" className="hover:text-stone-950 transition-colors">
            Контакты
          </a>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-2.5 bg-white border border-stone-200 px-4 py-2 rounded-full shadow-xs">
          <Image
            src="/image2.png"
            width={64}
            height={64}
            alt="Cart"
            className="w-7 h-7 object-contain"
          />
          <span className="text-sm font-medium text-stone-800">Корзина</span>
          <span className="w-5 h-5 flex items-center justify-center text-xs font-semibold bg-[#B55D43] text-white rounded-full">
            2
          </span>
        </div>

      </div>
    </header>
  );
}