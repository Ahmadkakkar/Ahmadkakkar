import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(
    "sk_test_51NaPQqGKq3PvPB2LiMPHPUOe1knqtFpIvRIZeBcoz9FdMs4TqgUWMweZ1RaYjGOSqJeL3KeyZ3uBijaNWKGFPf7N00AoFzrxOB"
  );
  const prices = await stripe.prices.list({
    limit: 4,
  });

  return NextResponse.json(prices.data.reverse());
}
