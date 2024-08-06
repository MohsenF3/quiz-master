import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function RecentActivityCard() {
  // const session = await authSession();
  // if (!session?.user) {
  //   return redirect("/");
  // }
  //   const games_count = await prisma.game.count({
  //     where: {
  //       userId: session.user.id,
  //     },
  //   });

  const games_count = 5;
  const session = {
    user: {
      name: "Mohsen",
      email: "3mohsenfaramarzi@gmail.com",
      image: "https://avatars.githubusercontent.com/u/132616810?v=4",
    },
  };

  return (
    <Card className="col-span-4 lg:col-span-3 bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          You have played a total of {games_count} quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-y-scroll no-scrollbar">
        {/* <HistoryComponent limit={10} userId={session.user.id} /> */}
      </CardContent>
    </Card>
  );
}
