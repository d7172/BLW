import { SEO } from "@/seo/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | BLW" description="Privacy policy and data handling practices for BLW." />
      <div className="pt-40 pb-24 container mx-auto px-6 max-w-3xl prose prose-slate prose-headings:font-serif prose-h1:text-5xl prose-h1:font-bold prose-h2:text-2xl prose-a:text-primary">
        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-border">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground font-medium">Last Updated: March 2024</p>
          
          <h2>1. Information We Collect</h2>
          <p>Bharat Logistics & Warehousing LLP (BLW) collects personal and business information when you request a quote, use our services, or contact us. This may include names, email addresses, phone numbers, company details, and shipment information.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to provide logistics services, process quotes, communicate tracking updates, and improve our website and operations. We do not sell your personal data to third parties.</p>
          
          <h2>3. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>
      </div>
    </>
  );
}
