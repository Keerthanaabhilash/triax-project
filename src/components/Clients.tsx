import { Card } from '@/components/ui/card';

// Import client logos
import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";
import logo4 from "@/assets/logo4.jpg";
import logo5 from "@/assets/logo5.jpg";
import logo6 from "@/assets/logo6.jpg";
import logo7 from "@/assets/logo7.jpg";
import logo8 from "@/assets/logo8.jpg";
import logo9 from "@/assets/logo9.jpg";
import logo10 from "@/assets/logo10.jpg";
import logo11 from "@/assets/logo11.jpg";
import logo12 from "@/assets/logo12.jpg";
import logo13 from "@/assets/logo13.jpg";
import logo14 from "@/assets/logo14.jpg";
import logo15 from "@/assets/logo15.jpg";
import logo16 from "@/assets/logo16.jpg";

export const Clients = () => {
  const clients = [
    { name: "Goodrich Middle East", logo: logo1 },
    { name: "Ansol Gulf", logo: logo2 },
    { name: "Solvochem FZE", logo: logo3 },
    { name: "Bano Puratos", logo: logo4 },
    { name: "Solentis FZE", logo: logo5 },
    { name: "Tristar", logo: logo6 },
    { name: "Arab Scale Traders", logo: logo7 },
    { name: "Matnah Plastic", logo: logo8 },
    { name: "Rebel Food", logo: logo9 },
    { name: "Jollibee UAE", logo: logo10 },
    { name: "Rak Engineering", logo: logo11 },
    { name: "Navem Pipe", logo: logo12 },
    { name: "Clear Ice", logo: logo13 },
    { name: "Climatizer", logo: logo14 },
    { name: "Dubai Fisherman", logo: logo15 },
    { name: "Houston Engineering", logo: logo16 },
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Valued Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across diverse industries
          </p>
        </div>

        {/* Logos Grid */}
        <Card className="p-8 bg-gradient-card max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg bg-white 
                  hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer 
                  border border-border/50 bg-center bg-contain bg-no-repeat h-24"
                style={{
                  backgroundImage: `url(${client.logo})`,
                }}
                title={client.name}
              />
            ))}
          </div>
        </Card>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            ...and many more satisfied clients across the UAE and beyond
          </p>
        </div>
      </div>
    </section>
  );
};
