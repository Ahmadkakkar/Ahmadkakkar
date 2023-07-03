import Breadcrumb from "@/components/Common/Breadcrumb";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Product = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("responseData");
  //     try {
  //       const response = await axios.get("http://localhost:1337/api/products?populate=*");
  //       if (response) {
  //         setData(response.data);
  //         console.log(response.data, "responseData");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(data, "Data");
  return (
    <>
      <Breadcrumb
        pageName="Products"
        description="Our ecommerce store offers a vast selection of fashionable clothing and accessories, curated to keep you on-trend and stylish.
        From the latest runway looks to timeless classics, our collection of fashion products has everything you need to express your personal style."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            {props.name}
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* {data.data && data.data.map((prod) => { */}
            <div
              key={props.id}
              className="border-gray-200 m-2 w-full max-w-sm rounded-lg border shadow-xl"
            >
              <a href="#">
                <img
                  className="rounded-t-lg p-4"
                  // src={prod.attributes.image.data && prod.attributes.image.data.attributes.formats.small.url}
                  alt="Product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-gray-900 text-2xl font-semibold tracking-tight dark:text-white ">
                    {/* {prod.attributes.title} */}
                    Title: {props.name}
                  </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                  <p className="text-gray-900 text-l  tracking-tight dark:text-white ">
                    Description: {/* {prod.attributes.description} */}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 text-xl font-bold">
                    Price:{/* PKR/- {prod.attributes.price} */}
                  </span>
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
            {/* })} */}
          </div>
          {/* pagination Buttons */}
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  return { props: { name: "Ahmad" } };
}

export default Product;
