import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>middleware demo</h1>
      <p><Link href="/login">Login</Link></p>
    </div>
  );
}
