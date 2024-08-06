import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LuBrainCircuit } from "react-icons/lu";

export default function QuizMeCard() {
  return (
    <Link href="/quiz">
      <Card className="hover:cursor-pointer hover:opacity-75 bg-background">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-2xl font-bold">Quiz me!</CardTitle>
          <LuBrainCircuit size={28} strokeWidth={2.5} />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Challenge yourself to a quiz with a topic of your choice.
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
