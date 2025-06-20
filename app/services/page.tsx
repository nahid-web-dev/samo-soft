"use client"

import { motion } from "framer-motion"
import { Code, Search, Smartphone, TrendingUp, ShoppingCart, Palette, Database, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom websites built with modern technologies like React, Next.js, and Node.js for optimal performance.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
  },
  {
    icon: Search,
    title: "SEO Marketing",
    description: "Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.",
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide excellent user experiences.",
    features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Complete digital marketing solutions including social media, PPC, and content marketing.",
    features: ["Social Media Marketing", "Google Ads", "Content Strategy", "Analytics & Reporting"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design and management for optimal data storage and retrieval.",
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Comprehensive security measures and ongoing maintenance to keep your systems safe.",
    features: ["Security Audits", "Regular Updates", "Backup Management", "24/7 Monitoring"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business succeed in the modern digital landscape. From
            website development to digital marketing, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-8 w-8" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-lg p-8 lg:p-12 mb-20"
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your business goals and requirements" },
              { step: "02", title: "Planning", description: "Create a detailed project plan and timeline" },
              { step: "03", title: "Development", description: "Build your solution using best practices" },
              { step: "04", title: "Launch", description: "Deploy and provide ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that fits your needs and budget
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
