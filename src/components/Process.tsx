import { 
  FileSearch, 
  Lightbulb, 
  FileText, 
  Hammer, 
  Combine, 
  TestTube2, 
  PackageCheck 
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const Process = () => {
  const steps = [
    { icon: FileSearch, title: 'Requirement Study & Feasibility', description: 'Comprehensive analysis of client needs and project viability' },
    { icon: Lightbulb, title: 'Concept Design & 3D Simulation', description: 'Virtual prototyping and design visualization' },
    { icon: FileText, title: 'Detailed Engineering & BOM', description: 'Complete technical documentation and material specifications' },
    { icon: Hammer, title: 'Fabrication & Machining', description: 'Precision manufacturing with quality control' },
    { icon: Combine, title: 'Assembly, Automation & Integration', description: 'System integration and automation programming' },
    { icon: TestTube2, title: 'FAT & SAT Testing', description: 'Factory and site acceptance testing protocols' },
    { icon: PackageCheck, title: 'Installation, Commissioning & Handover', description: 'On-site deployment and knowledge transfer' },
  ];

  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array(steps.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRefs.current.forEach((el) => el && observer.observe(el));

    return () => containerRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section id="process" className="py-16 bg-muted/20 flex justify-center">
      <div className="w-full max-w-5xl px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Engineering & Design Process
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach ensuring excellence at every stage
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* ⭐ FIXED CSS (Right side spacing issue solved) */}
          <style>{`
            /* Add spacing so right-aligned boxes move away from the center line */
            @media (min-width: 1024px) {
              .timeline-item-right {
                padding-left: 60px !important;
              }
              .timeline-item-left {
                padding-right: 60px !important;
              }
            }
          `}</style>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (containerRefs.current[index] = el)}
                data-index={index}
                className={`
                  relative flex flex-col lg:flex-row items-start lg:items-center 
                  transition-all duration-700
                  ${visible[index]
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                  }
                `}
              >

                {/* LEFT / RIGHT BOX */}
                <div
                  className={`lg:w-5/12 ${
                    index % 2 !== 0
                      ? "lg:order-2 timeline-item-right lg:ml-32"
                      : "timeline-item-left lg:pr-6"
                  }`}
                >
                  <div className="p-4 bg-white rounded-2xl shadow-md border-l-4 border-l-primary hover:shadow-lg transition duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NUMBER — ALWAYS CENTERED */}
                <div className="hidden lg:block">
                  <div
                    className="absolute left-1/2 
                    -translate-x-1/2 
                    w-10 h-10 rounded-full bg-primary 
                    flex items-center justify-center 
                    text-white font-semibold shadow-md z-20"
                    style={{ top: "50%", transform: "translate(-50%, -50%)" }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* SPACER */}
                <div className="hidden lg:block lg:w-5/12"></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
