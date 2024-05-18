import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))]">
      <Card className="w-full max-w-md bg-card text-card-foreground p-8 rounded-lg shadow-lg">
        <CardHeader className="mb-4">
          <CardTitle className="text-primary text-2xl">Welcome to SweetBeasts</CardTitle>
          <CardDescription className="text-muted-foreground">Welcome to SweetBeasts</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="p-2 rounded bg-[hsl(var(--input))] border border-border" />
              <input type="text" placeholder="Last name" className="p-2 rounded bg-[hsl(var(--input))] border border-border" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-2 rounded bg-[hsl(var(--input))] border border-border" />
            <input type="password" placeholder="Password" className="w-full p-2 rounded bg-[hsl(var(--input))] border border-border" />
            <input type="password" placeholder="Confirm Your Password" className="w-full p-2 rounded bg-[hsl(var(--input))] border border-border" />
            <button type="submit" className="w-full py-2 rounded bg-primary text-primary-foreground">Sign up →</button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
