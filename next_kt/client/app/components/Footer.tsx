import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#1C1917] text-stone-300 py-12 mt-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/planto2.png"
                width={28}
                height={28}
                alt="Planto"
                className="w-7 h-7 object-contain brightness-125"
              />
              <span className="font-serif text-xl font-medium text-white tracking-tight">
                Planto
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light max-w-sm leading-relaxed">
              Студия комнатных растений в авторских терракотовых кашпо с доставкой до двери.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2 text-xs">
            <p className="font-medium text-white uppercase tracking-wider mb-2">Навигация</p>
            <p><a href="#catalog" className="text-stone-400 hover:text-white transition-colors">Каталог цветов</a></p>
            <p><a href="#features" className="text-stone-400 hover:text-white transition-colors">Преимущества</a></p>
            <p><a href="#contacts" className="text-stone-400 hover:text-white transition-colors">Доставка и оплата</a></p>
          </div>

          {/* Contacts */}
          <div className="space-y-2 text-xs">
            <p className="font-medium text-white uppercase tracking-wider mb-2">Контакты</p>
            <p className="text-white font-medium">+7 (800) 555-35-35</p>
            <p className="text-stone-400">hello@planto-plants.ru</p>
            <p className="text-stone-500">Ежедневно: 09:00 — 21:00</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© 2026 Planto Studio. Все права защищены.</p>
          <p className="mt-2 sm:mt-0">Минимализм и живая природа в вашем доме</p>
        </div>
      </div>
    </footer>
  );
}