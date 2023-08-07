"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import toast from "react-hot-toast";

const getproduct = async (id) => {
  const productsData = await fetch(
    `http://localhost:1337/api/products/${id}?populate=*`,
    { cache: "no-store" }
  );
  return productsData.json();
};

export default function Slug(params) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (params.params.id) {
      getproduct(params.params.id)
        .then((product) => {
          setProduct(product.data);
          setIsLoading(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  // for cart
  const [cartItem, setCartItem] = useRecoilState(cartState);

  useEffect(() => {
    console.log(cartItem, "cartItem");
  }, [cartItem]);

  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      product["quantity"] = 1;
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item?.quantity ? item?.quantity + 1 : null }
            : item;
        });
      });
    }
    console.log(product.name, "atettststsst");
    toast(`${product.attributes.title} added to cart`);
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        {isLoading && (
          <div className="container mx-auto px-5 py-24 ">
            <div className="mx-auto mt-10 flex flex-wrap lg:w-4/5">
              <img
                alt="Product Image"
                className="h-100 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                src={
                  `${product.attributes.image.data[0].attributes}` &&
                  `http://localhost:1337${product.attributes.image.data[0].attributes.url}`
                }
              />
              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                <h2 className="title-font text-gray-500 text-sm tracking-widest">
                  {product?.attributes?.brandname || "GUCCI"}
                </h2>
                <h1 className="text-gray-900 title-font mb-1 text-3xl font-medium">
                  {product.attributes.title}
                </h1>
                {/* <div className="mb-4 flex">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="border-gray-200 space-x-2s ml-3 flex border-l-2 py-2 pl-3">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>  */}
                <p className="leading-relaxed">
                  {product?.attributes?.description}
                </p>
                <div className="border-gray-100 mt-6 mb-5 flex items-center border-b-2 pb-5">
                  <div className="flex">
                    <span className="mr-3 text-xl font-semibold">Color</span>
                    <button
                      className={`h-6 w-6 rounded-full bg-${product.attributes.color} border-1`}
                    ></button>
                  </div>
                  <div className="ml-6 flex items-center">
                    <span className="mr-3 bg-transparent">Size</span>
                    <div className="relative">
                      <select className="border-gray-300 focus:ring-indigo-200 focus:border-indigo-500 appearance-none rounded border py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-2">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="text-gray-600 pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font text-gray-900 text-lg font-medium">
                    PKR/-{" "}
                    <b className="text-2xl"> {product?.attributes?.price} </b>
                  </span>
                  <Link href="/checkout" className="ml-auto">
                    <button className="ml-auto flex rounded border-0 bg-primary py-2 px-6 text-white">
                      Checkout
                    </button>
                  </Link>
                  <button
                    className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray p-0"
                    onClick={addItemsToCart}
                  >
                    <svg
                      fill="primary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

// export default Slug;
