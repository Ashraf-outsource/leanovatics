"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight,ChevronsRight,Play } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail,X, MapPin, Users, TrendingUp, Award, Star, Heart,CheckCircle,MessageCircle, Menu, Search 
} from "lucide-react"
import {useState} from "react"

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 mb-4">
              <img src="leanovatics.png"></img>               
            </div>
              <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#0CBBF2] font-semibold">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#0CBBF2]">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-[#0CBBF2]">
                Services
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-[#0CBBF2]">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#0CBBF2]">
                Contact
              </Link>
              </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600" />
              <div className="hidden md:flex items-center space-x-2 text-sm text{#000000}">
                <img src="phonelogo.png"></img>
                <span>Phone Us</span>  
                <span>+1 (555) 123-4567</span>
              </div>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-[#000000] leading-tight">
                Welcome to
                <br />
                <span className="text-[#000000]">Leanovatics</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leanovatics is a global consultancy leader, connecting over 6,500 experts to provide innovative, custom solutions for organizations,
                governments, and institutions worldwide. Our services empower clients to thrive amid complexity by enhancing efficiency, fostering
                sustainable growth, and building resilience. Let us be your trusted partner in navigating challenges and seizing opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0CBBF2] hover:bg-[#4548CF]">
                  Get Started Today
                </Button>
                {/*<Button variant="outline" size="lg">
                  Learn More
                </Button>*/}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Img_mask-group.png?height=500&width=400"
                alt="Professional businesswoman"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Business Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/Group 6.png?height=400&width=400"
                alt="Professional businessman"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              {/*<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0CBBF2] rounded-full flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>*/}
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">
                Build Your Business
                <br />
                With Right Way
              </h2>
              <p className="text-[#0CBBF2] leading-relaxed">
                25 Years of experience in consulting service
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptem
                accusantium doloremu laudantium totam rem aperiam eaque
                upsa quae abillo inventore veritatis architecto
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img.png?height=50&width=50"
                    alt="Consultant"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Business Consulting</p>
                    <p className="text-sm text-gray-600">Strategic Planning</p>
                  </div>
                </div>
              </div>
              <Button className="bg-[#0CBBF2] hover:bg-[#4548CF]">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Make Your Agency
              <br />
              Are Full Bright
            </h2>
            <p className="text-[#000000] max-w-2xl mx-auto">
              Sed ut perspiciatis unde omnis iste natus error sit voluptem
              accusantium doloremu laudantium totam rem aperiam eaque
              upsa quae abillo inventore veritatis architecto
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consulting Services",
                description: "Strategic business consulting to optimize your operations",
                image: "/image14.png?height=220&width=320 rounded-left",
              },
              {
                title: "Technology Services",
                description: "Modern tech solutions for digital transformation",
                image: "/image15.png?height=220&width=320 rounded-left",
              },
              {
                title: "Technology Services",
                description: "Advanced analytics and business intelligence",
                image: "/image16.png?height=220&width=320 rounded-left",
              },
              {
                title: "Technology Services",
                description: "Custom software development and integration",
                image: "/image17.png?height=220&width=320 rounded-left",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={320}
                      height={220}
                      className="rounded-left "
                    />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#0CBBF2] hover:bg-[#4548CF]">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center text-white">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">356+</div>
                <div className="text-blue-100">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">784+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">963+</div>
                <div className="text-blue-100">Support Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Michael J. Barton", role: "Senior Consultant", image: "/Container (4).png?height=300&width=250" },
              { name: "Raymond Galario", role: "Business Analyst", image: "/Container (1).png?height=300&width=250" },
              { name: "Samuel Bergson", role: "Strategy Director", image: "/Container (2).png?height=300&width=250" },
              { name: "Douglas Robinson", role: "Lead Consultant", image: "/Container (3).png?height=300&width=250" },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={250}
                    height={300}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#0CBBF2] hover:bg-[#4548CF]">View All Team</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center"> 
        <Image src="/Group 12.png?height=400&width=1200" alt="Person in warehouse"  
        fill className="object-cover" />  
        <div className="container mx-auto px-4 text-center">
            <div className="relative text-center text-white ">
             <h2 className="text-4xl font-bold text-white mb-4">
              Let's Get To Work Together
               <br />
              Ready To Work Us
              </h2>
              {/*<p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with our expert consulting services. Let's discuss how we can help you achieve your
                goals.
              </p>*/}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0CBBF2] hover:bg-blue-700">
                Get Free Quote
                <ChevronsRight className="w-4 h-4 grid md:grid-cols-1 gap-8" />
              </Button>
              <Button variant="outline" size="lg" className="text-[#1A1A1A] border-white hover:bg-[#0CBBF2] hover:text-gray-900">
                Watch Video
                <Play className="w-4 h-4" />
              </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              What Our Client's Say
              <br />
              About Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Michelle C. Daniels",
                role: "CEO, TechCorp",
                content:"Leanovatics transformed our business operations completely. Their strategic approach and expertise helped us achieve 40% growth in just 6 months.",
                image: "/image12.png?height=170&width=284 rounded-left",
              },
              {
                name: "Anthony R. Castillo",
                role: "Founder, StartupXYZ",
                content:
                  "The consulting services provided by Leanovatics were exceptional. They understood our challenges and provided tailored solutions that worked perfectly.",
                image: "/Image13.png?height=170&width=284 rounded-left",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={170}
                      height={80}
                      className="rounded-left "
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Question</h2>
              <Image
                src="/image11.png?height=500&width=630"
                alt="FAQ illustration"
                width={630}
                height={315}
                className="rounded-rg"
              />
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">What services does Leanovatics offer?</AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive business consulting services including strategic planning, operational
                    optimization, technology integration, and digital transformation solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How long does a typical consulting project take?
                  </AccordionTrigger>
                  <AccordionContent>
                    Project duration varies based on scope and complexity, typically ranging from 3-12 months. We
                    provide detailed timelines during our initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">Do you work with small businesses?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we work with businesses of all sizes, from startups to enterprise-level organizations. Our
                    solutions are tailored to meet specific business needs and budgets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Let's Get in Touch</h2>
              <p className="text-gray-600">
                Ready to transform your business? Get in touch with our expert consultants today and discover how we can
                help you achieve your goals.
              </p>
              <Image
                src="/Group 16.png?height=350&width=795"
                alt="Contact illustration"
                width={790}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div>
              <Card className="p-6 w-[615px] h-[550px] ">
                <CardHeader>
                  <CardTitle>Get A Quote Now!</CardTitle>
                  <CardTitle>We Are Here to Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-10">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                  <Button className="w-full bg-[#0CBBF2] hover:bg-blue-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191A24] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                  <img src="leanovatics.png"></img>               
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative consulting solutions and strategic planning for sustainable
                growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Consulting Services</h3>
              <ul className="space-y-2 text-gray-400">
              <li>
                  <Link href="#" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Planning Design
                    
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Online Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Business Startup
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1 hover:text-white">
                    <ChevronRight className="w-4 h-4 hover:text-[#0CBBF2]" />
                    Business Pattern
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Head Office Address</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  {/*<MapPin className="w-5 h-5 mt-1 flex-shrink-0" />*/}
                  <span>
                    Lumbung Hidup St 425 East Java
                    <br />
                    Madiun City Block ABC 123
                  </span>
                </div>
                <h3 className="efont-semibold mb-4 text-[#ffffff]">Days Open</h3>
                  <div className="flex items-start space-x-2">
                  <span>Monday - Friday 08 AM - 10 PM</span>
                </div>
                {/*
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@leanovatics.com</span>
                </div>*/}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-left text-[#0CBBF2] flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Leanovatics. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-left text-[#0CBBF2]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5  text-right text-[#0CBBF2]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 r text-right text-[#0CBBF2]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5  text-right text-[#0CBBF2]" />
            </a>
          </div>
        </div>
      </footer>
      {/* Live Chat Widget */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}

      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-blue-100">We're here to help!</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-blue-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">Hello! How can we help you today?</p>
                <span className="text-xs text-gray-500">Support Team</span>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">Hi! I'd like to know more about your consulting services.</p>
                <span className="text-xs text-gray-500">You</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                <p className="text-sm">Great! I'd be happy to help. What specific area are you interested in?</p>
                <span className="text-xs text-gray-500">Support Team</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
