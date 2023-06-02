import Image from "next/image";
const featuresData = [
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/men-clothes.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    ),
    title: "Men Clothes",
    paragraph:
      "Elevate your style with our collection of fashionable and comfortable men's clothing.",
  },
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/women-clothes.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    ),
    title: "Women Clothes",
    paragraph:
      "Discover your perfect look with our selection of trendy and stylish women's clothing, designed to empower and inspire you.",
  },
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/child-clothes.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    ),
    title: "Children Clothes",
    paragraph:
      "Dress your little ones in style with our adorable and comfortable children's clothing, perfect for playtime and beyond.",
  },
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/new-men-shoes.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    ),
    title: "Men Shoes",
    paragraph:
      "Step up your shoe game with our stylish and comfortable collection of men's shoes, designed for both casual and formal occasions.",
  },
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/new-men-shoes.svg"
        alt="Women Shoes"
        width={500}
        height={500}
      />
    ),
    title: "Women Shoes",
    paragraph:
      "Find the perfect pair of shoes to complete any outfit with our extensive collection of women's footwear, designed to keep you stylish and comfortable all day long.",
  },
  {
    id: 1,
    icon: (
      <Image
        // loader={myLoader}
        src="/images/brands/new-child-shoes.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    ),
    title: "Children Shoes",
    paragraph:
      "Let your little ones walk in style with our adorable and durable collection of children's shoes, perfect for all their adventures.",
  },
];
export default featuresData;
