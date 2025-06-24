import MyBanner from "../components/MyBanner";
import MyFlyer from "../components/MyFlyer";

function EventSection() {
  return (
    <>
      <MyBanner title="Events" />
      <section id="events" className="scroll-mt-56 sm:scroll-mt-96">
        {/* <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> */}
        <MyFlyer imgSrc="./magic-man.jpeg" altText="christian-mescia" />
        <a
          href="https://www.eventbrite.ca/e/a-taste-of-magic-tickets-1413125830399?aff=oddtdtcreator-"
          target="_blank"
          className="flex justify-center rounded-lg bg-miss-ivy-green mx-auto px-4 py-2 mt-5 text-white hover:bg-green-800 border-4 border-miss-ivy-gold border-double w-96"
        >
          Get Tickets
        </a>
      </section>
    </>
  );
}

export default EventSection;
