
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
         
      <section className="w-full py-8 md:py-10 lg:py-10 bg-gray-100">
      <div className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-10 ">
                About Our Team
              </div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            
            <div className="space-y-4">
            
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Meet the Experts Behind Your Web Development
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {`Our team of seasoned web developers are passionate about creating exceptional digital experiences. With
                years of industry experience, we're dedicated to delivering high-quality, custom-tailored solutions that
                help our clients succeed online.`}
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <img src="/placeholder.svg" alt="Sofia Davis" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Sofia Davis</h3>
                  <p className="text-gray-500 dark:text-gray-400">Lead Web Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {` With over 8 years of experience, Sofia is our resident expert in front-end development, specializing
                    in responsive design and modern JavaScript frameworks.`}
                  </p>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Front-end Development, React, Vue.js
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <img src="/placeholder.svg" alt="Jackson Lee" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Jackson Lee</h3>
                  <p className="text-gray-500 dark:text-gray-400">Backend Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`Jackson is our backend specialist, with a strong understanding of server-side technologies and
                    database management. He ensures our web applications are secure, scalable, and efficient.`}
                  </p>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Backend Development, Node.js, MongoDB
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <img src="/placeholder.svg" alt="Emily Chen" />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Emily Chen</h3>
                  <p className="text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {` Emily is our in-house design expert, with a keen eye for user experience and a passion for creating
                    visually stunning interfaces. She works closely with our developers to ensure pixel-perfect
                    implementation.`}
                  </p>
                  <div className="flex items-center gap-2">
                    <TypeIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      UI/UX Design, Figma, Adobe Creative Suite
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar>
                  <img src="/placeholder.svg" alt="David Kim" />
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">David Kim</h3>
                  <p className="text-gray-500 dark:text-gray-400">Project Manager</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {` David is our seasoned project manager, ensuring our development process runs smoothly and our
                    clients' needs are met. He's an expert in agile methodologies and client communication.`}
                  </p>
                  <div className="flex items-center gap-2">
                    <ProjectorIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Project Management, Agile, Client Liaison
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CodeIcon(props:any) {
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


function ProjectorIcon(props:any) {
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
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  )
}


function TypeIcon(props:any) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}