import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO sem o ícone */}
        <div className="flex items-center">
          <img
            src="./src/img/sparks.png"
            alt="Sparks Design Logo"
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("projetos")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("precos")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Preços
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Depoimentos
          </button>
        </nav>

        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          onClick={() => window.open("https://wa.me/55889921751396", "_blank")}
        >
          INICIAR PROJETO
        </Button>
      </div>
    </header>
  );
};

export default Header;