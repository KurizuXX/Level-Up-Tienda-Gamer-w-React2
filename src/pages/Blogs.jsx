import BlogCard from '../components/BlogCard';

export default function Blogs(){
  const items = [
    { id: 1, title: 'Cómo elegir tu setup gamer', excerpt: 'Guía rápida para armar un setup balanceado y con estilo neón.' },
    { id: 2, title: 'Top 5 juegos de 2025', excerpt: 'Nuestra selección de los títulos que no te puedes perder.' }
  ];
  return (
    <div className="py-3">
      <h2>Blogs</h2>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {items.map(b => <BlogCard key={b.id} {...b}/>) }
      </div>
    </div>
  );
}