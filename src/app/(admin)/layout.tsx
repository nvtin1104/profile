import { AdminNav } from "@/components/admin-nav"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <aside className="w-full md:w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <AdminNav />
            </aside>
            <main className="flex-1 p-8 overflow-y-auto h-screen">{children}</main>
        </div>
    )
}
