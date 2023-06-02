import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s">
              <Image
                src="/images/about/new-img-2.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Fast Delivery
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Shop with us and experience the convenience of fast delivery,
                  with most orders shipped out within 24 hours of purchase.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier Quality
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our ecommerce store is committed to providing premier quality
                  products, ensuring that you receive only the best.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Easy check-Out
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At our ecommerce store, we've made the check-out process quick
                  and easy, so you can complete your purchase in just a few
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
