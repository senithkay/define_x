import React from 'react'
import { JSX, SVGProps } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <div>
           <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <span className="text-xl font-bold company-name text-[30px]">{'<> T minus 4'}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Services
            </Link>
            <Link className="hover:underline" href="#">
              Portfolio
            </Link>
            <Link className="hover:underline" href="../team">
              Team
            </Link>
            <Link className="hover:underline" href="">
              Features
            </Link>
            <Link className="hover:underline" href="../contactUs">
              Contact
            </Link>
            <Link className="hover:underline" href="../aboutUs">
              About
            </Link>
          </nav>
          <Button>Get a Quote</Button>
        </header>
    </div>
  )
}

export default Header

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
    )
  }