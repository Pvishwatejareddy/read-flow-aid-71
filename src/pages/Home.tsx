import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Volume2, Gamepad2, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-reading.jpg";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "📖 Dyslexia-Friendly Reading",
      description: "Special fonts and colors that make reading super easy and fun! Perfect for young learners.",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Brain,
      title: "🤖 Smart Word Helper",
      description: "AI friend that explains tricky words with pictures and simple explanations kids love!",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: Volume2,
      title: "🔊 Story Voice Reader",
      description: "Listen to stories and words read aloud at the perfect speed for comfortable learning.",
      gradient: "from-turquoise to-turquoise/80"
    },
    {
      icon: Gamepad2,
      title: "🎮 Fun Learning Games",
      description: "Play exciting word games, earn badges, and become a reading champion through play!",
      gradient: "from-pink to-pink/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-2" />
              <span className="px-4 py-2 bg-primary-soft/30 rounded-full text-primary font-medium text-sm">
                AI-Powered Learning Assistant
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-dyslexic text-foreground mb-6 leading-tight">
              📚 AI-Powered Dyslexia Reading Assistant<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Making Learning Inclusive, Fun & Accessible! 🌟
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-dyslexic">
              A magical reading companion designed for kids aged 3-13! ✨<br />
              Get AI help with tricky words, listen to stories, and play fun games to become a reading superhero! 🦸‍♀️
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to="/reading">
                <Button size="lg" className="group font-dyslexic font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-200">
                  🚀 Start Reading Adventure
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="outline" size="lg" className="font-dyslexic font-medium hover:scale-105 transition-all duration-200">
                  🎮 Play Games
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="fade-in" style={{animationDelay: "200ms"}}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse learners reading together with AI assistance" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Dyslexia Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-primary-soft/20 to-accent-soft/20">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-dyslexic">
            🧠 What is Dyslexia? Let's Learn Together! 
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-dyslexic">
                📖 Normal Reading Experience
              </h3>
              <div className="space-y-3 text-left">
                <div className="bg-background/50 p-3 rounded-lg">
                  <p className="font-medium">Word: "beautiful"</p>
                  <p className="text-muted-foreground">Sounds like: "BYOO-ti-ful"</p>
                  <p className="text-sm text-green-600">✅ Letters stay in place</p>
                </div>
                <div className="bg-background/50 p-3 rounded-lg">
                  <p className="font-medium">Word: "elephant"</p>
                  <p className="text-muted-foreground">Sounds like: "EL-uh-fant"</p>
                  <p className="text-sm text-green-600">✅ Easy to recognize</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-dyslexic">
                🌈 Dyslexic Reading Experience  
              </h3>
              <div className="space-y-3 text-left">
                <div className="bg-background/50 p-3 rounded-lg">
                  <p className="font-medium">Word: "b-e-a-u-t-i-f-u-l"</p>
                  <p className="text-muted-foreground">Might sound: "be-AW-ti... wait, beau-TI-ful?"</p>
                  <p className="text-sm text-orange-600">🔄 Letters might flip or move</p>
                </div>
                <div className="bg-background/50 p-3 rounded-lg">
                  <p className="font-medium">Word: "elephant"</p>
                  <p className="text-muted-foreground">Might sound: "el-eh-FANT or ele-PHANT?"</p>
                  <p className="text-sm text-orange-600">🤔 Needs more time to process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-turquoise-soft/30 to-pink-soft/30 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-dyslexic">
              💡 The Magic of Dyslexia
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Dyslexia isn't about being "not smart" - it's just a different way brains process letters and sounds! 🧩
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/50 p-4 rounded-xl">
                <span className="text-lg">🎨</span>
                <p className="font-medium mt-2">Super Creative Thinkers</p>
              </div>
              <div className="bg-white/50 p-4 rounded-xl">
                <span className="text-lg">🔍</span>
                <p className="font-medium mt-2">Amazing Problem Solvers</p>
              </div>
              <div className="bg-white/50 p-4 rounded-xl">
                <span className="text-lg">⚡</span>
                <p className="font-medium mt-2">Fast Visual Processors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Better Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive toolkit helps dyslexic learners overcome reading challenges with intelligent AI assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={feature.title} className="slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto scale-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Reading Experience?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have improved their reading skills with our AI-powered assistant.
          </p>
          <Link to="/reading">
            <Button size="lg" className="group font-medium">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 ReadEasy - Empowering dyslexic learners through AI technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;