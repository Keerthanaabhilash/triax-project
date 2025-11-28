import { useState } from 'react';
import { Star, Zap, Users, Workflow, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Star,
      title: 'Personalized Solutions',
      description: 'Tailored engineering designs aligned with your specific business goals and requirements',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest automation tools, software, and innovative design methodologies',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Industry veterans with deep expertise across mechanical, electrical, and automation domains',
    },
    {
      icon: Workflow,
      title: 'Agile Project Management',
      description: 'Flexible approach adapting to changing needs with timely delivery',
    },
    {
      icon: Award,
      title: 'Quality-Focused & Customer-Centric',
      description: 'Uncompromising quality standards with dedicated client support throughout the project lifecycle',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for industrial automation excellence
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-muted-foreground">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{reason.title}</span>
                  </div>
                  <span className="text-primary">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="p-4 text-muted-foreground bg-primary/5 transition-all">
                    {reason.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
