"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Briefcase,
  Users,
  Building2,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);

  const categories = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Accounting / Finance",
      count: "(2 open positions)",
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Marketing",
      count: "(86 open positions)",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Design",
      count: "(43 open positions)",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Development",
      count: "(12 open positions)",
    },
  ];

  const featuredJobs = [
    {
      title: "UI/UX Designer",
      company: "Acme Inc",
      location: "New York, NY",
      salary: "$50k - $70k",
    },
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$80k - $120k",
    },
    {
      title: "Product Manager",
      company: "Innovate LLC",
      location: "Chicago, IL",
      salary: "$70k - $90k",
    },
  ];

  return (
    <div className="h-full" ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        className="py-20 h-[calc(100vh-64px)] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            Find Your Dream Job
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-center"
          >
            Thousands of jobs available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto flex"
          >
            <Input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="ml-2">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center">
            Popular Job Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-4">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Jobs Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center">
            Featured Jobs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <motion.div
                key={job.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.company}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center">
            What Our Users Say
          </motion.h2>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="w-12 h-12 text-blue-600 mb-4" />
            <p className="text-lg mb-4">
              &ldquo;Jobzilla helped me find my dream job in just a few weeks.
              The platform is easy to use and has a wide range of
              opportunities.&ldquo;
            </p>
            <div className="flex items-center">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Jane Doe</h4>
                <p className="text-gray-600">Software Developer</p>
              </div>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
