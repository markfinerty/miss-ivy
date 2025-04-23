import MyBanner from "../components/MyHeader";

function EventSection() {
  return (
    <>
      <MyBanner title="Events" />
      <section id="events" className="scroll-mt-56 sm:scroll-mt-96">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <img
            className="w-[30rem]"
            src="./oyster-night.jpeg"
            alt="oyster-night"
          />
          <img
            className="w-[30rem]"
            src="./latin-night.jpeg"
            alt="latin-night"
          />
          <img
            className="w-[30rem]"
            src="./ladies-night.jpeg"
            alt="ladies-night"
          />
          <img className="w-[30rem]" src="./brunch.jpeg" alt="brunch" />
        </div>
      </section>
    </>
  );
}

export default EventSection;
