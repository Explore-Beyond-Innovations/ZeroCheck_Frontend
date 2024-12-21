"use client";

import Link from "next/link"
import { useState } from 'react'
import Image from "next/image";
import {  Menu } from 'lucide-react'




const links = [
    {
      href: "https://discord.gg",
      src: "/images/Discord.png",
      alt: "Discord",
      width: 25,
      height: 25,
      className: "",
    },
    {
      href: "https://t.me",
      src: "/images/Telegram.png",
      alt: "Telegram",
      width: 25,
      height: 25,
      className: "",
    },
    {
      href: "#",
      src: "/images/logoWithText.png",
      alt: "Logo",
      width: 90,
      height: 90,
      className: "h-5 w-16",
    },
  ];

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/product", text: "Product" },
    { href: "/blog", text: "Blog" },
  ];





export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (


    <main className="min-h-screen bg-white">
      {/* Navigation */}
<header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
  <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
    <Link href="/" className="text-2xl xl:text-3xl font-semibold text-black">
      ZeroCheck
    </Link>
    
    <div className="hidden md:flex gap-8">
    {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="text-lg font-medium hover:text-gray-600">
          {link.text}
        </Link>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <div className=" items-center gap-6 flex">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900">
          <Image
            src={link.src}
            alt={link.alt}
            width={link.width}
            height={link.height}
            className={link.className}
          />
        </Link>
      ))}
      </div>

      <button  className="bg-black py-3 px-2 md:py-5 md:px-7 md:ml-9 text-xs tracking-wide rounded-md font-medium text-white hover:bg-gray-900">
        Get Started
      </button>
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>
    </div>
  </nav>

  {/* Mobile menu */}
  {mobileMenuOpen && (
    <div className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="text-lg font-medium hover:text-gray-600">
          {link.text}
        </Link>
      ))}
      </div>
    </div>
  )}
</header>

      {/* Hero Section */}
      <div className="">
      <div className=" heroBg container relative mx-auto px-4 pt-20 pb-28 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="relative">
              <h1 className="text-3xl mb-4 font-bold sm:text-5xl lg:text-5xl">
                Redefining Event {" "}
              </h1>
                <h1 className=" text-3xl mb-4 font-bold sm:text-5xl lg:text-5xl">Participation with{" "}</h1>
                <h1 className="text-3xl font-bold sm:text-5xl lg:text-5xl ">Blockchain Security</h1>
            </div>
            <p className="mt-4 text-md text-black">
              Shaping the Future of De-Fi Together.
            </p>
            <div className="mt-8">
              <button  className="text-sm bg-black font-semibold rounded-2xl text-white px-8 py-4 shadow-sm">
                Get Started
              </button>
            </div>

            {/* Stats Section */}
            <div className=" mt-10 flex gap-2 text-center">
              <div className="border-r-2 border-black pr-4 ">
                <div className="text-2xl font-bold">10M</div>
                <div className="text-xs text-black mt-3 text-center">Transactions</div>
              </div>
              <div className="border-r-2 border-black px-4">
                <div className="text-2xl font-bold">100K</div>
                <div className="text-xs text-black mt-3">Active Users</div>
              </div>
              <div className="px-4">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-black mt-3 text-center">Finance Integrations</div>
              </div>
            </div>
          </div>


          {/* Gear Img */}
          <div className="relative flex items-center justify-center lg:justify-end">
          <Image
                  src="/images/engineering.png"
                  alt="User"
                  width={790}
                  height={790}
                  className="h-[400px] w-[400px] text-black lg:h-[600px] lg:w-[600px]"
                  /> 

          </div>
        </div>
      </div>
      </div>
       {/* Bacground linear gradient */}
      {/* <Image src="/images/herobgGradient1.png" alt="User"  width={790}  height={790}
                  className="absolute -top-28 md:top-[2px] left-12 rotate-6  h-[500px] w-[400px]"
                  /> 

        <Image src="/images/herobgGradient2.png" alt="User" width={790} height={790}
                  className=" absolute  md:-bottom-28 bottom-16  md:left-28  h-[400px] w-[400px]"
                  />  */}
    </main>
  )
}

