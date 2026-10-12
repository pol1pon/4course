import Image from "next/image";

const plants = [
  {
    name: "Монстера Делициоза",
    price: "3 490 ₽",
    image: "/plants/monstera.jpg",
    desc: "Крупные резные листья • Высота 65 см",
  },
  {
    name: "Фикус Лирата",
    price: "4 890 ₽",
    image: "/plants/ficus.jpg",
    desc: "Скульптурная форма • Высота 110 см",
  },
  {
    name: "Сансевиерия Лауренти",
    price: "2 190 ₽",
    image: "/plants/sansevieria.jpg",
    desc: "Вертикальные полосатые листья • Высота 45 см",
  },
  {
    name: "Замиокулькас Зензи",
    price: "3 190 ₽",
    image: "/plants/zamioculcas.jpg",
    desc: "Плотные глянцевые побеги • Высота 55 см",
  },
];

const featuresList = [
  {
    icon: "🪴",
    title: "Уже пересажены",
    text: "Используем премиальный дренажный субстрат. Растению не нужна пересадка минимум год.",
  },
  {
    icon: "🏺",
    title: "Натуральная терракота",
    text: "Кашпо из дышащей глины с поддоном в комплекте защищают корни от застоя воды.",
  },
  {
    icon: "📦",
    title: "Бережная эко-доставка",
    text: "Надежные термобоксы сохраняют тепло до -20°C и берегут листья при перевозке.",
  },
];

export default function Features() {
  return (
    <div className="space-y-20 py-12">
      
      {/* Advantages */}
      <section id="features" className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#B55D43]">
            Преимущества
          </span>
          <h2 className="text-3xl font-serif text-stone-900 mt-2">
            Забота в каждой детали
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#B55D43]">
              Популярное
            </span>
            <h2 className="text-3xl font-serif text-stone-900 mt-1">
              Каталог растений
            </h2>
          </div>
          <span className="text-xs text-stone-500 hidden sm:inline">
            Все цветы в наличии с кашпо
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square w-full bg-stone-50">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-medium text-stone-900">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light mt-1">
                    {plant.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-serif text-base font-medium text-stone-900">
                    {plant.price}
                  </span>
                  <button className="bg-stone-900 hover:bg-[#B55D43] text-white text-xs px-3.5 py-2 rounded-full transition-colors cursor-pointer">
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}