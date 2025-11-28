import { 
  Cpu, 
  Settings, 
  Wrench, 
  Box, 
  Zap, 
  GitBranch, 
  Wind,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

interface ExpertiseItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const expertiseItems: ExpertiseItem[] = [
  { icon: <Settings className="w-8 h-8 text-primary" />, title: 'Custom Machine Design & Engineering', description: 'Tailored solutions for unique industrial requirements' },
  { icon: <Box className="w-8 h-8 text-primary" />, title: '3D Mechanical Design', description: 'SolidWorks, Inventor, AutoCAD, Staad Pro' },
  { icon: <Cpu className="w-8 h-8 text-primary" />, title: 'PLC & Automation System Integration', description: 'Advanced control systems and automation' },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: 'Mechanical & Electrical Engineering', description: 'Comprehensive engineering solutions' },
  { icon: <Wrench className="w-8 h-8 text-primary" />, title: 'Stainless Steel Fabrication', description: 'SS304/SS316 precision fabrication' },
  { icon: <GitBranch className="w-8 h-8 text-primary" />, title: 'Process Piping & Conveying Systems', description: 'Efficient material handling solutions' },
  { icon: <Wind className="w-8 h-8 text-primary" />, title: 'Motion Control & Pneumatics', description: 'Precision movement and control systems' },
  { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: 'Equipment Assembly & Testing', description: 'FAT, SAT, and commissioning services' },
  { icon: <RefreshCw className="w-8 h-8 text-primary" />, title: 'Maintenance & System Upgrades', description: 'Ongoing support and modernization' },
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-16 bg-gradient-to-b from-muted/20 to-muted/10 flex justify-center">
      <div className="w-full max-w-5xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Core Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering capabilities delivering excellence across multiple domains
          </p>
        </div>

        {/* Expertise Items */}
        <div className="flex flex-col gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:justify-start gap-3 p-3 rounded-2xl shadow-md transition-shadow max-w-xl mx-auto ${
                index % 2 === 0
                  ? 'bg-white hover:shadow-lg'
                  : 'bg-blue-50 hover:shadow-lg md:flex-row-reverse'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full flex-shrink-0">
                {item.icon}
              </div>
              <div className="max-w-md text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
