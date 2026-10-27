"use client"

import { SignUp } from "@clerk/nextjs"

interface ClerkSignUpProps {
  redirectUrl?: string
  afterSignUpUrl?: string
  appearance?: object
}

export function ClerkSignUp({
  redirectUrl,
  afterSignUpUrl,
  appearance,
}: ClerkSignUpProps) {
  return (
    <SignUp
      routing="hash"
      fallbackRedirectUrl={redirectUrl ?? afterSignUpUrl ?? "/dashboard"}
      appearance={{
        elements: {
          rootBox: "w-full",
          cardBox: "w-full shadow-none border-0 bg-transparent p-0",
          card: "w-full shadow-none border-0 bg-transparent p-0",
          header: "hidden",
          headerTitle: "hidden",
          headerSubtitle: "hidden",
          footerAction: "hidden",
          footer: "hidden",
          socialButtonsBlockButton:
            "border border-border bg-background hover:bg-muted text-foreground rounded-lg h-10 text-sm font-medium transition-colors",
          socialButtonsBlockButtonText: "font-medium",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground text-xs",
          formFieldLabel: "text-sm font-medium text-foreground",
          formFieldInput:
            "border-input bg-background text-foreground placeholder:text-muted-foreground rounded-lg h-10 px-3 text-sm focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all",
          formButtonPrimary:
            "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-10 text-sm font-medium transition-all shadow-none",
          footerActionText: "text-muted-foreground text-sm",
          footerActionLink: "text-primary font-medium hover:underline",
          identityPreviewText: "text-foreground",
          identityPreviewEditButton: "text-primary",
          formFieldSuccessText: "text-green-600",
          formFieldErrorText: "text-destructive text-xs",
          alertText: "text-destructive text-sm",
          alertIcon: "text-destructive",
          otpCodeFieldInput:
            "border-input bg-background text-foreground rounded-lg",
        },
        ...appearance,
      }}
    />
  )
}
