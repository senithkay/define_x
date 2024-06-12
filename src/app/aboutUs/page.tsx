import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function aboutUs() {
  return (
    <div className="w-full bg-gray-100  py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Our Web Development Agency
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of passionate web developers dedicated to crafting exceptional digital experiences. With
              years of expertise, we specialize in creating custom, responsive websites that not only look great but
              also deliver measurable results for our clients.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to empower businesses of all sizes to establish a strong online presence and achieve their
              digital goals. We believe in the power of collaboration, innovation, and a relentless focus on quality.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">Our Team</h3>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the talented individuals who make up our web development agency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">John Doe</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Founder &amp; CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Jane Smith</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Lead Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" />
                  <AvatarFallback>KL</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Kate Lee</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-lg font-medium">Michael Roe</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold">Our Services</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive suite of web development services to help your business thrive online. From
              custom website design and development to ongoing maintenance and support, we've got you covered.
            </p>
            <ul className="mt-6 grid gap-4">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Web Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Website Maintenance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>E-commerce Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Search Engine Optimization</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Our Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 lg:mt-16">
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let our team of web development experts help you build a stunning, high-performing website that drives
            results for your business.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Get a Quote
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props:any){
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}