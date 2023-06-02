import SingleProduct from "@/components/Product/SingleProduct";
import productData from "@/components/Product/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Product = ({ props }) => {
  return (
    <>
      <Breadcrumb
        pageName="Products"
        description="Our ecommerce store offers a vast selection of fashionable clothing and accessories, curated to keep you on-trend and stylish.
        From the latest runway looks to timeless classics, our collection of fashion products has everything you need to express your personal style."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {productData.map((product) => (
              <div
                key={product.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleProduct product={product} />
              </div>
            ))}
          </div>

          {/* {props.data.map((prod) => {
            return (
              <div
                key={prod.id}
                className="border-gray-200 w-full max-w-sm rounded-lg border">
                <a href="#">
                  <img
                    className="rounded-t-lg p-4"
                    src="/images/blog/jeans.jpg"
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-gray-900 text-2xl font-semibold tracking-tight dark:text-white ">
                      product.name
                    </h5>
                  </a>
                  <div className="mt-2.5 mb-5 flex items-center">
                    <p className="text-gray-900 text-xl  tracking-tight dark:text-white ">
                      Something about product description.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 text-xl font-bold">
                      PKR/-599
                    </span>
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </div>
            );
          })} */}

          {/* pagination Buttons */}

          {/* <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
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
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

// export async function getServerSideProps() {
//   let headers = {
//     Authorization:
//       "Bearer 5a48e6f7f8d404c0973a89dd0b86ba234d24f211e0d0c039a9b4b2f898e4845a42865eef38a2a4a45bfb1b7d2a4ca9f3ef369320209bd2e32c4e8e562a4b339f4fe4bcc09ecfdc6c4b92ab2c05e60582e7b67661448d8802b90d1c60d3fb95efb8dcab6e5c1234f56ebacf1f1034634ee6c67b46f823f8b399b851084771d4f8",
//   };
//   let res = await fetch("http://localhost:1337/api/products?populate=*", {
//     headers: headers,
//   });
//   let products = await res.json();
//   console.log(products);
//   return { props: { products: products } };
// }
export default Product;
