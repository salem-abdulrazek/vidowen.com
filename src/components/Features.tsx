
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Globe, Smartphone, Download, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos at maximum speed with our optimized servers",
    color: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your privacy is protected. We don't store your data or videos",
    color: "text-green-600"
  },
  {
    icon: Globe,
    title: "No Software Required",
    description: "Works directly in your browser. No downloads or installations needed",
    color: "text-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Download videos on any device - desktop, tablet, or mobile",
    color: "text-purple-600"
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Download in various formats and qualities including HD and 4K",
    color: "text-red-600"
  },
  {
    icon: Heart,
    title: "Always Free",
    description: "No hidden fees, no registration required. Completely free forever",
    color: "text-pink-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose VideoHarvest?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most reliable and feature-rich video downloader on the web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-100">
                <CardContent className="p-6">
                  <Icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
