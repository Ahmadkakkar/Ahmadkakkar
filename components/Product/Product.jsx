import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productData from "./productData";

const Product = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Sales.%"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {productData.map((product) => (
            <div key={product.id} className="w-full">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
