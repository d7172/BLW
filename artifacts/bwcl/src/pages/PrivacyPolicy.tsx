import { SEO } from "@/seo/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | BWCL" description="Privacy policy and data handling practices for BWCL." />
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="text-slate-500">Last Updated: March 2024</p>
        
        <h2>1. Information We Collect</h2>
        <p>BW Container Lines (BWCL) collects personal and business information when you request a quote, use our services, or contact us. This may include names, email addresses, phone numbers, company details, and shipment information.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to provide logistics services, process quotes, communicate tracking updates, and improve our website and operations. We do not sell your personal data to third parties.</p>
        
        <h2>3. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
      </div>
    </>
  );
}
