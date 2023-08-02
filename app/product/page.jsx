"use client"
import Breadcrumb from "@/components/Common/Breadcrumb";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const getproducts = async () => {
  const productsData = await fetch(
    "http://localhost:1337/api/products?populate=*",
    { cache: "no-store" }
  );
  return productsData.json();
}


export default function Product() {
  const [products, setProducts] = useState([]);

const router = useRouter();

useEffect(() => {
  const getProducts = async () => {
    const productsData = await fetch(
      "http://localhost:1337/api/products?populate=*",
      { cache: "no-store" }
    );
    const productsJson = await productsData.json();
    // console.log(productsJson, "aaddaaddadadad");
    setProducts(productsJson.data);
  };
  getProducts();
}, []);

  // const products = await getproducts();
  // console.log(products, "products");


  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:1337/api/products?populate=*"
  //       );
  //       if (response) {
  //         setData(response.data.data);
  //         setIsData(true);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log(data, "Data");

  // Paginaton.......
  // const recordsPerPage = 6;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data.slice(firstIndex, lastIndex);
  // const totalpages = Math.ceil(data.length / recordsPerPage);
  // const numbers = [...Array(totalpages + 1).keys()].slice(1);

  // const prePage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const nextPage = () => {
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // const changeCurrentPage = (id) => {
  //   setCurrentPage(id);
  // };

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
            {products.id}
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {products &&
              products.map((prod) => (
                <div
                  key={prod.id}
                  className="border-gray-300 m-2 h-fit w-full max-w-sm flex-grow space-y-6 rounded-lg shadow-2xl"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg p-4"
                      src={
                        prod.attributes.image.data[0].attributes &&
                        `http://localhost:1337${prod.attributes.image.data[0].attributes.url}`
                      }
                      alt="Product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-gray-900 text-2xl font-semibold tracking-tight dark:text-white ">
                        {prod.attributes.title}
                      </h5>
                    </a>
                    <div className="mt-2.5 mb-5 flex items-center">
                      <p className="text-gray-900 text-l  tracking-tight dark:text-white ">
                        {prod.attributes.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 text-xl font-bold">
                        PKR/- {prod.attributes.price}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-end">
                      {/* <a
                        href="#0"
                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                      >
                        ADD TO CART
                      </a> */}
                      <a
                        // href={`/product/${prod.id}`}
                        className="flex h-9 min-w-[36px] w-32 items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                        onClick={()=>router.push(`/product/${prod.id}`)}
                      >
                        BUY
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* pagination Buttons */}
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            {/* <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {currentPage > 1 ? (
                  <li className="mx-1">
                    <a
                      href="#0"
                      className={`flex h-9 min-w-[36px] items-center ${
                        currentPage > 1 ? "disabled" : "disabled"
                      }} justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white`}
                      onClick={prePage}
                      disabled
                    >
                      Prev
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {numbers.map((num, i) => (
                  <li
                    className={`mx-1 ${
                      currentPage === num ? "bg-primary text-white" : ""
                    }  rounded-md`}
                    key={i}
                  >
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition"
                      onClick={() => changeCurrentPage(num)}
                    >
                      {num}
                    </a>
                  </li>
                ))}
                {totalpages > 1 && currentPage < totalpages && (
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                      onClick={nextPage}
                    >
                      Next
                    </a>
                  </li>
                )}
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}


