import React from 'react'

const ProjectCard = ({t}) => {
  return (
    <div
      className="min-w-[320px] max-w-[320px] p-6 rounded-2xl
      bg-white/5 backdrop-blur-lg
      border border-white/10
      hover:border-purple-400
      hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
      transition-all duration-300 cursor-grab bg-cover bg-center h-[50vh] sm:h-[40vh]" style={{ backgroundImage: `url(${t.img})` }}
    >

      <p className="text-gray-300 text-sm leading-relaxed jakarta-sans">
        "{t.text}"
      </p>

    </div>
  )
}

export default ProjectCard