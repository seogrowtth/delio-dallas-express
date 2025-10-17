import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-vending.jpg";
import coffeeImage from "@/assets/coffee-service.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Coffee, Truck, Clock, Shield, Star, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              <u><a href="https://deliotx.com/">VENDING SERVICES DALLAS</a></u>
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              Premium vending solutions and coffee services throughout Dallas, TX. Delivering convenience, quality, and reliability to businesses of all sizes.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            Your Local Dallas Vending Experts
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Being deeply rooted in the Dallas business community, we understand the pulse of the local market. Whether you're looking for comprehensive <u><a href="https://www.google.com/maps/place/Delio+Vending+%26+Coffee+Services/data=!4m2!3m1!1s0x0:0xb9334a23357abcb6?sa=X&ved=1t:2428&ictx=111">vending services in Dallas TX</a></u> or a reliable partner for your break room needs, Delio Vending and Coffee Services offers a hands-on, personalized approach that sets us apart.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Coffee className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Premium Coffee Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our state-of-the-art coffee vending solutions bring barista-quality beverages to your workplace. From rich espressos to creamy lattes, we provide premium coffee experiences that keep your team energized and productive throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Full-Service Vending</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer complete vending services in Dallas TX, including installation, stocking, and maintenance. Our modern vending machines feature cashless payment options, healthy snack selections, and energy-efficient technology that saves you money.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our dedicated support team is always available to ensure your vending services run smoothly. We provide rapid response times, preventive maintenance, and real-time inventory management to minimize downtime and maximize satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">
            What We Offer: Complete Vending Solutions for Dallas Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={coffeeImage} 
                alt="Premium coffee vending machine in Dallas office"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Custom Vending Solutions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our bespoke vending services are tailored to your business needs, not built from generic packages. Every product selection, machine placement, and service schedule is carefully chosen to reflect your company culture while prioritizing employee satisfaction and convenience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As experienced vending services providers in Dallas TX, we understand that every workplace is unique. Whether you need healthy snack options, gourmet coffee selections, or a mix of traditional favorites, we customize our offerings to match your team's preferences and dietary requirements.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Advanced Technology Integration</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our modern vending machines feature cutting-edge technology including contactless payment systems, real-time inventory tracking, and mobile app integration. We leverage data analytics to optimize product selection and ensure your machines are always stocked with your team's favorite items.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Sustainable and Energy-Efficient</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All our vending equipment meets the highest energy efficiency standards, reducing your carbon footprint while lowering operating costs. We prioritize eco-friendly packaging and work with suppliers who share our commitment to sustainability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Flexible Service Plans</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a small office of 20 employees or a large corporate campus with thousands, we have flexible service plans to fit your needs and budget. Our vending services in Dallas TX include free machine placement, regular restocking, and comprehensive maintenance with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section class="about_section layout_padding iframe">
  <div class="container">
    <div class="heading_container heading_center">
      <h2>Know More Us</h2>
    </div>
 
    <!-- One Big Grid Box -->
    <div class="iframe-grid-box">
      <div class="iframe-grid">
        <iframe 
          src="https://docs.google.com/document/d/e/2PACX-1vQnMt60Oy8xuf3N0n_sFyLhV8LA8r7Vo03rLQS3DgdJSGKtvVrvaC5ZKA5NAGsXhAimLbrxv0UrDejc/pub?embedded=true%22
          frameborder="0">
        </iframe>
 
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vSuctZJDgrErUcWFA94Wg6wc0YSbpVWl89L2sztQ2B-SciU-a1r3f16xkpvXEyB-fiSezbgsxhwNzbB/pubembed?start=false&loop=false&delayms=3000%22
          frameborder="0" allowfullscreen>
        </iframe>
 
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSF4BoVrsegqaYm97e7JivRAOVY7J_yIchW_ZtZh-N2Ktfd6ot-QC--ayFGOtgsqy6tNWcuFBf1x20h/pubhtml?widget=true&headers=false%22
          frameborder="0">
        </iframe>
 
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1OMZJUj2f3Q_EiO-_V5v07FrgN8-ZkeA&ehbc=2E312F"
          frameborder="0">
        </iframe>
      </div>
    </div>
  </div>
</section>
 
<style>
/* Wrap the entire grid in one box */
.iframe-grid-box {
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background: #fff;
  margin-top: 20px;
}
 
/* Grid layout inside the box */
.iframe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 columns */
  gap: 20px;
}
 
.iframe-grid iframe {
  width: 100%;
  height: 400px;
  border: none; /* no individual borders */
  border-radius: 6px;
}
 
/* Responsive for mobile */
@media (max-width: 768px) {
  .iframe-grid {
    grid-template-columns: 1fr; /* stack in 1 column */
  }
}
</style>
  

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Why Dallas Businesses Choose Delio Vending
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Reliability You Can Trust</h3>
                <p className="text-muted-foreground">
                  With over 15 years serving Dallas businesses, we've built our reputation on consistent, dependable service. Our proactive maintenance approach ensures 99.9% uptime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Quality Products</h3>
                <p className="text-muted-foreground">
                  We partner with leading brands and local suppliers to offer the freshest, highest-quality snacks, beverages, and coffee products available in the Dallas market.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Local Dallas Team</h3>
                <p className="text-muted-foreground">
                  Our entire team is based right here in Dallas, TX. We understand local preferences, provide rapid service response, and are invested in our community's success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">            
            Ready to Upgrade Your Break Room?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Dallas businesses who trust Delio Vending and Coffee Services for their workplace refreshment needs. Contact us today for a free consultation and custom quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Request Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Delio Vending</h3>
              <p className="text-muted-foreground">
                Premier vending services and coffee solutions throughout Dallas, TX.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <p className="text-muted-foreground">
                Serving all of Dallas, TX and surrounding areas with premium vending services.
              </p>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>&copy; 2025 Delio Vending and Coffee Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
