import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Brain, 
  Gamepad2, 
  Puzzle, 
  Target, 
  Zap,
  Star,
  Trophy,
  Play,
  Lock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Games = () => {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  const games = [
    {
      id: "word-match",
      title: "🎯 Word Match",
      description: "Match complex words with their simple meanings!",
      difficulty: "Easy",
      badge: 3,
      completed: true,
      icon: Target,
      color: "bg-gradient-to-br from-primary to-primary/80",
      illustration: "🎯"
    },
    {
      id: "letter-trace",
      title: "✏️ Letter Tracing",
      description: "Trace letters and practice handwriting skills",
      difficulty: "Easy",
      badge: 5,
      completed: true,
      icon: Zap,
      color: "bg-gradient-to-br from-secondary to-secondary/80",
      illustration: "✏️"
    },
    {
      id: "spelling-bee",
      title: "🐝 Spelling Bee",
      description: "Listen and spell words correctly to win points!",
      difficulty: "Medium",
      badge: 2,
      completed: false,
      icon: Brain,
      color: "bg-gradient-to-br from-accent to-accent/80",
      illustration: "🐝"
    },
    {
      id: "word-puzzle",
      title: "🧩 Word Puzzles",
      description: "Complete crossword puzzles with visual hints",
      difficulty: "Medium",
      badge: 1,
      completed: false,
      icon: Puzzle,
      color: "bg-gradient-to-br from-turquoise to-turquoise/80",
      illustration: "🧩"
    },
    {
      id: "reading-race",
      title: "🏃 Reading Race",
      description: "Speed reading challenges with comprehension",
      difficulty: "Hard",
      badge: 0,
      completed: false,
      icon: Gamepad2,
      color: "bg-gradient-to-br from-pink to-pink/80",
      illustration: "🏃"
    },
    {
      id: "memory-match",
      title: "🧠 Memory Match",
      description: "Match pictures with words to boost vocabulary",
      difficulty: "Easy",
      badge: 4,
      completed: true,
      icon: Star,
      color: "bg-gradient-to-br from-warning-soft to-orange-400",
      illustration: "🧠"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      case "Hard": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="animate-bounce-gentle">
                🎮
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-dyslexic text-foreground mb-4">
              Brain Training Zone!
            </h1>
            <p className="text-xl text-muted-foreground font-dyslexic max-w-2xl mx-auto">
              Play fun games to improve your reading skills and earn awesome badges! 🌟
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <Card className="glass p-4 text-center slide-up hover:scale-105 transition-all duration-200">
              <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2 animate-sparkle" />
              <div className="text-lg font-bold text-foreground">15</div>
              <div className="text-xs text-muted-foreground font-dyslexic">Badges</div>
            </Card>
            <Card className="glass p-4 text-center slide-up hover:scale-105 transition-all duration-200" style={{animationDelay: "100ms"}}>
              <Star className="w-6 h-6 text-primary mx-auto mb-2 animate-sparkle" />
              <div className="text-lg font-bold text-foreground">8</div>
              <div className="text-xs text-muted-foreground font-dyslexic">Level</div>
            </Card>
            <Card className="glass p-4 text-center slide-up hover:scale-105 transition-all duration-200" style={{animationDelay: "200ms"}}>
              <Zap className="w-6 h-6 text-orange-500 mx-auto mb-2 animate-sparkle" />
              <div className="text-lg font-bold text-foreground">7</div>
              <div className="text-xs text-muted-foreground font-dyslexic">Streak</div>
            </Card>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {games.map((game, index) => {
              const Icon = game.icon;
              const isHovered = hoveredGame === game.id;
              
              return (
                <Card 
                  key={game.id}
                  className={`glass p-6 cursor-pointer transition-all duration-300 slide-up hover:shadow-2xl ${
                    isHovered ? 'scale-105 rotate-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  {/* Badge Counter */}
                  {game.badge > 0 && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold animate-bounce-gentle">
                      {game.badge}
                    </div>
                  )}

                  {/* Game Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl ${game.color} flex items-center justify-center shadow-lg ${isHovered ? 'animate-wiggle' : ''}`}>
                      <span className="text-3xl">{game.illustration}</span>
                    </div>
                    {game.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>

                  {/* Game Info */}
                  <h3 className="text-xl font-bold font-dyslexic text-foreground mb-2">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground font-dyslexic mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Difficulty Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </div>

                  {/* Play Button */}
                  <Link to="/quiz" className="block">
                    <Button 
                      className={`w-full group font-dyslexic font-medium ${
                        game.completed ? '' : 'opacity-50'
                      }`}
                      disabled={!game.completed}
                    >
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {game.completed ? "Play Now!" : "Coming Soon"}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* Daily Challenge */}
          <Card className="glass p-8 text-center scale-in bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="animate-bounce-gentle mb-4">
              🏆
            </div>
            <h3 className="text-2xl font-bold font-dyslexic text-foreground mb-4">
              Daily Challenge!
            </h3>
            <p className="text-muted-foreground font-dyslexic mb-6 max-w-md mx-auto">
              Complete today's special challenge to earn bonus stars and unlock new games!
            </p>
            <Link to="/quiz">
              <Button size="lg" className="group font-dyslexic font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Start Challenge 🚀
                <Star className="w-4 h-4 ml-2 group-hover:animate-sparkle" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;