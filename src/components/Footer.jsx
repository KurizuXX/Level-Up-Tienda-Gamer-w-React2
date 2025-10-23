export default function Footer(){
  return (
    <footer className="py-4 mt-5 text-center text-secondary">
      <div className="container">
        <small>© {new Date().getFullYear()} Level-up Gamer · Hecho con ❤️</small>
      </div>
    </footer>
  );
}