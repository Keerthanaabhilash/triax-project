import { Card } from '@/components/ui/card';
import { Target, Lightbulb } from 'lucide-react';
import visionImage from '@/assets/vision.jpg'; // replace with your image path
import missionImage from '@/assets/mission.jpg'; // replace with your image path

export const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vision & Mission 
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <Card className="p-8 hover-lift bg-gradient-card border-t-4 border-t-primary flex flex-col items-center">
            {/* Image */}
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-lg text-foreground leading-relaxed text-center">
              To become the region's most trusted partner for customized machines and automation solutions.
            </p>
          </Card>

          {/* Mission Card */}
          <Card className="p-8 hover-lift bg-gradient-card border-t-4 border-t-accent flex flex-col items-center">
            {/* Image */}
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-lg text-foreground">
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                Design reliable, efficient and hygienic automation systems
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                Provide full-cycle engineering support and innovation
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                Focus on safety, sustainability and client satisfaction
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
