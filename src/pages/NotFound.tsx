import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, BookOpen, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="glass max-w-md w-full p-8 text-center scale-in">
        <AlertTriangle className="w-16 h-16 text-warning-soft mx-auto mb-4" />
        
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="w-full group">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
          
          <Link to="/reading" className="block">
            <Button variant="outline" className="w-full">
              <BookOpen className="w-4 h-4 mr-2" />
              Start Reading
            </Button>
          </Link>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6">
          Error Code: 404 | Path: {location.pathname}
        </p>
      </Card>
    </div>
  );
};

export default NotFound;
