import { Activity, Camera, Radio, Layers } from "lucide-react";

export const SimulationSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 circuit-lines opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20 mb-4">
              Validation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simulate Before <span className="text-gradient">Deployment</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every line of generated code is validated in the CARLA Simulator environment. 
              Test sensor fusion, decision-making algorithms, and vehicle control systems 
              in realistic urban scenarios before touching real hardware.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Camera, label: "Camera Feeds", value: "8 channels" },
                { icon: Radio, label: "LiDAR Points", value: "1.2M/frame" },
                { icon: Layers, label: "Radar Tracks", value: "256 objects" },
                { icon: Activity, label: "Scenarios", value: "500+ tests" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="glass rounded-xl p-4">
                    <Icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-strong rounded-2xl p-4 shadow-elevated">
              {/* Simulation Preview Grid */}
              <div className="grid grid-cols-3 grid-rows-2 gap-2 aspect-video">
                {/* Main 3D View */}
                <div className="col-span-2 row-span-2 bg-gradient-to-br from-secondary to-background rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-8 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      </div>
                      <span className="text-xs text-muted-foreground">3D Simulation</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 rounded text-xs font-mono text-primary">
                    CARLA 0.9.15
                  </div>
                </div>
                
                {/* LiDAR View */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-2">
                      <div className="w-full h-full rounded border border-primary/30 flex items-center justify-center">
                        <span className="text-[10px] text-primary">LiDAR</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Radar View */}
                <div className="bg-gradient-to-br from-warning/10 to-secondary rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-2">
                      <div className="w-full h-full rounded border border-warning/30 flex items-center justify-center">
                        <span className="text-[10px] text-warning">Radar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-xs text-muted-foreground">Running</span>
                  </div>
                  <span className="text-xs font-mono text-foreground">Frame: 1,247</span>
                </div>
                <span className="text-xs font-mono text-primary">60 FPS</span>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 px-3 py-1.5 glass rounded-full text-xs font-medium text-accent border-accent/30">
              ✓ All Tests Passing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
