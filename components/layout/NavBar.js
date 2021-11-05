import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      {/* <Logo /> */}
      <nav>
        <div>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
