// import MyButton from "../components/MyButton";

function BannerSection() {
  return (
    <section
      id="top"
      className="scroll-mt-28 bg-miss-ivy-banner min-h-[48rem] bg-cover bg-center flex items-center justify-center w-screen text-miss-ivy-gold"
    >
      <div className="flex flex-col w-[50rem] mx-2 p-4 space-y-4 text-center justify-center bg-miss-ivy-green bg-opacity-70 rounded-xl border-2 border-dashed border-miss-ivy-gold">
        <h1 className="text-5xl font-semibold">Welcome to Miss Ivy</h1>
        <p>
          Nestled in the heart of Queen Street West, Miss Ivy is Toronto&apos;s
          premier destination for upscale Asian fusion cuisine. Our intimate
          ambiance, exquisite handcrafted cocktails, and carefully curated
          dishes make eversy visit an experience. Whether you&apos;re
          celebrating a special occasion or enjoying an elegant night out, Miss
          Ivy offers a sanctuary for unforgettable dining. Join us and discover
          a place where tradition meets innovation, perfect for any occasion.{" "}
        </p>
      </div>
    </section>
  );
}

export default BannerSection;
