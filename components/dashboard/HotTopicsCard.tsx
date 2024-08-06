import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";
import WordCloud from "./WorldCloud";

export default async function HotTopicsCard() {
  //   const topics = await prisma.topic_count.findMany({});
  //   const formattedTopics = topics.map((topic) => {
  //     return {
  //       text: topic.topic,
  //       value: topic.count,
  //     };
  //   });

  const formattedTopics = [
    { text: "test", value: 9 },
    { text: "title", value: 10 },
    { text: "age", value: 5 },
    { text: "name", value: 7 },
  ];

  return (
    <Card className="col-span-4 bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
}
