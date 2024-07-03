import { Card } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            {`Discover the wide range of software development services we offer to help you achieve your business goals.`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Custom Software Development" description="We create tailored software solutions to meet your specific business needs." />
          <Card title="Mobile App Development" description="Build robust mobile applications for both Android and iOS platforms." />
          <Card title="Web Application Development" description="Develop scalable and high-performance web applications with the latest technologies." />
          <Card title="E-commerce Solutions" description="Create an engaging and secure e-commerce platform to boost your online sales." />
          <Card title="UI/UX Design" description="Design user-friendly interfaces that provide an exceptional user experience." />
          <Card title="Cloud Computing" description="Leverage cloud technologies to enhance your business operations and scalability." />
          <Card title="Maintenance & Support" description="Ensure your software remains up-to-date and operates smoothly with our support services." />
        </div>
      </div>
    </div>
  )
}
