import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  CheckCircle, 
  XCircle, 
  Trophy, 
  RotateCcw, 
  ArrowRight,
  Star,
  Target,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  type: "multiple-choice" | "drag-drop" | "fill-blank";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [draggedWord, setDraggedWord] = useState<string | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is a simpler word for 'magnificent'?",
      options: ["terrible", "amazing", "small", "boring"],
      correctAnswer: "amazing",
      explanation: "Magnificent means extremely beautiful or impressive, so 'amazing' is the best simple alternative."
    },
    {
      id: 2,
      type: "fill-blank",
      question: "The cat _____ on the soft pillow.",
      correctAnswer: "sleeps",
      explanation: "The sentence describes what the cat does on the pillow."
    },
    {
      id: 3,
      type: "drag-drop",
      question: "Match the complex word with its simple meaning:",
      options: ["big", "fast", "smart", "happy"],
      correctAnswer: "big",
      explanation: "Enormous means very big or huge."
    }
  ];

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    if (!selectedAnswer.trim()) {
      toast({
        title: "Please select an answer",
        description: "Choose an option before continuing",
        variant: "destructive"
      });
      return;
    }

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (selectedAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (isLastQuestion) {
        // Quiz completed, navigate to results
        return;
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setShowResult(false);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const handleDrop = (word: string) => {
    setSelectedAnswer(word);
    setDraggedWord(null);
  };

  if (isLastQuestion && showResult) {
    // Show final results
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass p-8 scale-in">
              <div className="mb-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Quiz Complete!
                </h1>
                <p className="text-muted-foreground">
                  Great job practicing your reading skills!
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{score}</div>
                    <div className="text-sm text-muted-foreground">Correct</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{questions.length}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      {Math.round((score / questions.length) * 100)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Score</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={restartQuiz} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Link to="/results">
                  <Button className="group">
                    View Progress
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="text-center mb-8 fade-in">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Reading Quiz
              </h1>
              <Clock className="w-6 h-6 text-muted-foreground" />
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Question Card */}
          <Card className="glass p-8 slide-up">
            {!showResult ? (
              <>
                <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {question.question}
                </h2>

                {/* Multiple Choice */}
                {question.type === "multiple-choice" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {question.options?.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === option ? "default" : "outline"}
                        className="p-4 h-auto text-left justify-start"
                        onClick={() => handleAnswer(option)}
                      >
                        <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center">
                          {selectedAnswer === option && (
                            <div className="w-3 h-3 rounded-full bg-current" />
                          )}
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Fill in the blank */}
                {question.type === "fill-blank" && (
                  <div className="mb-6">
                    <div className="bg-muted/30 rounded-lg p-4 mb-4 text-center text-lg">
                      {question.question.replace("_____", "______")}
                    </div>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-border bg-background text-foreground text-center text-lg"
                      placeholder="Type your answer here..."
                      value={selectedAnswer}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                  </div>
                )}

                {/* Drag and Drop */}
                {question.type === "drag-drop" && (
                  <div className="mb-6">
                    <div className="text-center mb-4 font-medium text-foreground">
                      "Enormous" means:
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      {question.options?.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="cursor-grab active:cursor-grabbing"
                          draggable
                          onDragStart={() => setDraggedWord(option)}
                          onClick={() => handleAnswer(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                    
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                        selectedAnswer 
                          ? "border-primary bg-primary/10" 
                          : "border-muted-foreground bg-muted/20"
                      }`}
                      onDrop={(e) => {
                        e.preventDefault();
                        if (draggedWord) handleDrop(draggedWord);
                      }}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      {selectedAnswer ? (
                        <span className="text-lg font-medium text-primary">{selectedAnswer}</span>
                      ) : (
                        <span className="text-muted-foreground">Drop your answer here</span>
                      )}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <Button 
                    onClick={submitAnswer}
                    size="lg"
                    disabled={!selectedAnswer.trim()}
                    className="group"
                  >
                    {isLastQuestion ? "Finish Quiz" : "Next Question"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </>
            ) : (
              /* Answer Result */
              <div className="text-center">
                {selectedAnswer.toLowerCase() === question.correctAnswer.toLowerCase() ? (
                  <div className="space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                    <h3 className="text-2xl font-bold text-green-600">Correct!</h3>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-red-600">Not quite right</h3>
                    <p className="text-muted-foreground">
                      The correct answer is: <strong>{question.correctAnswer}</strong>
                    </p>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* Bottom Stats */}
          <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Best: 8/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;