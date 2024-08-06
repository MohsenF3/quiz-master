import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/authButton";
import { authSession } from "@/authOptions";

export default async function Home() {
  const session = await authSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="mb-5">Welcome to Quiz Master 🔥!</CardTitle>
          <CardDescription>
            Quiz Master is a platform for creating quizzes using AI!. Get
            started by loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In" />
        </CardContent>
      </Card>
    </main>
  );
}
