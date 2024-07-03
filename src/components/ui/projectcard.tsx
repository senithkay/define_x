import { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
}
