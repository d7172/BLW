---
name: Sonner toaster crashes without next-themes provider
description: Why the shadcn sonner.tsx wrapper throws at runtime, and which toaster to use in these Vite artifacts
---

In the shadcn/ui component set scaffolded into these Vite React artifacts, `components/ui/sonner.tsx` calls `useTheme()` from `next-themes`. There is no `next-themes` `ThemeProvider` mounted anywhere in the app tree, so rendering that `<Toaster />` throws at runtime: `Cannot read properties of null (reading 'useContext')` / "Invalid hook call" originating in `next-themes` → `Toaster`. Typecheck passes — the failure is runtime-only and only shows in the browser console.

**Rule:** For toasts, use the shadcn `useToast()` hook from `@/hooks/use-toast` together with the `<Toaster />` from `@/components/ui/toaster` (this pair is already mounted in `App.tsx` and has no next-themes dependency). Call `toast({ title, description })` for success and `toast({ variant: "destructive", title, description })` for errors. Do NOT import `toast` from `"sonner"` unless you also mount a next-themes-free Sonner toaster.

**Why:** A design-subagent build wired the Contact form to `import { toast } from "sonner"`, but App.tsx only mounts the Radix `@/components/ui/toaster`, so no toast rendered at all. Switching to mount the `@/components/ui/sonner` wrapper made it worse — it crashed on the missing next-themes context.

**How to apply:** Whenever verifying toast/notification UX in these artifacts, check the browser console (not just typecheck), and prefer the `useToast` + `@/components/ui/toaster` pair.
