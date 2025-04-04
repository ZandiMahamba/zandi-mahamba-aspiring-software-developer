
import { HeartIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Coding Queen. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <HeartIcon className="h-4 w-4 text-primary" /> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
