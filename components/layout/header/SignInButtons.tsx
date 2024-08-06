"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type Props = { text: string };

export function GoogleSignInButton({ text }: Props) {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
}

export function GithubSignInButton({ text }: Props) {
  return (
    <Button
      onClick={() => {
        signIn("github").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
}
