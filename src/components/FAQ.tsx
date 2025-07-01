
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is VideoHarvest completely free to use?",
    answer: "Yes! VideoHarvest is 100% free with no hidden charges, premium plans, or registration requirements. We believe everyone should have access to free video downloading tools."
  },
  {
    question: "Which video platforms are supported?",
    answer: "We support over 50 platforms including YouTube, TikTok, Instagram, Facebook, Twitter, Vimeo, Dailymotion, Twitch, and many more. Our list is constantly growing."
  },
  {
    question: "What video qualities can I download?",
    answer: "You can download videos in various qualities ranging from 144p to 4K (when available), including 720p HD and 1080p Full HD. The available qualities depend on the original video."
  },
  {
    question: "Is it safe to use VideoHarvest?",
    answer: "Absolutely! We don't store your personal data, downloaded videos, or browsing history. Our service is completely secure and respects your privacy."
  },
  {
    question: "Do I need to install any software?",
    answer: "No installation required! VideoHarvest works entirely in your web browser. It's compatible with all modern browsers and operating systems."
  },
  {
    question: "Are there any download limits?",
    answer: "There are no daily limits or restrictions on the number of videos you can download. Use our service as much as you need, completely free."
  },
  {
    question: "Can I download videos on mobile devices?",
    answer: "Yes! Our service is fully optimized for mobile devices. You can download videos on smartphones and tablets just as easily as on desktop computers."
  },
  {
    question: "Is downloading videos legal?",
    answer: "Downloading videos for personal use is generally acceptable, but you should respect copyright laws and platform terms of service. Only download content you have permission to use."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about VideoHarvest
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={faq.question} className="overflow-hidden border-2 hover:border-blue-200 transition-colors duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
