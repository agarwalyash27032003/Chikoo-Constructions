import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    text: "We begin by understanding your vision, needs, and budget through a detailed discussion.",
  },
  {
    title: "Site Visit",
    text: "Our team visits the property to assess the space, gather measurements, and evaluate feasibility.",
  },
  {
    title: "Quote & Approval",
    text: "You receive a transparent, itemized quote. Once approved, we finalize timelines and materials.",
  },
  {
    title: "Construction Phase",
    text: "Skilled professionals bring your project to life with regular updates and quality checks.",
  },
  {
    title: "Final Handover",
    text: "After inspection and finishing touches, we hand over your completed space ready to enjoy.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-[#e87829] uppercase font-semibold tracking-widest">
          Project Journey
        </p>

        <h2 className="text-5xl font-bold mt-3">
          How We Work
        </h2>

      </div>

      <div className="relative max-w-4xl mx-auto mt-20">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-[#8f2269]/40"></div>

        <div className="space-y-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center"
            >

              {/* Step Circle */}
              <div className="w-12 h-12 rounded-full bg-[#e87829] text-white flex items-center justify-center font-bold z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="mt-6 bg-gradient-to-r from-[#8f2269] to-[#e87829] text-white p-6 rounded-lg shadow-lg max-w-lg text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-white/90 leading-relaxed">
                  {step.text}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}