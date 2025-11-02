"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  Shield,
  Truck,
  CreditCard,
  HelpCircle,
  Info,
  FileText,
  Rss,
  MessageSquare
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "New Arrivals", href: "/products?filter=new" },
    { name: "Best Sellers", href: "/products?filter=bestsellers" },
    { name: "Flash Deals", href: "/products?filter=flash-deals" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "Clearance", href: "/products?filter=clearance" }
  ],
  categories: [
    { name: "Electronics", href: "/products?category=electronics" },
    { name: "Fashion", href: "/products?category=fashion" },
    { name: "Home & Garden", href: "/products?category=home" },
    { name: "Sports & Fitness", href: "/products?category=sports" },
    { name: "Toys & Games", href: "/products?category=toys" },
    { name: "Books", href: "/products?category=books" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about#story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Shipping Info", href: "/help/shipping" },
    { name: "Returns", href: "/help/returns" },
    { name: "Size Guide", href: "/help/size-guide" },
    { name: "FAQs", href: "/help/faq" },
    { name: "Track Order", href: "/track-order" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "Refund Policy", href: "/legal/refunds" },
    { name: "Accessibility", href: "/legal/accessibility" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }
];

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $100" },
  { icon: Shield, title: "Secure Payment", description: "100% protected" },
  { icon: CreditCard, title: "Easy Returns", description: "30-day guarantee" },
  { icon: HelpCircle, title: "24/7 Support", description: "Always here to help" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 border-t border-gray-800 dark:border-gray-900">
      {/* Top Features Bar */}
      <div className="border-b border-gray-800 dark:border-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 dark:bg-gray-900/50 border border-gray-700 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white dark:text-gray-100 mb-1">
                      {feature.title}
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold text-white dark:text-white">
                  Hiba Trading
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-sm">
              Your trusted wholesale e-commerce partner. We provide premium products 
              at competitive prices with fast shipping and exceptional service.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-4">
              <h4 className="font-semibold text-white dark:text-gray-100">
                Subscribe to Newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-6"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white dark:text-white text-lg">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white dark:text-white text-lg">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white dark:text-white text-lg">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white dark:text-white text-lg">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-gray-800 dark:border-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                <Mail className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Email</div>
                <a
                  href="mailto:info@hibatrading.com"
                  className="text-sm text-white dark:text-gray-300 hover:text-orange-400 transition-colors"
                >
                  info@hibatrading.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Phone</div>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-white dark:text-gray-300 hover:text-orange-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Address</div>
                <div className="text-sm text-white dark:text-gray-300">
                  123 Trading Street, Commerce City
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-900 bg-gray-950 dark:bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-600">
              © {currentYear} Hiba Trading. All rights reserved.
            </div>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-gray-500 dark:text-gray-600 hover:text-orange-400 dark:hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

