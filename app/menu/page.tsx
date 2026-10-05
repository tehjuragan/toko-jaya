import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <h1>Menu Hotel</h1>

      <p>Silakan pilih kategori:</p>

      <Link href="/menu/makanan">Makanan</Link>

      <Link href="/menu/minuman">Minuman</Link>
    </main>
  );
}