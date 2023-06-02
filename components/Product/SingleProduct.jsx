import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { title, image, paragraph,price,link, author, tags, publishDate } = product;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s">
        <Link href="/" className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={link}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              {title}
            </Link>
          </h3>
          <p className="mb-6 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gray-900 text-xl font-bold">{price}</span>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
              ADD TO CART
            </a>
          </div>
          {/* <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
