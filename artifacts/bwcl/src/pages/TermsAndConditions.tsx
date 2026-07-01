import { SEO } from "@/seo/SEO";

export default function TermsAndConditions() {
  return (
    <>
      <SEO title="Terms & Conditions | BWCL" description="Terms and conditions for using BWCL logistics services." />
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Terms and Conditions</h1>
        <p className="text-slate-500">Last Updated: March 2024</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing this website and utilizing BWCL logistics services, you accept and agree to be bound by these Terms and Conditions.</p>
        
        <h2>2. Service Limitations</h2>
        <p>Transit times provided in quotes are estimates and are not guaranteed. BWCL is not liable for delays caused by weather, customs, or other factors beyond our control.</p>
        
        <h2>3. Liability</h2>
        <p>Our liability for loss or damage to cargo is strictly limited in accordance with the applicable carriage laws of India and international conventions where applicable.</p>
      </div>
    </>
  );
}
