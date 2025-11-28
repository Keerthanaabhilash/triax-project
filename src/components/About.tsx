import { Building2, Cog, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold text-primary">Triaxiz Technical Services LLC</span> is a Dubai-based engineering company specializing in custom-built machine design, industrial automation and stainless-steel fabrication for the food, beverage, chemical and process industries.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our expertise bridges mechanical precision and control automation, offering turnkey solutions from concept, design, fabrication, testing and commissioning.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Building2,
                title: 'Industry Leader',
                description: 'Serving food, beverage, chemical, and process industries with cutting-edge solutions',
              },
              {
                icon: Cog,
                title: 'Full Turnkey Solutions',
                description: 'From concept to commissioning, we handle every step of your project',
              },
              {
                icon: ShieldCheck,
                title: 'Quality Assured',
                description: 'Precision engineering with industry-leading standards and certifications',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-lift border-l-4 border-l-primary bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
