import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Instagram, PhoneCallIcon } from "lucide-react";
import { Cell } from "recharts";

const contactInfo = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@agenciasparksdesign",
    link: "https://www.instagram.com/agenciasparksdesign/",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contatoagenciasparksdesign@gmail.com",
    link: "mailto:contatoagenciasparksdesign@gmail.com",
  },
  {
    icon: PhoneCallIcon,
    label: "WhatsApp",
    value: "+55 (88) 92175-1396",
    link: "https://wa.me/5588921751396?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Sparks%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Vamos conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e transforme suas ideias em <span className="text-primary">realidade</span>!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => window.open(info.link, "_blank")}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p
                    className={`font-semibold text-foreground ${
                      info.label === "E-mail" ? "text-sm" : "text-lg"
                    }`}
                  >
                    {info.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
