import { authSession } from "@/authOptions";
import { ThemeToggle } from "./ThemeToggle";
import { GoogleSignInButton, GithubSignInButton } from "./SignInButtons";
import UserAccountNav from "./UserAccount";
import Logo from "./Logo";

export default async function Navbar() {
  //   const session = await authSession();
  const session = {
    user: {
      name: "Mohsen",
      email: "3mohsenfaramarzi@gmail.com",
      image: "https://avatars.githubusercontent.com/u/132616810?v=4",
    },
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-background  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Logo />

        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <GithubSignInButton text="Sign In" />
          )}
        </div>
      </div>
    </div>
  );
}
