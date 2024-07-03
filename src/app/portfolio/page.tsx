import { ProjectCard } from "@/components/ui/projectcard";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce website with a custom shopping cart, user authentication, and admin panel.",
      imageUrl: "path/to/ecommerce.jpg",
      projectUrl: "https://example.com/ecommerce"
    },
    {
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking app for managing accounts, transfers, and payments.",
      imageUrl: "path/to/mobile-banking.jpg",
      projectUrl: "https://example.com/mobile-banking"
    },
    {
      title: "Social Networking Platform",
      description: "A scalable social networking platform with real-time chat, friend lists, and activity feeds.",
      imageUrl: "path/to/social-network.jpg",
      projectUrl: "https://example.com/social-network"
    },
    // Add more projects as needed
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Portfolio</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            {`Take a look at some of the amazing projects we've worked on.`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
