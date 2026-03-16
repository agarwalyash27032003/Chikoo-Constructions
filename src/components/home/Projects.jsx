import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HomeAbout from "../../assets/HomeAbout.jpg";
import "../../Projects.css";
import Button from "../../ui/Button";

const projects = [
  { id: 1, title: "WanderLust", image: HomeAbout },
  { id: 2, title: "Tvastih Studio", image: HomeAbout },
  { id: 3, title: "Glass Studio Siliguri", image: HomeAbout },
];

const CARD_WIDTH_DESKTOP = 600;
const CARD_WIDTH_MOBILE = 300;
const GAP = 30;

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance =
    (projects.length - 1) * (CARD_WIDTH_DESKTOP + GAP);

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="example">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-16 lg:px-32 gap-4 mb-10">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800 red-hat-display-hfont">
          Explore Our Successfully Completed Projects
        </h1>

        <Button title={"All Projects"} />

      </div>

      {/* Scroll Section */}
      <div ref={containerRef} className="scroll-container">

        <div className="sticky-wrapper">

          <motion.div style={{ x }} className="gallery">

            {projects.map((project) => (
              <div key={project.id} className="gallery-item">

                <img
                  src={project.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="item-content">

                  <span className="item-number">
                    0{project.id}
                  </span>

                  <h2>{project.title}</h2>

                </div>

              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </div>
  );
}