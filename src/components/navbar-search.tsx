"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";

export function NavbarSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        performSearch(query.trim());
      } else {
        setResults([]);
        setTotalResults(0);
        setOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        query: searchQuery,
        limit: "8" // Show only top 8 results in dropdown
      });
      
      const response = await fetch(`/api/search?${params.toString()}`);
      if (!response.ok) throw new Error("Search failed");
      
      const data = await response.json();
      setResults(data.products);
      setTotalResults(data.total);
      setOpen(true);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim()) {
      // Navigate to search results page
      setOpen(false);
      window.location.href = `/polyester-air-filter-cartridge?search=${encodeURIComponent(query.trim())}`;
    } else if (e.key === "Escape") {
      setOpen(false);
      searchRef.current?.blur();
    } else if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setTotalResults(0);
    setOpen(false);
  };

  const handleProductClick = () => {
    clearSearch();
  };

  return (
    <div className="relative w-full md:w-auto">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={searchRef}
              type="search"
              placeholder="Search products..."
              className="w-full pl-8 md:w-[280px] lg:w-[300px]"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {isLoading && (
              <div className="absolute right-2.5 top-2.5">
                <div className="h-4 w-4 bg-muted-foreground/20 rounded animate-pulse" />
              </div>
            )}
          </div>
        </PopoverTrigger>
        
        {(results.length > 0 || (query && !isLoading)) && (
          <PopoverContent 
            className="w-[calc(100vw-2rem)] md:w-[380px] lg:w-[400px] p-0" 
            align="start"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command>
              <CommandList>
                {results.length === 0 && query && !isLoading && (
                  <CommandEmpty>
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        No products found for &ldquo;{query}&rdquo;
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/polyester-air-filter-cartridge">
                          Browse all products
                        </Link>
                      </Button>
                    </div>
                  </CommandEmpty>
                )}

                {results.length > 0 && (
                  <>
                    <CommandGroup heading={`Products (${totalResults} found)`}>
                      {results.map((product) => (
                        <CommandItem key={product.id} asChild>
                          <Link
                            href={`/${product.category}/${product.id}`}
                            className="flex items-start space-x-3 p-3 cursor-pointer"
                            onClick={handleProductClick}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="text-sm font-medium line-clamp-1">
                                  {product.name}
                                </h4>
                                <Badge variant="outline" className="text-xs">
                                  {product.brand}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {product.applications.slice(0, 2).map((app) => (
                                  <Badge key={app} variant="secondary" className="text-xs">
                                    {app}
                                  </Badge>
                                ))}
                                {product.applications.length > 2 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{product.applications.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                          </Link>
                        </CommandItem>
                      ))}
                    </CommandGroup>

                    {totalResults > results.length && (
                      <div className="border-t p-3">
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <Link 
                            href={`/polyester-air-filter-cartridge?search=${encodeURIComponent(query)}`}
                            onClick={clearSearch}
                          >
                            View all {totalResults} results
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}