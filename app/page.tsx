import Link from "next/link"
import { SignUpButton, SignInButton, Show } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Zap,
  Database,
  Layers,
  ArrowRight,
  Code2,
  Cpu,
  CheckCircle2,
} from "lucide-react"

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden">
      {/* ── Background decorative glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-600 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24 lg:px-8">
        <div className="flex justify-center mb-6">
          <Badge
            variant="outline"
            className="gap-2 px-3.5 py-1 text-xs font-medium rounded-full bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Next.js 16 + Event-Driven SaaS Architecture
          </Badge>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-heading text-balance">
          Build faster. Ship smarter.{" "}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-primary bg-clip-text text-transparent">
            Scale effortlessly.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg sm:leading-8 text-balance">
          Production-grade starter template with Clerk authentication, Prisma 7
          ORM, event-driven design, and modern shadcn/ui components.
        </p>

        {/* Hero Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Show when="signed-out">
            <SignUpButton mode="redirect">
              <Button size="lg" className="gap-2 h-11 px-6 shadow-md shadow-primary/20">
                Get started for free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SignUpButton>
            <SignInButton mode="redirect">
              <Button variant="outline" size="lg" className="h-11 px-6">
                Sign in to app
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 h-11 px-6 shadow-md shadow-primary/20">
                Go to Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Show>
        </div>

        {/* Feature bullets */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Clerk Authentication
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Prisma 7 + Postgres
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Base UI & Shadcn Nova
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Turbopack & Tailwind v4
          </div>
        </div>
      </section>

      {/* ── Feature Grid ── */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl font-heading">
            Engineered for Modern Applications
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A cohesive architecture designed for developer happiness and enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                Turnkey Authentication
              </CardTitle>
              <CardDescription>
                Complete multi-tenant auth with Clerk, secure session tokens, OAuth providers, and route protection.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Sign-in, sign-up, user profiles, and organization management out of the box.
            </CardContent>
          </Card>

          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                Event-Driven Core
              </CardTitle>
              <CardDescription>
                Decoupled services with high resilience, asynchronous workflows, and scalable background message processing.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Designed to handle asynchronous events and webhook subscriptions seamlessly.
            </CardContent>
          </Card>

          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Database className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                Prisma 7 + PostgreSQL
              </CardTitle>
              <CardDescription>
                Strongly-typed queries, seamless migrations, edge-ready connection pooling, and pg adapter integration.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Zero boilerplate schemas with automatic migration generation.
            </CardContent>
          </Card>

          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                Modern UI System
              </CardTitle>
              <CardDescription>
                Shadcn base-nova style powered by @base-ui/react, Tailwind v4, Geist fonts, and CSS variables.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Accessible, keyboard-navigable components with dark mode support.
            </CardContent>
          </Card>

          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                Next.js 16 Performance
              </CardTitle>
              <CardDescription>
                Turbopack compiler, Partial Prerendering (PPR), React Server Components, and optimized cache components.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Instant sub-second page loads with progressive hydration.
            </CardContent>
          </Card>

          <Card className="border-border/60 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold font-heading">
                End-to-End TypeScript
              </CardTitle>
              <CardDescription>
                Strict TypeScript 5 setup across components, database models, API handlers, and route definitions.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Catch bugs at build time with comprehensive static typing.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-auto border-t border-border/50 py-8 px-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">
              ⚡
            </span>
            <span className="font-semibold text-foreground">SaaS Starter</span>
            <span>&copy; 2026 All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/sign-in" className="hover:text-foreground transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
