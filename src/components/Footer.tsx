
import { Separator } from "@/components/ui/separator";
import { Download, Heart, Mail, Shield, FileText, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Download className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">VideoHarvest</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The ultimate free video downloader supporting 50+ platforms. 
              Fast, secure, and always free. No registration required.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart className="w-4 h-4 text-red-400" />
              Made with love for video enthusiasts worldwide
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#platforms" className="text-gray-400 hover:text-white transition-colors">Supported Platforms</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@videoharvest.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />
        
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2024 VideoHarvest. All rights reserved. | Free Video Downloader for YouTube, TikTok, Instagram & More
          </p>
          <p className="text-sm text-gray-500">
            VideoHarvest is not affiliated with YouTube, TikTok, Instagram, Facebook, or any other video platform.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
