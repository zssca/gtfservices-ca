import { NextResponse } from "next/server";
import { productCategories } from '../../../data/categories';

export async function GET() {
  try {
    return NextResponse.json(productCategories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}