import { ReactNode } from "react"

type CardProps = {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}
