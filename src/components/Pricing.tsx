import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Um vídeo",
    price: "R$ 75,00",
    period: "",
    description: "Demanda de apenas um vídeo",
    features: [
      "Gravação de um vídeo",
      "Possibilidade de gravar no local",
      "Edição completa",      
      "Elaboração de roteiro a partir da ideia do cliente",
    ],
  },
  {
    name: "Dois vídeos",
    price: "R$ 140,00",
    period: "",
    description: "Plano com DESCONTO",
    features: [
      "Gravação de dois vídeos",
      "Possibilidade de gravar no local e em dias diferentes",
      "Edição completa",      
      "Elaboração de roteiro a partir da ideia do cliente",
    ],
  },
  {
    name: "Três vídeos",
    price: "R$ 205,00",
    period: "",
    description: "Plano com DESCONTO",
    features: [
      "Gravação de três vídeos",
      "Possibilidade de gravar no local e em dias diferentes",
      "Edição completa",      
      "Elaboração de roteiro a partir da ideia do cliente",
    ],
  },
  {
    name: "Plano Sparks",
    price: "R$ 350 p/ mês",
    featured: true,
    features: [
      "Tudo dos planos anteriores +",
      "Vídeos ilimitados (marcar dia de gravação com antecedência",
      "Criação de modelos prontos para stories",
      "Serviço de Gestão de Tráfego inclusa (verba de anúncio separada, você decide o quanto investir)",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Planos que <span className="text-primary">cabem</span> no seu bolso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border hover:scale-105 transition-all duration-300 ${
                plan.featured ? "border-primary border-2 shadow-lg shadow-primary/20" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    MAIS POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => window.open("https://wa.me/5588921751396?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Sparks%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.", "_blank")}
                >
                  CONTRATAR
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
