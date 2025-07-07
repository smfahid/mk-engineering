import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Consultation & Planning",
    description: "We start with understanding your vision, requirements, and budget to create a comprehensive plan.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "02",
    title: "Design & Development",
    description: "Our expert team creates detailed designs and blueprints tailored to your specific needs.",
    color: "from-purple-500 to-pink-600",
  },
  {
    step: "03",
    title: "Construction & Execution",
    description: "Professional execution with quality materials, skilled craftsmen, and regular progress updates.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "04",
    title: "Completion & Handover",
    description: "Final inspection, quality assurance, and seamless handover of your completed project.",
    color: "from-orange-500 to-red-600",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A streamlined approach that ensures{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              quality results
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
              client satisfaction
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
              )}

              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg text-white font-bold text-xl`}
                >
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>

                <div className="flex items-center text-sm text-blue-300 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Quality Assured
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
