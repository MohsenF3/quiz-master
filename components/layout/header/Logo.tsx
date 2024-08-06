import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="rounded-lg border-2 border-b-4 border-r-4 border-primary px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block"
    >
      Quiz Master
    </Link>
  );
}
