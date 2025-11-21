import { Card, CardContent } from "@/components/ui/card";
import { Palette, Instagram, TrendingUp, ShirtIcon } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Criamos marcas memoráveis que conectam com seu público e se destacam no mercado.",
  },
  {
    icon: ShirtIcon,
    title: "Artes Digitais",
    description: "Artes para estampar sua camisa da forma que você desejar.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    description: "Estratégias de anúncios que geram resultados reais e maximizam seu ROI.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que fazemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
