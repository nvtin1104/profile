export function Footer() {
    return (
        <footer className="border-t border-slate-200/10 bg-slate-950 py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-slate-400 md:text-left">
                    Built with Next.js, Tailwind CSS, and Supabase.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-400 hover:text-slate-50 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-400 hover:text-slate-50 transition-colors"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}
