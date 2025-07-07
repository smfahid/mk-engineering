"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Construction Manager",
    department: "Construction",
    location: "On-site",
    type: "Full-time",
    experience: "5+ years",
    salary: "$80,000 - $120,000",
    description: "Lead construction projects from planning to completion, manage teams, and ensure quality standards.",
    requirements: [
      "Bachelor's degree in Construction Management or related field",
      "5+ years of construction management experience",
      "Strong leadership and communication skills",
      "Knowledge of building codes and safety regulations",
      "PMP certification preferred",
    ],
    responsibilities: [
      "Oversee construction projects from start to finish",
      "Manage project timelines and budgets",
      "Coordinate with architects, engineers, and subcontractors",
      "Ensure compliance with safety regulations",
      "Conduct regular site inspections",
    ],
  },
  {
    id: 2,
    title: "Interior Designer",
    department: "Interior Design",
    location: "Office/Client Sites",
    type: "Full-time",
    experience: "3+ years",
    salary: "$55,000 - $75,000",
    description: "Create innovative interior design solutions for residential and commercial projects.",
    requirements: [
      "Bachelor's degree in Interior Design",
      "3+ years of interior design experience",
      "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite",
      "Strong creative and visualization skills",
      "NCIDQ certification preferred",
    ],
    responsibilities: [
      "Develop design concepts and presentations",
      "Create detailed drawings and specifications",
      "Select materials, furniture, and fixtures",
      "Collaborate with clients and project teams",
      "Manage design projects from concept to completion",
    ],
  },
  {
    id: 3,
    title: "Project Architect",
    department: "Architecture",
    location: "Office",
    type: "Full-time",
    experience: "4+ years",
    salary: "$70,000 - $95,000",
    description: "Design and develop architectural plans for construction and renovation projects.",
    requirements: [
      "Bachelor's or Master's degree in Architecture",
      "4+ years of architectural experience",
      "Licensed architect preferred",
      "Proficiency in Revit, AutoCAD, and 3D modeling software",
      "Strong design and technical skills",
    ],
    responsibilities: [
      "Develop architectural designs and drawings",
      "Coordinate with engineering teams",
      "Ensure compliance with building codes",
      "Participate in client meetings and presentations",
      "Review and approve construction documents",
    ],
  },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health insurance",
  "Retirement savings plan with company matching",
  "Professional development opportunities",
  "Flexible work arrangements",
  "Paid time off and holidays",
  "Career advancement opportunities",
  "Team building activities and events",
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  })

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", applicationData)
  }

  const handleInputChange = (field: string, value: string) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
  }

  const JobCard = ({ job }: { job: any }) => (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-3 text-gray-900">{job.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">{job.department}</Badge>
              <Badge variant="outline" className="border-gray-300">
                {job.type}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-600 leading-relaxed">{job.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span className="font-medium">{job.location}</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            <span className="font-medium">{job.experience}</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
            <span className="font-medium">{job.salary}</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
            <span className="font-medium">{job.type}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                onClick={() => setSelectedJob(job)}
              >
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gray-900">{job.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">{job.department}</Badge>
                  <Badge variant="outline">{job.type}</Badge>
                  <Badge variant="outline">{job.location}</Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Job Description</h3>
                  <p className="text-gray-600">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req: string, index: number) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.responsibilities.map((resp: string, index: number) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">Experience:</span>
                    <p className="text-gray-600">{job.experience}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Salary:</span>
                    <p className="text-gray-600">{job.salary}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleInputChange("position", job.title)}
              >
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-xl text-gray-900">Apply for {job.title}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="app-name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="app-name"
                      value={applicationData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="app-email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="app-phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="app-phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-experience" className="text-gray-700 font-medium">
                      Years of Experience
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="app-cover" className="text-gray-700 font-medium">
                    Cover Letter *
                  </Label>
                  <Textarea
                    id="app-cover"
                    rows={5}
                    value={applicationData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    placeholder="Tell us why you're interested in this position..."
                    className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-gray-700 font-medium">
                    Resume/CV *
                  </Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Please upload your resume in PDF, DOC, or DOCX format (max 5MB)
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
                >
                  Submit Application
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Join Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build your career with MK Engineering. We're looking for talented individuals who share our passion for
            excellence and innovation in construction and design.
          </p>
        </div>

        {/* Company Culture Section */}
        <div className="mb-16">
          <Card className="shadow-lg border-0 rounded-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-900">Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Great Team</h3>
                  <p className="text-sm text-gray-600">Work with passionate professionals</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Growth Opportunities</h3>
                  <p className="text-sm text-gray-600">Continuous learning and development</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Exciting Projects</h3>
                  <p className="text-sm text-gray-600">Work on diverse and challenging projects</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Competitive Benefits</h3>
                  <p className="text-sm text-gray-600">Comprehensive compensation package</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits & Perks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Current <span className="text-blue-600">Openings</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-blue-600 text-white shadow-lg border-0 rounded-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Position?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg"
            >
              Send General Application
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
