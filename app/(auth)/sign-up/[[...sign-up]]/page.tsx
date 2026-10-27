import Link from "next/link"
import { ClerkSignUp } from "@/components/auth/clerk-sign-up"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Sign Up — SaaS Starter",
  description: "Create your SaaS Starter account for free.",
}

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Badge variant="secondary" className="text-xs">
          Free forever on the Starter plan
        </Badge>
      </div>

      {/* Card */}
      <Card className="border-border/60 shadow-lg shadow-black/5">
        <CardHeader className="space-y-1.5 pb-4 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight font-heading">
            Create an account
          </CardTitle>
          <CardDescription className="text-sm">
            Start building in seconds — no credit card required
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClerkSignUp redirectUrl="/dashboard" />
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="space-y-4">
        <Separator />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Sign in
          </Link>
        </p>
        <p className="text-center text-xs text-muted-foreground/70">
          By signing up you agree to our{" "}
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
