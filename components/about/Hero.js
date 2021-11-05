import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <Image
          src="/images/site/timSittingColor.jpg"
          alt="Tim on the mats at Lucas Lepri HQ"
          width={160}
          height={200}
        />
        <h1>About The Author</h1>
      </div>

      <p>
        Tim took his first few Jiu Jitsu classes in 2015, but didn't start
        training in earnest and with consistency until Febuary 2017. He is
        currently a purple belt under Lucas Lepri and an assistant kids
        instructor at Lepri BJJ HQ.{" "}
      </p>
    </section>
  );
}
