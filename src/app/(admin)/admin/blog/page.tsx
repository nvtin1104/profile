"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

const posts = [
    { id: 1, title: "Getting Started with Next.js 14", status: "Published" },
    { id: 2, title: "Mastering Tailwind CSS", status: "Published" },
    { id: 3, title: "Supabase Guide", status: "Draft" },
]

export default function BlogAdminPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <Button asChild>
                    <Link href="/admin/blog/new">
                        <Plus className="mr-2 h-4 w-4" /> New Post
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4">
                {posts.map((post) => (
                    <Card key={post.id}>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <h3 className="font-semibold text-lg">{post.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                    {post.status}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" asChild>
                                    <Link href={`/admin/blog/${post.id}`}>
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="destructive" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
