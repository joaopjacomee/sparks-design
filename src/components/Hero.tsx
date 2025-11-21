import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Está <span className="text-primary">sem tempo</span> para<br />
            suas redes sociais?
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Nós <span className="text-primary">cuidamos disso</span> para você!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
              onClick={() => window.open("https://www.instagram.com/agenciasparksdesign/9", "_blank")}
            >
              VER NOSSO TRABALHO
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
              onClick={() => window.open("https://wa.me/5588921751396?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Sparks%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.", "_blank")}
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              FALAR COM ESPECIALISTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
