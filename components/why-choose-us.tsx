import { CheckCircle, Award, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Our team of skilled professionals delivers exceptional quality in every project.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and ensure projects are completed within agreed timelines.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your vision is our priority. We work closely with you throughout the process.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks ensure every detail meets our high standards.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MK Engineering?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              With over 15 years of experience in construction and interior design, we bring expertise, creativity, and
              reliability to every project.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url(/placeholder.svg?height=600&width=600)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
