import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  Target, 
  BookOpen, 
  Brain, 
  Award,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  
  // Mock data for demonstration
  const stats = {
    totalWordsRead: 2847,
    quizzesCompleted: 15,
    averageScore: 85,
    streakDays: 7,
    improvementRate: 23,
    readingTime: "4h 32m"
  };

  const badges = [
    { name: "First Steps", description: "Completed your first quiz", earned: true, icon: "🎯" },
    { name: "Word Master", description: "Learned 50+ new words", earned: true, icon: "📚" },
    { name: "Speed Reader", description: "Read 1000+ words", earned: true, icon: "⚡" },
    { name: "Consistency King", description: "7-day reading streak", earned: true, icon: "🔥" },
    { name: "Quiz Champion", description: "Score 90%+ on 5 quizzes", earned: false, icon: "🏆" },
    { name: "Reading Guru", description: "Read for 10+ hours", earned: false, icon: "🧠" }
  ];

  const recentActivity = [
    { date: "Today", activity: "Completed quiz with 90% score", type: "quiz" },
    { date: "Yesterday", activity: "Read 'The Science Article' - 15 min", type: "reading" },
    { date: "2 days ago", activity: "Learned 8 new vocabulary words", type: "learning" },
    { date: "3 days ago", activity: "Completed quiz with 75% score", type: "quiz" },
  ];

  const weeklyProgress = [
    { day: "Mon", score: 75 },
    { day: "Tue", score: 82 },
    { day: "Wed", score: 78 },
    { day: "Thu", score: 85 },
    { day: "Fri", score: 90 },
    { day: "Sat", score: 88 },
    { day: "Sun", score: 92 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 fade-in">
            <div className="animate-bounce-gentle mb-4">
              ⭐
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-dyslexic text-foreground mb-4">
              Your Star Collection! ⭐
            </h1>
            <p className="text-lg text-muted-foreground font-dyslexic">
              Look at all the amazing progress you've made! You're becoming a reading champion! 🏆
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass p-4 text-center slide-up hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="animate-sparkle">📚</div>
              <div className="text-2xl font-bold font-dyslexic text-foreground">{stats.totalWordsRead.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground font-dyslexic">Words Read!</div>
            </Card>
            
            <Card className="glass p-4 text-center slide-up hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent/10 to-accent/5" style={{animationDelay: "100ms"}}>
              <div className="animate-sparkle">🧠</div>
              <div className="text-2xl font-bold font-dyslexic text-foreground">{stats.quizzesCompleted}</div>
              <div className="text-sm text-muted-foreground font-dyslexic">Games Played!</div>
            </Card>
            
            <Card className="glass p-4 text-center slide-up hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-turquoise/10 to-turquoise/5" style={{animationDelay: "200ms"}}>
              <div className="animate-sparkle">🎯</div>
              <div className="text-2xl font-bold font-dyslexic text-foreground">{stats.averageScore}%</div>
              <div className="text-sm text-muted-foreground font-dyslexic">Success Rate!</div>
            </Card>
            
            <Card className="glass p-4 text-center slide-up hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-secondary/10 to-secondary/5" style={{animationDelay: "300ms"}}>
              <div className="animate-bounce-gentle">🔥</div>
              <div className="text-2xl font-bold font-dyslexic text-foreground">{stats.streakDays}</div>
              <div className="text-sm text-muted-foreground font-dyslexic">Day Streak!</div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Progress Chart */}
            <div className="lg:col-span-2">
              <Card className="glass p-6 scale-in hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold font-dyslexic text-foreground flex items-center">
                    <div className="animate-sparkle mr-2">📈</div>
                    Weekly Star Progress
                  </h2>
                  <div className="flex space-x-2">
                    {["week", "month", "year"].map((period) => (
                      <Button
                        key={period}
                        variant={selectedPeriod === period ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPeriod(period)}
                        className="capitalize font-dyslexic hover:scale-105 transition-all duration-200"
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {weeklyProgress.map((day, index) => (
                    <div key={day.day} className="flex items-center space-x-4 hover:bg-muted/20 p-2 rounded-lg transition-all duration-200">
                      <div className="w-12 text-sm font-medium font-dyslexic text-muted-foreground">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <Progress value={day.score} className="h-4 hover:scale-105 transition-all duration-200" />
                      </div>
                      <div className="w-12 text-sm font-bold font-dyslexic text-foreground text-right">
                        {day.score}% ⭐
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-success-soft/20 to-turquoise/20 rounded-lg border-2 border-success-soft/30">
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="animate-bounce-gentle">🚀</div>
                    <span className="font-medium font-dyslexic">+{stats.improvementRate}% improvement this week! Amazing!</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-dyslexic mt-1">
                    You're becoming a reading superstar! Keep up the fantastic work! ⭐
                  </p>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="glass p-6 scale-in hover:shadow-xl transition-all duration-300" style={{animationDelay: "100ms"}}>
              <h2 className="text-xl font-semibold font-dyslexic text-foreground mb-4 flex items-center">
                <div className="animate-sparkle mr-2">📅</div>
                Recent Adventures
              </h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 hover:scale-105 transition-all duration-200">
                    <div className={`w-3 h-3 rounded-full mt-2 animate-sparkle ${
                      activity.type === 'quiz' ? 'bg-accent' :
                      activity.type === 'reading' ? 'bg-primary' : 'bg-turquoise'
                    }`} />
                    <div>
                      <p className="text-sm font-medium font-dyslexic text-foreground">
                        {activity.type === 'quiz' ? '🎮' : activity.type === 'reading' ? '📖' : '🌟'} {activity.activity}
                      </p>
                      <p className="text-xs text-muted-foreground font-dyslexic">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Badges Section */}
          <Card className="glass p-6 mb-8 scale-in hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold font-dyslexic text-foreground mb-6 flex items-center">
              <div className="animate-bounce-gentle mr-2">🏆</div>
              Super Star Badges Collection!
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={badge.name}
                  className={`text-center p-4 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer ${
                    badge.earned 
                      ? "bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-300 shadow-lg hover:shadow-xl" 
                      : "bg-muted/30 border-2 border-border opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className={`text-4xl mb-2 ${badge.earned ? "animate-sparkle" : "grayscale"}`}>
                    {badge.icon}
                  </div>
                  <h3 className={`font-medium font-dyslexic text-sm mb-1 ${
                    badge.earned ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {badge.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-dyslexic">
                    {badge.description}
                  </p>
                  {badge.earned && (
                    <div className="animate-sparkle mt-2">⭐</div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="glass p-8 text-center scale-in hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="animate-bounce-gentle mb-4">🚀</div>
            <h3 className="text-2xl font-bold font-dyslexic text-foreground mb-4">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-muted-foreground font-dyslexic mb-6 max-w-2xl mx-auto">
              You're doing AMAZING! 🌟 Keep reading, playing games, and collecting stars to become the ultimate reading champion!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reading">
                <Button size="lg" className="group font-dyslexic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-200">
                  📚 Continue Reading Adventure
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="outline" size="lg" className="font-dyslexic hover:scale-105 transition-all duration-200">
                  <div className="animate-sparkle mr-2">🎮</div>
                  Play More Games!
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;