
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Play } from "lucide-react";

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl.trim()) return;
    
    setIsLoading(true);
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      // This would typically handle the actual download logic
      console.log("Processing download for:", videoUrl);
    }, 2000);
  };

  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 -skew-y-1 transform origin-top-left"></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Play size={16} />
          Free Video Downloader
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Download Videos from
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
            Any Platform
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Fast, free, and secure video downloads from YouTube, TikTok, Instagram, Facebook, and more. 
          No registration required. Download in HD quality instantly.
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-2xl shadow-lg border">
            <Input
              type="url"
              placeholder="Paste video URL here (YouTube, TikTok, Instagram...)"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="flex-1 border-0 text-lg h-14 focus-visible:ring-0"
            />
            <Button 
              onClick={handleDownload}
              disabled={!videoUrl.trim() || isLoading}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 h-14 px-8 rounded-xl"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Download size={20} />
                  Download
                </div>
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            100% Free
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            No Registration
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            HD Quality
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Fast Download
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
