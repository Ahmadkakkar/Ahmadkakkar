"use client";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { orderState } from "@/atoms/orderState";
import Link from "next/link";
import axios from "axios";
import { cartState } from "@/atoms/cartState";
export default function ContactForm() {
  const accessToken =
    "c9f27bbb2b6886d2536bf8ec76fbca914f3b5d457a42c715671bba535fa84b2a5cc1f4a179b6d137a03e270d4707358399f32a95a07246feb3179a19b9c831f9d5d38451a1a5a47b6fe5d9aa845ec48b53fc92c73ee1e1ca348d1137846bc96bcfe4b291b06c2028bc12cb34667f895163b8f3a88233a03b0828c9e4af58ed27";
  const [order, setOrder] = useState("");
  let id = order?.to_email ? order?.to_email?.split("@")[0] : "orderid";

  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [Products, setProducts] = useRecoilState(cartState);
  // const test = useRecoilState(orderState);
  useEffect(() => {
    setOrder(JSON.parse(localStorage.getItem("order")));
  }, []);

  const handleSubmit = () => {
    const templateParams = {
      from_name: order?.from_name,
      from_email: order?.from_email,
      message_html: order?.message_html,
      address: order?.address,
      to_email: order?.to_email,
      to_name: order?.to_name,
      reply_to: order?.reply_to,
    };

    emailjs
      .send(
        "service_552ypoh",
        "template_o04g6bw",
        templateParams,
        "oYUCfZ2hkrlkBKhGA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const createOrder = async () => {
    const totalPrice = () => {
      let total = 0;
      console.log(cartItem);
      cartItem.forEach(
        (item) => (total += item.attributes.price * item.quantity)
      );
      return total;
    };
    const orderData = {
      data: {
        email: order?.to_email,
        products: Products,
        address: order?.address,
        name: order?.to_name,
        amount: totalPrice(),
        status: "pending",
        orderid: `${id}-${Math.random()}`,
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:1337/api/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace accessToken with the valid authentication token
          },
        }
      );
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
    createOrder();
  }, [order, cartItem]);
  return (
    <>
      <div className="my-44 flex flex-col flex-wrap items-center justify-center ">
        <div className="m-2 flex items-center justify-center  rounded-lg bg-red bg-opacity-70 px-24 shadow-lg">
          <h1 className="py-5 text-[2rem] font-semibold text-black">
            Thank you
          </h1>
        </div>
        <div className="m-2 flex  items-center justify-center  rounded-lg bg-primary bg-opacity-70 px-8 shadow-lg">
          <Link
            href="/product"
            className="py-5 text-[1.2rem] font-semibold text-black"
          >
            Go Back to Products
          </Link>
        </div>
      </div>
      {/* <div>
        <section className="text-gray-600 body-font relative">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="title-font text-gray-900 mb-4 text-2xl font-medium sm:text-3xl">
                Shipping Details
              </h1>
            </div>
            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-gray-600 text-sm leading-7"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Phone"
                      className="bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 w-full rounded border bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-gray-600 text-sm leading-7"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      // value={user.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 w-full rounded border bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-gray-600 text-sm leading-7"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your Shipping Address"
                      className="bg-gray-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 h-32 w-full resize-none rounded border bg-opacity-50 py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                    ></textarea>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center p-2">
                  <button
                    className=" rounded-lg bg-primary px-6 py-6 text-white"
                    onClick={handleSubmit}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}
// export default ContactForm;
