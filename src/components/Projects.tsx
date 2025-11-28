import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import your 6 images
import img1 from "@/assets/drrum.jpeg";
import img2 from "@/assets/pallet.jpg";
import img3 from "@/assets/bottle.jpg";
import img4 from "@/assets/rins.webp";
import img5 from "@/assets/table.webp";
import img6 from "@/assets/powder.png";

interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { name: "Drum Filling Stations", category: "Filling Systems", description: "Automated drum filling solutions for chemical and food industries", image: img1 },
  { name: "Palletizer Lift", category: "Material Handling", description: "Heavy-duty automated palletizing systems", image: img2 },
  { name: "Bottle Feeding Conveyors", category: "Conveying Systems", description: "High-speed bottle handling and sorting systems", image: img3 },
  { name: "Rinser Systems", category: "Cleaning", description: "Industrial bottle and container rinsing machines", image: img4 },
  { name: "Turntable Conveyor System", category: "Conveying Systems", description: "Precision turntable systems for production lines", image: img5 },
  { name: "Powder Filling Machines", category: "Filling Systems", description: "Accurate powder dispensing and filling automation", image: img6 },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 tint-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering innovative solutions across diverse industries
          </p>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-2">
          {projects.map((project, idx) => (
            <div key={idx} className="flex-shrink-0 w-80">
              <Card
                className="relative overflow-hidden p-6 rounded-2xl cursor-pointer
                  shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:-translate-y-2
                  group bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

                <div className="relative z-10">
                  <Badge className="mb-3 bg-primary/20 text-white group-hover:bg-primary/40 transition">
                    {project.category}
                  </Badge>

                  <h3 className="text-xl font-bold text-white mb-2 transition-transform group-hover:translate-y-1">
                    {project.name}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed opacity-90 transition-opacity group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
