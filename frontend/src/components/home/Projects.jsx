import ProjectRow from "../../ui/ProjectRow"
import { Link } from "react-router-dom";
import "../../index.css"
import Button from '../../ui/Button'

const projects = [
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/IMG_1733.jpg" },
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/6AFA8779-9929-4585.jpg" },
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/A738FAAA-CA8E-47F7-89A8-104BBF306BE7.JPG" },
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/B3DDA769-320F-4A5A-B910-9426C44A8E84.JPG?updatedAt=1777021016047" },
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/PHOTO-2026-01-31-22-07-20.jpg?updatedAt=1777021015832" },
  { img: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto,w-600/Chikoo%20Constructions/PHOTO-2026-04-09-14-13-26.jpg?updatedAt=1777021015925" },
]

export default function Projects() {
  return (
    <>
      <div className="flex flex-col mt-16 md:flex-row md:justify-between gap-6 px-6 md:px-16 lg:px-32">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800 red-hat-display-hfont">
          Explore Our Successfully Completed Projects
        </h1>
        <Link to="/projects">
          <Button title={"All Projects"} />
        </Link>
      </div>
      <section className="lg:py-32 py-16">
        <div className="space-y-8 relative testimonial-mask">
          <ProjectRow projects={projects} direction="left" />
        </div>
      </section>
    </>
  )
}