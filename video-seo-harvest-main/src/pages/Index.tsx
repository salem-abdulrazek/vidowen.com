
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Play, Shield, Zap, Globe, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import Hero from "@/components/Hero";
import PlatformSupport from "@/components/PlatformSupport";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Hero />
        <PlatformSupport />
        <HowItWorks />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
