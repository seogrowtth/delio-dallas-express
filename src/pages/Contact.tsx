import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
            CONTACT US
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Ready to upgrade your Dallas workplace with premium vending services? Get in touch with our team today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Get In Touch With Dallas's Premier Vending Service Provider
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to install new vending machines, upgrade your existing coffee service, or simply have questions about our vending services in Dallas TX, we're here to help. Our knowledgeable team is ready to discuss your specific needs and create a customized solution that fits your workplace perfectly.
              </p>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Our Location</h3>
                        <p className="text-muted-foreground">
                          1750 Briercroft Ct, Carrollton, TX 75006, <br />
                          USA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                        <a href="tel:+1 6147169068">6147169068</a><br />
                          Call us for immediate assistance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info@deliovending.com<br />
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 7:00 AM - 6:00 PM<br />
                          Saturday: 8:00 AM - 2:00 PM<br />
                          Sunday: Closed<br />
                          Emergency service available 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Free Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and one of our vending specialists will contact you within 24 hours to discuss your needs and provide a custom quote.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border"
                        placeholder="(214) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-background border-border"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background border-border min-h-[150px]"
                        placeholder="Tell us about your vending service needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Serving Dallas and Surrounding Areas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Delio Vending and Coffee Services proudly provides comprehensive vending services in Dallas TX and throughout the greater metropolitan area. Our local presence ensures rapid response times and personalized service that national chains simply cannot match.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              We serve businesses of all sizes, from small offices with 10 employees to large corporate campuses with thousands. No matter where you're located in the Dallas area, our dedicated team is ready to deliver exceptional vending and coffee services tailored to your unique needs. Contact us today to learn how we can enhance your workplace break room experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Why Choose Delio for Your Vending Services in Dallas TX?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                When you reach out to Delio Vending and Coffee Services, you're not just contacting another vending company—you're connecting with Dallas's most trusted partner for workplace refreshment solutions. Our commitment to excellence, combined with our deep understanding of the local market, makes us the ideal choice for businesses throughout Dallas, TX.
              </p>
              <p>
                We understand that every business has unique needs, which is why we never offer cookie-cutter solutions. During your free consultation, we'll discuss your team size, preferences, budget, and any special requirements. We'll recommend machine types, product selections, and service schedules customized specifically for your workplace. Our goal is to create a break room experience that delights your employees and fits seamlessly into your operations.
              </p>
              <p>
                From the moment you contact us, you'll experience the Delio difference. Our responsive team will answer your questions promptly, schedule a convenient site visit if needed, and work with you to design the perfect vending solution. Installation is quick and professional, with minimal disruption to your business. Once operational, you'll have access to our 24/7 support line and dedicated account manager who knows your location inside and out.
              </p>
              <p>
                Don't settle for mediocre vending services. Contact Delio Vending and Coffee Services today and discover why hundreds of Dallas businesses trust us to keep their teams happy, productive, and well-refreshed. Whether you need a single coffee machine or a complete break room transformation, we have the expertise, technology, and local presence to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Delio Vending and Coffee Services. All rights reserved.</p>
            <p className="mt-2">Premier Vending Services Dallas | Vending Services In Dallas TX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
