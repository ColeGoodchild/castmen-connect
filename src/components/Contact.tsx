import { MapPin, Phone, Mail, Clock, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().max(100, "Company must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Max 10MB file size
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("company", formData.company || "");
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      
      if (file) {
        formDataToSend.append("file-upload", file);
      }

      const response = await fetch("https://usebasin.com/f/5e6f1d78e407", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted",
          description: "Thank you! We'll get back to you within 24 hours.",
        });

        setFormData({ name: "", company: "", phone: "", email: "", message: "" });
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      {/* Accent glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Mail className="h-4 w-4" />
              Get In Touch
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Start Your
              <span className="block text-gradient">Project?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you need a prototype or high-volume production, our team is ready 
              to provide a competitive quote with fast turnaround times.
            </p>
          </div>

          {/* Contact Card */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              {/* Left - Contact Info */}
              <div className="border-b border-border/50 bg-muted/20 p-8 lg:border-b-0 lg:border-r lg:p-12">
                <h3 className="mb-8 text-2xl font-semibold text-foreground">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="mt-1 text-muted-foreground">
                        61 State St.
                        <br />
                        Seneca Falls, NY 13148
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <a
                        href="tel:+13152167743"
                        className="mt-1 block text-primary transition-colors hover:text-primary/80"
                      >
                        (315) 216-7743
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a
                        href="mailto:info@castmen.com"
                        className="mt-1 block text-primary transition-colors hover:text-primary/80"
                      >
                        info@castmen.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="mt-1 text-muted-foreground">
                        Monday - Friday
                        <br />
                        8:00 AM - 5:00 PM EST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-semibold text-foreground">
                  Request a Quote
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className={errors.company ? "border-destructive" : ""}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, quantity needs, and any specifications..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file" className="text-foreground">
                      Attach File <span className="text-muted-foreground text-sm">(optional, max 10MB)</span>
                    </Label>
                    <div className="flex items-center gap-3">
                      <input
                        ref={fileInputRef}
                        id="file"
                        name="file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg,.dxf,.step,.stp"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Choose File
                      </Button>
                      {file && (
                        <div className="flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm">
                          <span className="text-foreground truncate max-w-[200px]">{file.name}</span>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accepted: PDF, Word, Excel, Images, CAD files (DWG, DXF, STEP)
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 rounded-lg bg-muted/30 p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Expedite orders available
                    </span>
                    <br />
                    Fast turnaround for urgent requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
