"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your dream project? Get in touch with us today for a free consultation and discover how we
            can transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 rounded-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700 font-medium">
                      Service Required
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    className="rounded-lg border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0 rounded-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Construction Avenue
                      <br />
                      Business District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">info@mkengineering.com</p>
                    <p className="text-gray-600">projects@mkengineering.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Quick Contact */}
            <Card className="shadow-lg border-0 rounded-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg"
                  size="lg"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp: +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg border-0 rounded-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg text-center shadow-lg">
                    <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">MK Engineering</p>
                    <p className="text-sm text-gray-600">123 Construction Avenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
