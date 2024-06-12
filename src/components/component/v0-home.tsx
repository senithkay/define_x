
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"

export function V0Home() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <CodeIcon className="h-6 w-6"/>
            <span className="text-xl font-bold">Acme Solutions</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Services
            </Link>
            <Link className="hover:underline" href="#">
              Portfolio
            </Link>
            <Link className="hover:underline" href="#">
              Team
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <Button>Get a Quote</Button>
        </header>
        <main className="flex-1">
          <section
              className="bg-gray-900 text-white py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <h1 className="text-4xl font-bold">Innovative Software Solutions</h1>
              <p className="text-gray-300">
                Acme Solutions provides cutting-edge software solutions to help businesses thrive in the digital age.
              </p>
              <div className="flex gap-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <img
                alt="Hero Image"
                className="rounded-lg shadow-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width={500}
            />
          </section>
          <section className="py-20 px-6 md:px-12" id="services">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-gray-600">
                Acme Solutions offers a wide range of software services to meet your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <CodeIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Custom Development</h3>
                  <p className="text-gray-600 mt-2">
                    Our team of experienced developers can create custom software solutions tailored to your specific
                    requirements.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <TabletsIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Web Development</h3>
                  <p className="text-gray-600 mt-2">
                    We specialize in building responsive and user-friendly websites that drive business growth.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <DatabaseIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Database Solutions</h3>
                  <p className="text-gray-600 mt-2">
                    Our database experts can help you design, implement, and optimize your data infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 py-20 px-6 md:px-12" id="portfolio">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Our Portfolio</h2>
              <p className="text-gray-600">
                {' Check out some of our recent projects and the impact we\'ve made for our clients.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                      alt="Project 1"
                      className="w-full h-48 object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p className="text-gray-600 mt-2">A custom e-commerce platform that increased sales by 30%.</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                      alt="Project 2"
                      className="w-full h-48 object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p className="text-gray-600 mt-2">{'A mobile app that streamlined the client\'s internal operations.'}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                      alt="Project 3"
                      className="w-full h-48 object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                      width={400}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p className="text-gray-600 mt-2">
                      A data analytics platform that provided valuable insights for the client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 px-6 md:px-12" id="team">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="text-gray-600">Meet the talented individuals who make Acme Solutions a success.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <Avatar>
                    <AvatarImage src="/team-member-1.jpg"/>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">John Doe</h3>
                  <p className="text-gray-600 mt-2">CEO</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <Avatar>
                    <AvatarImage src="/team-member-2.jpg"/>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
                  <p className="text-gray-600 mt-2">CTO</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <Avatar>
                    <AvatarImage src="/team-member-3.jpg"/>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mt-4">Michael Kim</h3>
                  <p className="text-gray-600 mt-2">Lead Developer</p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-900 text-white py-20 px-6 md:px-12" id="contact">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-gray-300">Get in touch with us to discuss your software needs.</p>
              <form className="bg-white rounded-lg shadow-lg p-8 text-gray-900 max-w-md mx-auto space-y-4">
                <Input className="w-full" placeholder="Name" type="text"/>
                <Input className="w-full" placeholder="Email" type="email"/>
                <Textarea className="w-full" placeholder="Message"/>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </section>
        </main>
        <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 flex items-center justify-between">
          <p>© 2024 Acme Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
        </footer>
      </div>
  )
}

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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function TabletsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  )
}
