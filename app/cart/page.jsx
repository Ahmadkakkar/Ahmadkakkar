"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  useEffect(() => {
    console.log(cartItem, "setCartItem");
  }, [cartItem]);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.attributes.price * item.quantity));
    return total;
  };

  const createCheckoutSession = async () => {
    alert("testing session")
    axios
      .post("/api/checkout_sessions", { cartItem })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
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

      <div className="container mx-auto">
        {
          cartItem.length <= 0 ? (
            <h1 className="my-32 text-center text-4xl fontt-semibold underline underline-offset-8">Your Cart Is Empty</h1>
          ) : (
            <section class="text-gray-600 body-font">
              <div class="mt-12">
                <div class="flow-root">
                  <ul role="list" class="my-16">
                    {cartItem.map((item) => {
                      return (
                        <>
                          <li class="flex p-6 mb-3 bg-lightsilver shadow-lg rounded-lg" key={item.id}>
                            <div class="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                              <img
                                src={
                                  item.attributes.image.data[0].attributes &&
                                  `http://localhost:1337${item.attributes.image.data[0].attributes.url}`
                                }
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                class="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="text-gray-900 flex justify-between text-xl font-medium">
                                  <h3>
                                    <a href="#">{item.attributes.title}</a>
                                  </h3>
                                  <p class="ml-4">${item.attributes.price * item.quantity}</p>
                                </div>
                                <p class="text-gray-500 mt-1 text-base">
                                  {item.attributes.brandname}
                                </p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm font-semibold">
                                <p class="text-gray-500">Qty: {item.quantity}</p>

                                <div class="flex">
                                  <button
                                    type="button"
                                    class="bg-red border text-white px-5 py-2 rounded-md font-medium"
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
            </section>
          )
        }

        {cartItem.length > 0 && (
          <div className="mx-auto mt-4">
            <h2 className="text-right text-3xl font-bold">
              Total: ${totalPrice()}
            </h2>
            <button
              className="bg-primary mx-auto mt-4 block py-4 px-12 rounded-lg text-right text-white"
              onClick={createCheckoutSession}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
