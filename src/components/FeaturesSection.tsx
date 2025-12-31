import { Code2, Cpu, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Multi-Language Generation",
    description: "Automatically generate production-ready C++, Java, and Rust code from high-level specifications.",
    color: "primary" as const,
  },
  {
    icon: Shield,
    title: "Standards Compliant",
    description: "All outputs adhere to automotive safety standards including ISO 26262 and AUTOSAR guidelines.",
    color: "accent" as const,
  },
  {
    icon: Cpu,
    title: "Service-Oriented Architecture",
    description: "Generate complete SoA components with proper middleware integration and communication protocols.",
    color: "warning" as const,
  },
  {
    icon: Zap,
    title: "Simulation Ready",
    description: "Validate generated code in CARLA Simulator before real-world deployment for safer development.",
    color: "primary" as const,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  const colorClasses = {
    primary: "text-primary border-primary/30 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
    accent: "text-accent border-accent/30 group-hover:border-accent/60 group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]",
    warning: "text-warning border-warning/30 group-hover:border-warning/60 group-hover:shadow-[0_0_30px_hsl(var(--warning)/0.2)]",
  };

  return (
    <div 
      className="group glass rounded-xl p-6 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[feature.color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accelerate SDV Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From requirements to validated code—our GenAI platform handles the entire lifecycle of automotive software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
