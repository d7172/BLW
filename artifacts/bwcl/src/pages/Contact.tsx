import { SEO } from "@/seo/SEO";
import { RoutesBackground } from "@/components/ui/RoutesBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Train, Truck, Ship, Plane, Warehouse, Globe2, Package, Network, Zap } from "lucide-react";
import { useCreateContact } from "@workspace/api-client-react";

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
  const { toast } = useToast();
  const { mutateAsync, isPending } = useCreateContact();

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
    try {
      await mutateAsync({
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          company: values.company || undefined,
          email: values.email,
          phone: values.phone,
          serviceRequired: values.serviceRequired,
          message: values.message,
        },
      });
      toast({
        title: "Quote request submitted successfully",
        description: "Our team will contact you shortly.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or reach us directly at info@bwcl.co.in.",
      });
    }
  };

  return (
    <>
      <SEO 
        title="Contact BLW | Let's Connect"
        description="Collaborating to move India forward. Partner with us to scale your logistics operations."
        canonical="/contact"
      />
      
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <RoutesBackground />

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-foreground">Let's <span className="italic text-primary font-normal">Connect</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Collaborating to move India forward. Partner with us to scale your logistics operations.</p>
        </div>
      </section>

      <section className="py-20 bg-white rounded-t-[4rem] shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-background p-10 rounded-[2.5rem] shadow-sm border border-border">
                <h3 className="text-3xl font-bold text-foreground mb-8 font-serif">Corporate Office</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Headquarters</h4>
                      <p className="text-muted-foreground font-medium mt-2 leading-relaxed">Door No. 5-106(85), Shop No. F16, 1st Floor, Canara Trade Centre, Bovikere, Nagarakatte Puttige Road, Moodbidri, Karnataka - 574227, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Phone</h4>
                      <p className="text-muted-foreground font-medium mt-2">+91 9483077277</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Email</h4>
                      <p className="text-muted-foreground font-medium mt-2">info@bwcl.co.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200 border border-slate-100">
                <h2 className="text-3xl font-bold text-foreground mb-8 font-serif">Request a Quote</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">First Name *</FormLabel>
                          <FormControl><Input className="h-14 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">Last Name *</FormLabel>
                          <FormControl><Input className="h-14 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">Work Email *</FormLabel>
                          <FormControl><Input type="email" className="h-14 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">Phone Number *</FormLabel>
                          <FormControl><Input type="tel" className="h-14 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">Company Name</FormLabel>
                          <FormControl><Input className="h-14 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="serviceRequired" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-foreground">Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-transparent focus:ring-primary focus:bg-white font-medium">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-xl border-border">
                              <SelectItem value="rail">Railway Logistics</SelectItem>
                              <SelectItem value="road">Road Logistics</SelectItem>
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
                        <FormLabel className="font-bold text-foreground">Shipment Details / Message *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please describe your logistics requirements..." className="h-32 rounded-2xl bg-slate-50 border-transparent focus-visible:ring-primary focus-visible:bg-white resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    
                    <FormField control={form.control} name="privacy" render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-2xl p-6 bg-background border border-border">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-medium text-muted-foreground leading-relaxed">
                            I agree to the <a href="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</a> and consent to BLW contacting me regarding my inquiry.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )} />
                    
                    <Button type="submit" disabled={isPending} className="w-full bg-secondary hover:bg-secondary/90 h-16 text-lg font-bold rounded-full text-white shadow-lg shadow-secondary/20 transition-transform hover:scale-105 active:scale-95">
                      {isPending ? "Submitting Request..." : "Submit Quote Request"}
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
