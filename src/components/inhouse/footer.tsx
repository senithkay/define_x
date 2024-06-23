import React from 'react'
import Link from 'next/link'


function Footer() {
  return (
    <div>
         <footer className="bg-gray-100 p-6 md:py-12 w-full flex justify-center">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="#" prefetch={false}>
            About Us
          </Link>
          <Link href="#" prefetch={false}>
            Our Team
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
          <Link href="#" prefetch={false}>
            News
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Services</h3>
          <Link href="#" prefetch={false}>
            Web Development
          </Link>
          <Link href="#" prefetch={false}>
            Mobile App Development
          </Link>
          <Link href="#" prefetch={false}>
            Enterprise Software
          </Link>
          <Link href="#" prefetch={false}>
            Cloud Integration
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            Case Studies
          </Link>
          <Link href="#" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" prefetch={false}>
            FAQs
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" prefetch={false}>
            Support
          </Link>
          <Link href="#" prefetch={false}>
            Sales
          </Link>
          <Link href="#" prefetch={false}>
            Partnerships
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer