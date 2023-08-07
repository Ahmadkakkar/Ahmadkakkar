"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import { orderState } from "@/atoms/orderState";

export default function Cart() {
  // email sending code

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [order, setOrder] = useRecoilState(orderState);

  const addShippingDetails = () => {
    setOrder({
      ...order,
      from_name: "Online Shop",
      from_email: "mad858125@gmail.com",
      message_html: "YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!",
      address: address,
      to_email: user.email,
      to_name: name,
      reply_to: "mad858125@gmail.com",
    });
  };

  console.log(order, "emailDetails");

  // cart component code
  const [cartItem, setCartItem] = useRecoilState(cartState);

  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log(order, "setCartItem");
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach(
      (item) => (total += item.attributes.price * item.quantity)
    );
    return total;
  };

  const createCheckoutSession = async () => {
    console.log(cartItem, "cartItem");
    axios
      .post(
        "api/checkout_sessions",
        {
          cartItem: cartItem,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (res) => {
        console.log(res);
        const data = res.data;
        window.location = data;
      })
      .catch((err) => console.log(err));

    addShippingDetails();
  };

  const removePoduct = (id) => {
    console.log(id);
    console.log(cartItem);
    const arr = cartItem.filter((item) => {
      return item.id !== id;
    });
    setCartItem(arr);
  };
  return (
    <div>
      <headerNav />

      <div className="container mx-auto ">
        {cartItem.length <= 0 ? (
          <h1 className="fontt-semibold my-32 text-center text-4xl underline underline-offset-8">
            Your Cart Is Empty
          </h1>
        ) : (
          <>
            <section className="text-gray-600 body-font">
              <div className="mt-12">
                <div className="flow-root">
                  <ul role="list" className="my-16">
                    {cartItem.map((item) => {
                      return (
                        <>
                          <li
                            className="mb-3 flex rounded-lg bg-lightsilver p-6 shadow-lg"
                            key={item.id}
                          >
                            <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                              <img
                                src={
                                  item.attributes.image.data[0].attributes &&
                                  `http://localhost:1337${item.attributes.image.data[0].attributes.url}`
                                }
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="text-gray-900 flex justify-between text-xl font-medium">
                                  <h3>
                                    <a href="#">{item.attributes.title}</a>
                                  </h3>
                                  <p className="ml-4">
                                    PKR/-{item.attributes.price * item.quantity}
                                  </p>
                                </div>
                                <p className="text-gray-500 mt-1 text-base">
                                  {item.attributes.brandname}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm font-semibold">
                                <p className="text-gray-500">
                                  Qty: {item.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="rounded-md border bg-red px-5 py-2 font-medium text-white"
                                    onClick={() => {
                                      removePoduct(item.id);
                                    }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h2 className="text-right text-xl font-semibold">
                Total:{" "}
                <span className="text-right text-3xl font-bold">
                  {" "}
                  PKR/-{totalPrice()}
                </span>
              </h2>
            </section>
            <section className=" relative">
              <div className="container mx-auto px-5 pt-24">
                <div className="mb-12 flex w-full flex-col text-center">
                  <h1 className="title-font mb-4 text-2xl  font-semibold sm:text-3xl">
                    Shipping Details
                  </h1>
                </div>
                <div className="mx-auto">
                  <div className="-m-2 flex flex-wrap">
                    <div className="p-2 md:w-full lg:w-1/2">
                      <div className="relative">
                        <label htmlFor="name" className="text-base leading-7">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 w-full rounded bg-lightsilver  bg-opacity-50 py-1 px-3 text-base leading-8 shadow-lg outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                        />
                      </div>
                    </div>
                    <div className="p-2 md:w-full lg:w-1/2">
                      <div className="relative">
                        <label htmlFor="email" className="text-base leading-7">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your Email"
                          value={user.email}
                          // value={email}
                          disabled
                          onChange={(e) => setEmail(e.target.value)}
                          className="focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 w-full rounded bg-lightsilver  bg-opacity-50 py-1 px-3 text-base leading-8 shadow-lg outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                        />
                      </div>
                    </div>
                    <div className="w-full p-2">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="text-base leading-7"
                        >
                          Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Enter your Shipping Address"
                          className="focus:border-indigo-500 focus:ring-indigo-200 text-gray-700 h-32 w-full resize-none rounded bg-lightsilver bg-opacity-50 py-1 px-3 text-base leading-6 shadow-lg outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {cartItem.length > 0 && (
          <div className="mx-auto my-4">
            <button
              className={`${
                localStorage.getItem("user")
                  ? " cursor-pointer"
                  : "cursor-not-allowed"
              } mx-auto mt-4 block rounded-lg bg-primary py-4 px-12 text-right text-white`}
              disabled={localStorage.getItem("user") ? false : true}
              onClick={createCheckoutSession}
            >
              {localStorage.getItem("user")
                ? " Confirm Order"
                : "Please Login First! Thank You"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
