import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="text-xl font-bold text-foreground">Sparks Design</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <button
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </nav>

          <p className="text-muted-foreground text-sm">
            © 2025 Sparks Design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;