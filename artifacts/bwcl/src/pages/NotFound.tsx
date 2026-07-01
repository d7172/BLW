import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Cargo Not Found | BWCL" description="Page not found" />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center py-20">
        <div className="h-20 w-20 md:h-24 md:w-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 mb-6 md:mb-8">
          <PackageX className="h-10 w-10 md:h-12 md:w-12" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Cargo Not Found</h1>
        <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page or tracking route you are looking for has been moved, deleted, or does not exist.
        </p>
        <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </>
  );
}
