import MyBanner from "../components/MyBanner";
import MyFlyer from "../components/MyFlyer";

function EventSection() {
  return (
    <>
      <MyBanner title="Events" />
      <section id="events" className="scroll-mt-56 sm:scroll-mt-96">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <MyFlyer imgSrc="./thursday.jpeg" altText="thursday-flyer" />
          <MyFlyer imgSrc="./friday.jpeg" altText="friday-flyer" />
          <MyFlyer imgSrc="./saturday.jpeg" altText="saturday-flyer" />
          <MyFlyer imgSrc="./sunday.jpeg" altText="sunday-flyer" />
        </div>
      </section>
    </>
  );
}

export default EventSection;
