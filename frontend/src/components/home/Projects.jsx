import ProjectRow from "../../ui/ProjectRow"
import { NavLink, Link } from "react-router-dom";
import "../../index.css"
import Button from '../../ui/Button'

const projects = [
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    text: "The AI's ability to analyze data and provide insights is unmatched.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/IMG_1733.jpg"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    text: "This saved us a lot of development time. The component works flawlessly.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/6AFA8779-9929-4585.jpg"
  },
  {
    name: "Daniel Carter",
    role: "Web Designer",
    text: "One of the best testimonial components I've used.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/A738FAAA-CA8E-47F7-89A8-104BBF306BE7.JPG"
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    text: "The AI's ability to analyze data and provide insights is unmatched.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/IMG_1733.jpg"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    text: "This saved us a lot of development time. The component works flawlessly.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/6AFA8779-9929-4585.jpg"
  },
  {
    name: "Daniel Carter",
    role: "Web Designer",
    text: "One of the best testimonial components I've used.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/A738FAAA-CA8E-47F7-89A8-104BBF306BE7.JPG"
  },
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

                <ProjectRow
                projects={projects}
                direction="left"
                />

            </div>

        </section>
    </>
  )
}