import type { ReactNode } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      {/* ── Left brand panel ── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[var(--brand-bg)] p-12">
        {/* Animated gradient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-[var(--brand-orb-1)] blur-[120px] opacity-60 animate-[drift_14s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[var(--brand-orb-2)] blur-[100px] opacity-50 animate-[drift_18s_ease-in-out_infinite_alternate-reverse]" />
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-orb-3)] blur-[80px] opacity-40 animate-[drift_22s_ease-in-out_infinite_alternate]" />
        </div>

        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20 transition-all group-hover:bg-white/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <span className="text-lg font-semibold text-white tracking-tight">
              SaaS Starter
            </span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white/80 border-white/20 backdrop-blur hover:bg-white/20 text-xs"
          >
            ✦ Trusted by 10 000+ teams worldwide
          </Badge>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white">
            Build faster.
            <br />
            Ship smarter.
            <br />
            <span className="text-white/60">Scale effortlessly.</span>
          </h2>
          <p className="max-w-xs text-white/60 leading-relaxed">
            The all-in-one platform your team needs to go from idea to
            production in days, not months.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 ring-2 ring-[var(--brand-bg)] text-white text-xs font-semibold"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">4.9 / 5</span> from
              over 2 000 reviews
            </p>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm leading-relaxed text-white/70">
            &ldquo;SaaS Starter cut our time-to-market in half. The auth + DB
            setup was ready in minutes.&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-violet-600 ring-2 ring-white/20" />
            <div>
              <p className="text-sm font-medium text-white">Sarah Chen</p>
              <p className="text-xs text-white/50">CTO at Finflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right auth panel ── */}
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-12 lg:px-16 bg-background">
        {/* Mobile logo */}
        <div className="mb-10 flex items-center gap-2 lg:hidden">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-primary-foreground"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
          <span className="text-lg font-semibold">SaaS Starter</span>
        </div>

        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
