function BannerSection() {
  return (
    <section
      id="top"
      className="scroll-mt-28 bg-miss-ivy-banner min-h-[48rem] bg-cover bg-center flex items-center md:justify-end w-screen text-white"
    >
      <div className="first:flex flex-col w-[50rem] mx-2 space-y-4 text-center">
        <div className="group mr-4">
          <h1 className="text-5xl font-semibold animate-slideIn delay-1000 hover:cursor-context-menu">
            Welcome to Miss Ivy
          </h1>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
            Nestled in the heart of Queen Street West, Miss Ivy is
            Toronto&apos;s premier destination for upscale Asian fusion cuisine.
            Our intimate ambiance, exquisite handcrafted cocktails, and
            carefully curated dishes make every visit an experience. Whether
            you&apos;re celebrating a special occasion or enjoying an elegant
            night out, Miss Ivy offers a sanctuary for unforgettable dining.
            Join us and discover a place where tradition meets innovation,
            perfect for any occasion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
