"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  User,
  ChevronDown,
  X,
  LogOut,
  Settings,
  Package,
  Star,
  Grid3x3,
  Box,
  Home,
  Smartphone,
  Camera,
  Shirt,
  Book,
  Wrench,
  Gamepad2,
  Building2,
  Layers,
  ChevronRight
} from "lucide-react";
import { useMemo, useState, useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

// Categories data
const categories = [
  { name: "Electronics", icon: Smartphone, count: 1247, subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories"] },
  { name: "Home & Kitchen", icon: Home, count: 892, subcategories: ["Furniture", "Appliances", "Decor", "Storage"] },
  { name: "Automotive", icon: Box, count: 543, subcategories: ["Parts", "Accessories", "Tools", "Maintenance"] },
  { name: "Fashion", icon: Shirt, count: 2134, subcategories: ["Men's Wear", "Women's Wear", "Shoes", "Accessories"] },
  { name: "Sports", icon: Gamepad2, count: 678, subcategories: ["Fitness", "Outdoor", "Water Sports", "Equipment"] },
  { name: "Books", icon: Book, count: 3456, subcategories: ["Fiction", "Non-Fiction", "Textbooks", "E-books"] },
  { name: "Gaming", icon: Gamepad2, count: 789, subcategories: ["Consoles", "Games", "Accessories", "Merch"] },
  { name: "Photography", icon: Camera, count: 445, subcategories: ["Cameras", "Lenses", "Accessories", "Lighting"] },
  { name: "Tools & Hardware", icon: Wrench, count: 912, subcategories: ["Power Tools", "Hand Tools", "Hardware", "Safety"] },
  { name: "Beauty & Personal", icon: Grid3x3, count: 1234, subcategories: ["Skincare", "Makeup", "Fragrance", "Bath"] },
];

// Trending searches
const trendingSearches = [
  "Smart TV 55 inch",
  "Wireless Earbuds",
  "Laptop Gaming",
  "Smart Watch",
  "Air Fryer",
  "Drone Camera",
];

// Recent searches
const recentSearches = [
  "Laptop",
  "Smartphone",
  "Headphones",
];

// Quick links
const quickLinks = [
  { name: "Customer Support", icon: Layers, link: "/support" },
  { name: "Track Order", icon: Package, link: "/account/orders" },
];

export function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const categoriesRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const isOnSearchFocus = useMemo(() => pathname?.startsWith("/search"), [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    return trendingSearches
      .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 6);
  }, [searchQuery]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gray-900 dark:bg-gray-950 backdrop-blur-md border-b border-gray-800 dark:border-gray-700 shadow-lg">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 shrink-0 group"
          >
            <div className="order-1 sm:order-2">
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-lg sm:text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent tracking-tight">HIBA</span>
                <span className="font-bold text-lg sm:text-2xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent tracking-tight">TRADING</span>
              </div>
              <div className="hidden sm:block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
             Wholesale and Retail
              </div>
            </div>
            <div className="relative flex size-10 sm:size-16 items-center justify-center order-2 sm:order-1">
              <Image
                src="/hiba-trading-logo.png"
                alt="Hiba Trading logo"
                width={40}
                height={40}
                className="sm:w-16 sm:h-16 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Categories Menu Button */}
          <div className="relative" ref={categoriesRef}>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex hover:bg-gray-800 text-gray-300 hover:text-orange-400 transition-colors rounded-lg"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <Menu className="size-5" />
            </Button>

            {/* Categories Dropdown */}
            {isCategoriesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[800px] bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.name}
                        href={`/category/${category.name.toLowerCase()}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 border border-transparent hover:border-orange-600 transition-all group"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg bg-orange-900/30 border border-orange-800">
                          <Icon className="size-5 text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white mb-1 truncate group-hover:text-orange-400 transition-colors">
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {category.count.toLocaleString()} products
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Search Bar - Centered */}
          <div className="relative hidden flex-1 items-center md:flex max-w-2xl mx-4" ref={searchRef}>
            <div className="relative flex w-full items-center">
              <div className="relative flex w-full items-center bg-gray-800 rounded-xl border-2 border-gray-700 focus-within:border-orange-500 transition-colors shadow-sm">
                <Search className="size-4 text-gray-400 ml-3" />
                <Input
                  type="search"
                  placeholder="Search products, brands and more..."
                  className="h-10 border-0 focus-visible:ring-0 bg-transparent placeholder:text-gray-500 text-gray-200"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value) {
                      setIsSearchOpen(true);
                    }
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                />
                <Button 
                  className="h-10 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 mr-1 rounded-r-lg"
                  aria-label="Search"
                >
                  <Search className="size-4" />
                </Button>
              </div>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden max-h-[500px] overflow-y-auto">
                  {/* Recent Searches */}
                  {!searchQuery && (
                    <div className="p-4 border-b border-gray-800">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Recent Searches
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search) => (
                          <button
                            key={search}
                            className="inline-flex items-center px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-medium text-gray-300 transition-colors"
                            onClick={() => {
                              setSearchQuery(search);
                              setIsSearchOpen(false);
                            }}
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  {!searchQuery && (
                    <div className="p-4 border-b border-gray-800">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Trending
                      </div>
                      <div className="space-y-1">
                        {trendingSearches.map((search) => (
                          <button
                            key={search}
                            className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-800 text-left transition-colors text-sm text-gray-300"
                            onClick={() => {
                              setSearchQuery(search);
                              setIsSearchOpen(false);
                            }}
                          >
                            <Search className="size-4 mr-2 text-gray-400" />
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Search Results */}
                  {searchQuery && (
                    <div className="p-4">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Suggestions
                      </div>
                      {filteredSuggestions.length > 0 ? (
                        <div className="space-y-1">
                          {filteredSuggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-800 text-left transition-colors text-sm text-gray-300"
                              onClick={() => {
                                setSearchQuery(suggestion);
                                setIsSearchOpen(false);
                              }}
                            >
                              <Search className="size-4 mr-2 text-gray-400" />
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 text-center text-gray-400">
                          <Search className="size-10 mx-auto mb-3 opacity-50" />
                          <p className="text-sm">No suggestions found</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              aria-label="Open search"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Search className="size-5" />
            </Button>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-300 hover:text-white hover:bg-gray-800"
                aria-label="View cart"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="size-5" />
                <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-xs font-bold text-white shadow-md">
                  0
                </span>
              </Button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-white">Shopping Cart</h3>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <X className="size-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="text-center py-12">
                    <ShoppingCart className="size-16 mx-auto mb-4 text-gray-700" />
                    <p className="text-gray-400 mb-4">Your cart is empty</p>
                    <Link href="/products">
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md">
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Account */}
            <div className="relative hidden md:flex items-center" ref={accountRef}>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Account"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
              >
                <User className="size-5" />
              </Button>

              {/* Account Dropdown */}
              {isAccountOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden">
                  {/* Sign In / Register Section */}
                  <div className="p-4 bg-gradient-to-br from-orange-950/40 to-red-950/40 border-b border-orange-900/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-red-600">
                          <User className="size-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Welcome</div>
                          <div className="text-xs text-gray-400">Guest User</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href="/auth/signin" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm font-bold shadow-lg uppercase tracking-wide transition-all hover:scale-105" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}>
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth/register" className="flex-1">
                        <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white hover:border-orange-500 text-sm font-semibold uppercase tracking-wide transition-all hover:scale-105" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}>
                          Register
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link href="/account/dashboard">
                      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-left transition-colors">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-gray-800">
                          <User className="size-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">My Account</div>
                          <div className="text-xs text-gray-400">Profile settings</div>
                        </div>
                      </button>
                    </Link>
                    <Link href="/account/orders">
                      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-left transition-colors">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-gray-800">
                          <Package className="size-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">My Orders</div>
                          <div className="text-xs text-gray-400">Track your orders</div>
                        </div>
                      </button>
                    </Link>
                    <Link href="/account/wishlist">
                      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-left transition-colors">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-gray-800">
                          <Star className="size-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">Wishlist</div>
                          <div className="text-xs text-gray-400">Your saved items</div>
                        </div>
                      </button>
                    </Link>
                    <div className="border-t border-gray-800 my-2" />
                    <Link href="/settings">
                      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-left transition-colors">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-gray-800">
                          <Settings className="size-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">Settings</div>
                          <div className="text-xs text-gray-400">Preferences</div>
                        </div>
                      </button>
                    </Link>
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-950/30 text-left transition-colors text-red-400 hover:text-red-300">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-red-950/50">
                        <LogOut className="size-4" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Logout</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="size-5" />
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent tracking-tight">HIBA</span>
                    <span className="font-bold text-xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent tracking-tight">TRADING</span>
                  </div>
                </div>
                <div className="flex size-12 items-center justify-center">
                  <Image
                    src="/hiba-trading-logo.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300"
                >
                  <X className="size-6" />
                </button>
              </div>
            </div>

            {/* Search - Full Width */}
            <div className="p-4">
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg border-2 border-gray-700 px-3">
                <Search className="size-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products, brands and more..."
                  className="border-0 bg-transparent focus-visible:ring-0 h-12 text-base text-gray-200 placeholder:text-gray-500"
                />
                <Button 
                  className="h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6"
                  aria-label="Search"
                >
                  <Search className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
