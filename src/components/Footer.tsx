

const Footer = () => {
  return (
    <footer className="bg-forest-green text-soft-cream/60 py-12 border-t border-soft-cream/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#home" className="font-serif text-2xl tracking-wide text-beige">
          SYLVAN
        </a>
        


        <p className="text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Sylvan Restaurant
        </p>
      </div>
    </footer>
  );
};

export default Footer;
