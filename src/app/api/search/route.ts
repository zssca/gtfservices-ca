import { NextRequest, NextResponse } from "next/server";
import { searchProducts } from "@/lib/data";
import { SearchParams } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const sortParam = searchParams.get("sort");
    const validSortValues = ['name', 'efficiency', 'temperature', 'newest'] as const;
    const sort = sortParam && (validSortValues as readonly string[]).includes(sortParam) 
      ? (sortParam as typeof validSortValues[number]) 
      : undefined;
    
    const params: SearchParams = {
      query: searchParams.get("query") || undefined,
      category: searchParams.get("category") || undefined,
      sort,
      page: parseInt(searchParams.get("page") || "1"),
      limit: parseInt(searchParams.get("limit") || "20"),
    };

    // Parse filters
    const applications = searchParams.get("applications");
    const treatments = searchParams.get("treatments");
    const productTypes = searchParams.get("productTypes");
    const filterMedia = searchParams.get("filterMedia");

    if (applications || treatments || productTypes || filterMedia) {
      params.filters = {
        applications: applications ? applications.split(",") : undefined,
        treatments: treatments ? treatments.split(",") : undefined,
        productTypes: productTypes ? productTypes.split(",") : undefined,
        filterMedia: filterMedia ? filterMedia.split(",") : undefined,
      };
    }

    const results = await searchProducts(params);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Search failed:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}