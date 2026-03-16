import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import HomeAbout from "../../assets/HomeAbout.jpg";
import '../../Projects.css'

const projects = [
  { id: 1, title: "WanderLust", image: HomeAbout },
  { id: 2, title: "Tvastih Studio", image: HomeAbout },
  { id: 3, title: "Glass Studio Siliguri", image: HomeAbout },
]

const CARD_WIDTH = 600
const GAP = 40

export default function Projects() {

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const totalDistance = (projects.length - 1) * (CARD_WIDTH + GAP)

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -200])

  return (
    <div id="example">
        <section className="intro-section">
        </section>
        <h1 className="text-3xl md:text-4xl font-semibold mt-4 leading-snug text-gray-800 flex justify-center">Explore Our Successfully Completed Projects</h1>
        <div ref={containerRef} className="scroll-container">

        <div className="sticky-wrapper">

            {/* TITLE */}
            {/* <motion.h1
            style={{ y: titleY }}
            className="text-6xl font-bold mb-20"
            >
            Projects
            </motion.h1> */}

            {/* CARDS */}
            <motion.div
            style={{ x }}
            className="gallery"
            >

            {projects.map(project => (
                <div
                key={project.id}
                className="gallery-item"
                >

                <img
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" /> */}

                <div className="item-content">

                    <span className="item-number">
                    0{project.id}
                    </span>

                    <h2>
                    "Hello"
                    </h2>

                </div>

                </div>
            ))}

            </motion.div>

        </div>

        </div>
    </div>
  )
}