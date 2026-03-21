import ProjectRow from "../../ui/ProjectRow"
import { NavLink, Link } from "react-router-dom";
import "../../index.css"
import Button from '../../ui/Button'

const projects = [
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    text: "The AI's ability to analyze data and provide insights is unmatched.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Roof%20cleaning.png?updatedAt=1773682262655"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    text: "This saved us a lot of development time. The component works flawlessly.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Scaffolding.jpg?updatedAt=1773682257437"
  },
  {
    name: "Daniel Carter",
    role: "Web Designer",
    text: "One of the best testimonial components I've used.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Renovations%20&%20Refurbishments.jpg?updatedAt=1773682256272"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    text: "This tool saved me hours of work. The automation features are amazing.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg?updatedAt=1773682257190"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    text: "This tool saved me hours of work. The automation features are amazing.",
    img: "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg?updatedAt=1773682257190"
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