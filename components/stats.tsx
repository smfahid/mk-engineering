import { TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across construction and interior design",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    number: "100+",
    label: "Satisfied Clients",
    description: "Happy clients who trust us with their dream projects",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    number: "15+",
    label: "Years Experience",
    description: "Decades of expertise in construction and design industry",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock support for all your project needs",
    color: "from-pink-500 to-rose-500",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the scale of our success and the trust our clients place in us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
