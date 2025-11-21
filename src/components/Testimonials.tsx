import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

import samuelImg from "@/img/samuel.png";
import ffmensImg from "@/img/ffmens.jpg";
import nutrimaxxImg from "@/img/nutrimaxx.jpg";

const testimonials = [
  {
    name: "Samuel Siqueira",
    company: "Samuel Siqueira | Advocacia & Consultoria Jurídica",
    avatar: samuelImg,
    text: "Design criativo, moderno e alinhado exatamente ao que eu precisava. Recomendo!",
  },
  {
    name: "Felipe Fernandes",
    company: "FF Mens Collection",
    avatar: ffmensImg,
    text: "Profissional atencioso, excelente comunicação e um trabalho visual impecável.",
  },
  {
    name: "Carlos David",
    company: "Nutrimaxx",
    avatar: nutrimaxxImg,
    text: "Atendimento excepcional e entrega rápida. O resultado realmente ficou sensacional.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que <span className="text-primary">nossos clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que quem já trabalhou conosco tem a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;