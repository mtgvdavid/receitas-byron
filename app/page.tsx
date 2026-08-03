import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto">

{/* HERO */}
      <section>
        <h1>Receitas deliciosas</h1>
        <p>Descubra receitas simples e saborosas para todas as ocasiões</p>
        <Link href="/receitas">
          Ver todas as receitas
        </Link>
      </section>

    </div>
  );
}
