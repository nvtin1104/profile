"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6 max-w-3xl"
                >
                    <motion.h1
                        variants={slideUp}
                        className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent"
                    >
                        Building Digital Experiences with Passion & Precision
                    </motion.h1>
                    <motion.p
                        variants={slideUp}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                    >
                        I'm an IT professional specializing in modern web development, backend systems, and cloud architecture.
                    </motion.p>
                    <motion.div variants={slideUp} className="flex items-center justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/blog">Read Blog</Link>
                        </Button>
                    </motion.div>
                    <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 pt-8">
                        <Link href="https://github.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="https://twitter.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link href="https://linkedin.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center space-y-12"
                    >
                        <motion.h2 variants={slideUp} className="text-3xl font-bold">
                            Technical Skills
                        </motion.h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "PostgreSQL", "Docker"].map((skill) => (
                                <motion.div
                                    key={skill}
                                    variants={slideUp}
                                    className="p-6 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                                >
                                    <p className="font-medium text-lg">{skill}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
