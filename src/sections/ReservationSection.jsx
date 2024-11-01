import MyButton from "../components/MyButton";

function ReservationSection() {
  return (
    <section id="top" className="scroll-mt-28 bg-miss-ivy-banner min-h-[48rem] bg-cover bg-center flex items-center justify-center w-screen !mt-0">
      <div className="h-96 w-[375px] flex flex-col justify-center items-center text-center space-y-9 bg-miss-ivy-green bg-opacity-90 rounded-xl p-4 border-2 border-miss-ivy-gold border-dashed">
        <h2 className="text-miss-ivy-gold font-bold text-4xl">
          Reserve A Table
        </h2>
        {/* <p className="text-miss-ivy-gold font font-bold text-2xl">
          Make a reservation to dine in at Miss Ivy&apos;s restaurant.
        </p> */}
        <MyButton href="https://www.opentable.ca/r/miss-ivy-toronto?corrid=d2c2c43e-d0d0-449b-9550-28abfea43d60&p=2&sd=2024-10-28T19%3A00%3A00">
          Reserve
        </MyButton>
      </div>
    </section>
  );
}

export default ReservationSection;
