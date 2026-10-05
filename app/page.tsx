import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Toko Jaya</h1>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/produk">Produk</Link>
        {" | "}
        <Link href="/alamat">Alamat Toko</Link>
      </nav>

      <p>Selamat datang di Toko Jaya.</p>
    </main>
  );
}