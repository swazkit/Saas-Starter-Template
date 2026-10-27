"use client"

import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

function AuthControls() {
  return (
    <div className="flex items-center gap-2">
      <Show when="signed-out">
        <SignInButton mode="redirect">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
        </SignInButton>
        <SignUpButton mode="redirect">
          <Button size="sm">
            Get started
          </Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <UserButton />
        </div>
      </Show>
    </div>
  )
}

function AuthControlsFallback() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-16 rounded-md bg-muted animate-pulse" />
      <div className="h-7 w-20 rounded-md bg-muted animate-pulse" />
    </div>
  )
}

function HeaderInner() {
  const pathname = usePathname()
  const isAuthPage =
    pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up")

  if (isAuthPage) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-sm group"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
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
          <span className="tracking-tight font-heading">SaaS Starter</span>
        </Link>
        <Suspense fallback={<AuthControlsFallback />}>
          <AuthControls />
        </Suspense>
      </div>
    </header>
  )
}

export function Header() {
  return (
    <Suspense fallback={null}>
      <HeaderInner />
    </Suspense>
  )
}
