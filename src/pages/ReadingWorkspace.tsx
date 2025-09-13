import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { 
  Volume2, 
  Gamepad2, 
  Settings, 
  Type, 
  Palette, 
  Eye,
  Upload,
  Wand2,
  Play,
  Pause
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ReadingWorkspace = () => {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState([18]);
  const [lineSpacing, setLineSpacing] = useState([1.8]);
  const [isDyslexicFont, setIsDyslexicFont] = useState(true);
  const { toast } = useToast();

  const sampleText = `The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for testing fonts and readability.`;

  const difficultWords = ["commonly", "alphabet", "sentence", "readability"];

  const processText = () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Add text to process with AI assistance",
        variant: "destructive"
      });
      return;
    }
    
    setProcessedText(inputText);
    toast({
      title: "Text processed successfully!",
      description: "Difficult words have been highlighted for assistance",
    });
  };

  const toggleTTS = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate TTS start
      toast({
        title: "Reading aloud...",
        description: "Text-to-speech is now active",
      });
    } else {
      toast({
        title: "Reading paused",
        description: "Text-to-speech has been stopped",
      });
    }
  };

  const renderTextWithHighlights = (text: string) => {
    let result = text;
    difficultWords.forEach(word => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      result = result.replace(regex, `<span class="highlighted-word" title="Complex word - click for simpler version">$1</span>`);
    });
    return { __html: result };
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 fade-in">
            <div className="animate-bounce-gentle mb-4">
              🤖
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-dyslexic text-foreground mb-4">
              AI Reading Helper! ✨
            </h1>
            <p className="text-lg text-muted-foreground font-dyslexic">
              Upload your text and watch the magic happen! I'll make reading super easy! 🌟
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Input Section */}
            <Card className="glass p-6 slide-up hover:shadow-xl transition-all duration-300 border-2 border-dashed border-primary/30 hover:border-primary/60">
              <div className="flex items-center space-x-2 mb-4">
                <div className="animate-bounce-gentle">📄</div>
                <h2 className="text-xl font-semibold font-dyslexic text-foreground">Drop Your Text Here!</h2>
              </div>
              
              <Textarea
                placeholder="✨ Paste your text here or try our sample text... Magic will happen! 🪄"
                className="min-h-[200px] mb-4 resize-none font-dyslexic text-lg border-2 hover:border-primary/50 transition-all duration-200"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              
              <div className="flex flex-col space-y-3">
                <Button
                  onClick={() => setInputText(sampleText)}
                  variant="outline"
                  size="sm"
                  className="w-full font-dyslexic hover:scale-105 transition-all duration-200"
                >
                  🎯 Try Sample Text
                </Button>
                
                <Button 
                  onClick={processText}
                  disabled={!inputText.trim()}
                  className="w-full group font-dyslexic bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-200"
                >
                  <Wand2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  ✨ Make It Easy to Read!
                </Button>
              </div>
            </Card>

            {/* Settings Panel */}
            <Card className="glass p-6 slide-up hover:shadow-xl transition-all duration-300" style={{animationDelay: "100ms"}}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="animate-sparkle">⚙️</div>
                <h2 className="text-xl font-semibold font-dyslexic text-foreground">Reading Settings</h2>
              </div>
              
              <div className="space-y-6">
                {/* Font Size */}
                <div>
                  <label className="flex items-center space-x-2 mb-3 text-sm font-medium font-dyslexic text-foreground">
                    <Type className="w-4 h-4" />
                    <span>Text Size: {fontSize[0]}px 📏</span>
                  </label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    min={14}
                    max={28}
                    step={2}
                    className="w-full"
                  />
                </div>

                {/* Line Spacing */}
                <div>
                  <label className="flex items-center space-x-2 mb-3 text-sm font-medium font-dyslexic text-foreground">
                    <Eye className="w-4 h-4" />
                    <span>Line Space: {lineSpacing[0]}x 📐</span>
                  </label>
                  <Slider
                    value={lineSpacing}
                    onValueChange={setLineSpacing}
                    min={1.2}
                    max={2.5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Font Toggle */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm font-medium font-dyslexic text-foreground">
                    <Palette className="w-4 h-4" />
                    <span>Special Font 🎨</span>
                  </label>
                  <Button
                    variant={isDyslexicFont ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsDyslexicFont(!isDyslexicFont)}
                    className="font-dyslexic hover:scale-105 transition-all duration-200"
                  >
                    {isDyslexicFont ? "ON ✅" : "OFF ❌"}
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <Button
                    onClick={toggleTTS}
                    variant="outline"
                    className="w-full font-dyslexic hover:scale-105 transition-all duration-200"
                    disabled={!processedText}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        🔇 Stop Reading
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 mr-2" />
                        🔊 Read to Me!
                      </>
                    )}
                  </Button>
                  
                  <Link to="/games" className="block">
                    <Button
                      variant="secondary"
                      className="w-full font-dyslexic hover:scale-105 transition-all duration-200 bg-gradient-to-r from-secondary to-secondary/80"
                      disabled={!processedText}
                    >
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      🎮 Play Games!
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Output Section */}
            <Card className="glass p-6 slide-up hover:shadow-xl transition-all duration-300" style={{animationDelay: "200ms"}}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="animate-sparkle">✨</div>
                <h2 className="text-xl font-semibold font-dyslexic text-foreground">Magic Reading Text!</h2>
              </div>
              
              <div className="min-h-[300px] p-4 bg-muted/30 rounded-lg border-2 border-dashed border-accent/30">
                {processedText ? (
                  <div
                    className={`${isDyslexicFont ? 'dyslexic-text' : 'font-inter'} transition-all duration-300`}
                    style={{ 
                      fontSize: `${fontSize[0]}px`,
                      lineHeight: lineSpacing[0]
                    }}
                    dangerouslySetInnerHTML={renderTextWithHighlights(processedText)}
                  />
                ) : (
                  <div className="text-center text-muted-foreground py-12">
                    <div className="animate-bounce-gentle mb-4">🪄</div>
                    <p className="font-dyslexic text-lg">Upload your text to see the magic happen here! ✨</p>
                    <p className="font-dyslexic text-sm mt-2">Difficult words will glow and become easy to understand! 🌟</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="glass p-6 mt-8 scale-in hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold font-dyslexic text-foreground mb-4">🌟 Super Reading Tips!</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-dyslexic">
              <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-200">
                <strong className="text-foreground">✨ Hover magic words</strong> to see pictures and hear sounds!
              </div>
              <div className="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all duration-200">
                <strong className="text-foreground">🎨 Adjust text size</strong> to make reading super comfortable for you!
              </div>
              <div className="p-3 bg-turquoise/10 rounded-lg hover:bg-turquoise/20 transition-all duration-200">
                <strong className="text-foreground">🔊 Listen while reading</strong> to become a reading superhero!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReadingWorkspace;