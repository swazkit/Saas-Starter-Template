import Link from "next/link"
import { ClerkSignIn } from "@/components/auth/clerk-sign-in"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Sign In — SaaS Starter",
  description: "Sign in to your SaaS Starter account.",
}

export default function SignInPage() {
  return (
    <div className="space-y-6">
      {/* Card */}
      <Card className="border-border/60 shadow-lg shadow-black/5">
        <CardHeader className="space-y-1.5 pb-4 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight font-heading">
            Welcome back
          </CardTitle>
          <CardDescription className="text-sm">
            Sign in to continue to your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClerkSignIn redirectUrl="/dashboard" />
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="space-y-4">
        <Separator />
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Sign up for free
          </Link>
        </p>
        <p className="text-center text-xs text-muted-foreground/70">
          By signing in you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
