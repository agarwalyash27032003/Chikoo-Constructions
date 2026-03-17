import { useState } from "react"
import ProjectCard from "./ProjectCard"

export default function ProjectRow({ projects, direction }) {

  const [paused, setPaused] = useState(false)

  const items = [...projects, ...projects]

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >

      <div
        className={`flex gap-6 w-max ${
          direction === "left"
            ? "animate-scroll-left"
            : "animate-scroll-right"
        }`}
        style={{
          animationPlayState: paused ? "paused" : "running"
        }}
      >

        {items.map((t, i) => (
          <ProjectCard key={i} t={t} />
        ))}

      </div>

    </div>
  )
}