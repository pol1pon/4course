import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B55D43]">
            Коллекция растений в кашпо
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            Живая эстетика природы в вашем доме
          </h1>
          <p className="text-stone-600 text-base font-light leading-relaxed">
            Отборные комнатные цветы в авторских терракотовых кашпо. Мы уже пересадили каждое растение в био-грунт и бережно доставим его прямо к вашей двери.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#catalog"
              className="bg-stone-900 hover:bg-[#B55D43] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Смотреть каталог
            </a>
            <a
              href="#features"
              className="text-stone-700 hover:text-stone-950 px-4 py-3 text-sm font-medium transition-colors"
            >
              О коллекции →
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-square max-w-md mx-auto w-full rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-lg shadow-stone-900/5">
          <Image
            src="/plants/monstera.jpg"
            alt="Монстера в кашпо"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 450px"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-200/80 flex justify-between items-center">
            <div>
              <p className="font-serif text-sm font-medium text-stone-900">
                Монстера Делициоза
              </p>
              <p className="text-xs text-stone-500">В глиняном кашпо • 65 см</p>
            </div>
            <span className="font-serif text-base font-medium text-[#B55D43]">
              3 490 ₽
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}