
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"

export function V0Landing() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <CodeIcon className="h-6 w-6"/>
            <span className="text-xl font-bold">DefineX</span>
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
        <main className="flex-1">
          <section
              className="bg-gray-900 text-white py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <h1 className="text-4xl font-bold">Innovative Software Solutions</h1>
              <p className="text-gray-300">
                DefineX provides cutting-edge software solutions to help businesses thrive in the digital age.
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
                DefineX offers a wide range of software services to meet your business needs.
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
                {'Check out some of our recent projects and the impact we\'ve made for our clients.'}
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
                    <p className="text-gray-600 mt-2">{'A mobile app that streamlined the client\'s internal\n' +
                        '                      operations.'}</p>
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
              <p className="text-gray-600">Meet the talented individuals who make DefineX a success.</p>
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
          <section className="bg-gray-100 py-20 px-6 md:px-12" id="testimonials">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-gray-600">Hear from our satisfied clients about their experience with DefineX.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/client-1.jpg"/>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-gray-600">CEO, DefineX</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    {' "DefineX has been a game-changer for our business. Their team\\n delivered a custom solution\n' +
                        '                  that exceeded our expectations and\\n helped us streamline our operations."'}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/client-2.jpg"/>
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Jane Smith</h3>
                      <p className="text-gray-600">CTO, DefineX</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    {' "I\'ve worked with several software companies, but DefineX\\n stands out for their exceptional\n' +
                        '                  customer service and technical\\n expertise. They truly understand our business needs."'}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/client-3.jpg"/>
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Michael Kim</h3>
                      <p className="text-gray-600">CIO, DefineX</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    {'  "DefineX has been a true partner in our digital transformation\\n journey. Their team\'s\n' +
                        '                  dedication and expertise have been invaluable\\n in helping us achieve our business goals."'}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 px-6 md:px-12" id="features">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">Key Features</h2>
              <p className="text-gray-600">Discover the key features that make DefineX stand out.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <RocketIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Rapid Deployment</h3>
                  <p className="text-gray-600 mt-2">
                    Our streamlined deployment process ensures your software is up and running in no time.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <ShieldIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Robust Security</h3>
                  <p className="text-gray-600 mt-2">
                    We prioritize the security of your data with advanced encryption and access controls.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <ScalingIcon className="h-8 w-8 text-gray-900"/>
                  <h3 className="text-xl font-bold mt-4">Scalable Solutions</h3>
                  <p className="text-gray-600 mt-2">
                    Our software solutions are designed to scale with your business, ensuring they grow alongside your
                    needs.
                  </p>
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
          <section className="py-20 px-6 md:px-12" id="about">
            <div className="max-w-5xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-bold">About DefineX</h2>
              <p className="text-gray-600">
                Learn more about our company and our mission to provide innovative software solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-gray-600 mt-2">
                    At DefineX, our mission is to empower businesses with cutting-edge software solutions that
                    drive growth and innovation. We are dedicated to delivering exceptional results and building long
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-left">
                  <h3 className="text-xl font-bold">Our Goal</h3>
                  <p className="text-gray-600 mt-2">
                    At DefineX, our mission is to empower businesses with cutting-edge software solutions that
                    drive growth and innovation. We are dedicated to delivering exceptional results and building long
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
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
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
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


function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ScalingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}


function ShieldIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
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
