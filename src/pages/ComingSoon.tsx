import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Instagram } from "lucide-react";
import bulbulLogo from "@/assets/bulbul-logo.svg";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch. Get ready to create!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach/60 via-background to-peach/40 flex flex-col items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-20 w-20 h-20 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-10 w-14 h-14 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-secondary/25 animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto animate-fade-in">
        {/* Logo */}
        <img 
          src={bulbulLogo} 
          alt="BulBul Logo" 
          className="h-48 md:h-56 -mb-2 drop-shadow-lg"
        />

        {/* Brand name and tagline */}
        <h1 className="font-display text-5xl md:text-6xl text-primary mb-2">
          BulBul
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body italic mb-10">
          make it love it
        </p>

        {/* Main message */}
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          We're Crafting Something Special! ✨
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-4 max-w-lg">
          Our creative workshop is buzzing with excitement as we prepare beautiful DIY art kits just for you. 
          Soon you'll be able to make it, love it, and show it off!
        </p>

        <p className="text-xl md:text-2xl text-foreground font-heading mb-10">
          Get ready to unleash your inner artist! 🎨
        </p>

        {/* Email signup form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base bg-card/80 border-border/50 focus:border-primary"
              aria-label="Email address"
            />
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="h-12 px-6 font-semibold"
            >
              {isSubmitting ? "Joining..." : "Notify Me!"}
            </Button>
          </div>
        </form>

        {/* Social link */}
        <div className="flex items-center gap-2 text-muted-foreground mb-12">
          <span className="text-sm">Follow us for updates:</span>
          <a
            href="https://www.instagram.com/bulbul.kits/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BulBul. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default ComingSoon;
