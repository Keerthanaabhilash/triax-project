import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Droplet, Package, Sparkles, Bot } from "lucide-react";

export const Products = () => {
  const products = [
    {
      icon: Droplet,
      title: "Filling Systems",
      items: [
        "Liquid Filling Machines",
        "Powder Filling Machines",
        "Automated Dosing Systems",
      ],
      color: "primary",
    },
    {
      icon: Package,
      title: "Packing Systems",
      items: [
        "Conveyor Systems",
        "Turntables",
        "Capping & Sealing Units",
        "Palletizer Lift",
      ],
      color: "primary",
    },
    {
      icon: Sparkles,
      title: "Rinsing Systems",
      items: [
        "Bottle Rinser Machines",
        "Container Cleaning Systems",
        "Automated Washing Units",
      ],
      color: "primary",
    },
    {
      icon: Bot,
      title: "Industrial Automation",
      items: [
        "Robotic Pick & Place",
        "Weighing & Dispensing Systems",
        "PLC/HMI Panels",
        "SCADA Integration",
      ],
      color: "primary",
    },
  ];

  // Map colors to actual Tailwind classes
  const colorClasses: Record<
    string,
    { bg: string; text: string }
  > = {
    primary: { bg: "bg-blue-100", text: "text-blue-500" },
    accent: { bg: "bg-yellow-100", text: "text-yellow-500" },
    secondary: { bg: "bg-green-100", text: "text-green-500" }, // now works
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Products & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automation and machinery solutions for modern industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const classes = colorClasses[product.color]; // get Tailwind classes

            return (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div
                    className={`relative z-0 flex flex-col items-center justify-center p-6 cursor-pointer rounded-lg 
                    bg-white/10 backdrop-blur-md
                    transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                  >
                    {/* Background Circle Behind Content */}
                    <div
                      className={`${classes.bg} absolute w-20 h-20 rounded-full -top-5 -right-5 z-0`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 ${classes.bg} rounded-lg mb-4 z-10`}
                    >
                      <Icon className={`${classes.text} w-8 h-8`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground z-10">
                      {product.title}
                    </h3>
                  </div>
                </HoverCardTrigger>

                <HoverCardContent className="w-64 p-4 bg-background border border-muted-foreground rounded-lg shadow-lg">
                  <ul className="space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className={`${classes.text} mr-2 mt-1`}>▸</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
