import React from "react";

import { redirect } from "next/navigation";
import { authSession } from "@/authOptions";
import QuizForm from "@/components/quiz/QuizForm";

export const metadata = {
  title: "Quiz | Quizzzy",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

export default async function Quiz({ searchParams }: Props) {
  const session = await authSession();
  if (!session?.user) {
    redirect("/");
  }

  return <QuizForm topic={searchParams.topic ?? ""} />;
}
