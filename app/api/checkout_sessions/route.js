import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(req) {
  const stripe = new Stripe(
    "sk_test_51NaPQqGKq3PvPB2LiMPHPUOe1knqtFpIvRIZeBcoz9FdMs4TqgUWMweZ1RaYjGOSqJeL3KeyZ3uBijaNWKGFPf7N00AoFzrxOB"
  );
  console.log("PRINT");
  if (req.method === "POST") {
    let data = await req.json();
    const transformedItems = data.cartItem.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.attributes.title,
          images: [
            item.attributes.image.data[0].attributes &&
              `http://localhost:1337${item.attributes.image.data[0].attributes.url}`,
          ],
        },
        unit_amount: item.attributes.price * 100,
      },
      quantity: item.quantity,
    }));

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: "payment",
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/product`,
      });
      return NextResponse.json(session.url);
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
  }
}
