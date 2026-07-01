import { SEO } from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  serviceRequired: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
  privacy: z.boolean().refine(val => val === true, "You must accept the privacy policy")
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: "",
      privacy: false
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    toast.success("Quote request submitted successfully. Our team will contact you shortly.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact BWCL | Get a Free Logistics Quote"
        description="Contact BW Container Lines for enterprise logistics quotes, inquiries, and supply chain solutions."
        canonical="/contact"
      />
      
      <section className="pt-32 pb-20 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch With BWCL</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Ready to optimize your supply chain? Request a quote or speak with our logistics experts today.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Corporate Office</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Address</h4>
                      <p className="text-slate-600 text-sm mt-1">Door No. 5-106(85), Shop No. F16, 1st Floor, Canara Trade Centre, Bovikere, Nagarakatte Puttige Road, Moodbidri, Karnataka - 574227, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Phone</h4>
                      <p className="text-slate-600 text-sm mt-1">+91 9483077277</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600 text-sm mt-1">info@bwcl.co.in</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-200 rounded-2xl h-[300px] flex items-center justify-center border border-border">
                <div className="text-slate-500 font-medium">Map Placeholder</div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-border">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Request a Quote</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email *</FormLabel>
                          <FormControl><Input type="email" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl><Input type="tel" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="serviceRequired" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="rail">Rail Logistics</SelectItem>
                              <SelectItem value="road">Road Freight</SelectItem>
                              <SelectItem value="sea">Sea Freight</SelectItem>
                              <SelectItem value="air">Air Freight</SelectItem>
                              <SelectItem value="warehouse">Warehousing</SelectItem>
                              <SelectItem value="project">Project Cargo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shipment Details / Message *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please describe your logistics requirements..." className="h-32" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="privacy" render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-slate-50 border">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal text-slate-600">
                            I agree to the <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a> and consent to BWCL contacting me regarding my inquiry.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )} />
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-blue-600 h-14 text-lg rounded-xl text-white">
                      {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
