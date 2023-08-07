import React from "react";

function productDetailPage() {
  return (
    <div className="p-10">
      <div className=" w-full lg:flex lg:max-w-full">
        <div
          className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
          style="background-image: url('/mountain.jpg')"
          title="Mountain"
        ></div>
        <div className="border-gray-400 lg:border-gray-400 flex flex-col justify-between rounded-b border-r border-b border-l bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
          <div className="mb-8">
            <p className="text-gray-600 flex items-center text-sm">
              <svg
                className="text-gray-500 mr-2 h-3 w-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 mb-2 text-xl font-bold">
              Best Mountain Trails 2020
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="mr-4 h-10 w-10 rounded-full"
              src="/ben.png"
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetailPage;
