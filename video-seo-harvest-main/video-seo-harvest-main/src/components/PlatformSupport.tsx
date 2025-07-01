
import { Card, CardContent } from "@/components/ui/card";

const platforms = [
  { name: "YouTube", icon: "🎬", color: "bg-red-100 text-red-700" },
  { name: "TikTok", icon: "🎵", color: "bg-pink-100 text-pink-700" },
  { name: "Instagram", icon: "📸", color: "bg-purple-100 text-purple-700" },
  { name: "Facebook", icon: "👥", color: "bg-blue-100 text-blue-700" },
  { name: "Twitter", icon: "🐦", color: "bg-sky-100 text-sky-700" },
  { name: "Vimeo", icon: "🎭", color: "bg-indigo-100 text-indigo-700" },
  { name: "Dailymotion", icon: "📺", color: "bg-orange-100 text-orange-700" },
  { name: "Twitch", icon: "🎮", color: "bg-violet-100 text-violet-700" },
];

const PlatformSupport = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supported Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download videos from all major social media platforms and video hosting sites
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl ${platform.color} flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{platform.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">500M+</span> videos downloaded • 
            <span className="font-semibold text-green-600 ml-2">50+</span> platforms supported
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformSupport;
