"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Dummy data
const posts = [
    {
        id: 1,
        title: "Getting Started with Next.js 14",
        excerpt: "Learn how to build modern web applications with the latest features of Next.js 14, including Server Actions and Partial Prerendering.",
        date: "Nov 24, 2025",
        readTime: "5 min read",
        slug: "getting-started-nextjs-14",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        excerpt: "A comprehensive guide to using Tailwind CSS for building responsive and beautiful user interfaces efficiently.",
        date: "Nov 20, 2025",
        readTime: "8 min read",
        slug: "mastering-tailwind-css",
    },
    {
        id: 3,
        title: "Supabase: The Open Source Firebase Alternative",
        excerpt: "Explore the features of Supabase and how it simplifies backend development for frontend developers.",
        date: "Nov 15, 2025",
        readTime: "6 min read",
        slug: "supabase-firebase-alternative",
    },
]

export default function BlogPage() {
    return (
        <div className="container mx-auto py-20 px-4">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                <motion.div variants={fadeIn} className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Blog</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights on web development and technology.
                    </p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <motion.div key={post.id} variants={fadeIn}>
                            <Card className="h-full flex flex-col hover:border-slate-400 transition-colors cursor-pointer">
                                <Link href={`/blog/${post.slug}`} className="flex-1 flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" /> {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {post.readTime}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-slate-500 dark:text-slate-400 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <span className="text-sm font-medium text-slate-900 dark:text-slate-50 flex items-center hover:underline">
                                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                                        </span>
                                    </CardFooter>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
