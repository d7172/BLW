import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Cargo Not Found | BWCL" description="Page not found" />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center py-20">
        <div className="h-32 w-32 bg-white rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-center text-muted-foreground mb-8">
          <PackageX className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 font-serif">Cargo Not Found</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md mx-auto font-medium">
          The page or tracking route you are looking for has been moved, deleted, or does not exist.
        </p>
        <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 shadow-lg shadow-secondary/20 transition-transform hover:scale-105">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </>
  );
}
