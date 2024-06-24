
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Get in Touch</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            {` Need a custom website or web application built? Let's chat about your project.`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
              </div>
              <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-700 transition-colors">Send Message</button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <div className="space-y-1 text-gray-500 dark:text-gray-400">
                <p>123 Main St, Anytown USA</p>
                <p>info@freelancerwebdev.com</p>
                <p>555-555-5555</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Our Services</h2>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                <li>Custom Website Design</li>
                <li>Web Application Development</li>
                <li>E-commerce Solutions</li>
                <li>Content Management Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}