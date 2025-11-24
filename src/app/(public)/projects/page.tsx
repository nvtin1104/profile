"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

// Dummy data for now
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution built with Next.js, Supabase, and Stripe.",
        tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates using Supabase Realtime.",
        tags: ["React", "Supabase", "Realtime", "Zustand"],
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "An AI-powered application that generates blog posts and social media content.",
        tags: ["Next.js", "OpenAI API", "Vercel AI SDK"],
        demoUrl: "#",
        repoUrl: "#",
    },
]

export default function ProjectsPage() {
    return (
        <div className="container mx-auto py-20 px-4">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                <motion.div variants={fadeIn} className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A collection of projects I've worked on, ranging from web applications to open source tools.
                    </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={fadeIn}>
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" size="sm" asChild>
                                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
