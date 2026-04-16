export default function Banner() {
  return (
    <section className="bg-[#F8FAFC] w-full flex flex-col items-center justify-center text-center px-6 pt-12 pb-0 sm:pt-12 sm:pb-6">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1a2b2b] max-w-5xl leading-tight mb-3">
        Friends to keep close in your life
      </h1>
      <p className="text-[12px] sm:text-base text-[#6b7a7a] max-w-sm sm:max-w-md leading-relaxed mt-3 mb-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="bg-[#1e4034] hover:bg-[#163028] text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
        <span className="text-base leading-none">+</span> Add a Friend
      </button>
    </section>
  );
}
