import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Cargo Not Found | BWCL" description="Page not found" />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <div className="h-24 w-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 mb-8">
          <PackageX className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cargo Not Found</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          The page or tracking route you are looking for has been moved, deleted, or does not exist.
        </p>
        <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </>
  );
}
