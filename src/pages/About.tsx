import Navigation from "@/components/Navigation";
import aboutImage from "@/assets/about-team.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, TrendingUp, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            ABOUT DELIO VENDING
          </h1>
          <p className="text-xl text-foreground">
            Dallas's trusted partner for vending and coffee services since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2008, Delio Vending and Coffee Services began with a simple mission: to transform the workplace break room experience for Dallas businesses. What started as a small family-owned operation with a handful of vending machines has grown into one of the most trusted vending services providers in Dallas TX, serving hundreds of satisfied clients across the metroplex.
              </p>
              <p>
                Our founder, Michael Delio, recognized that traditional vending services were falling short of what modern businesses needed. Employees deserved better options than stale snacks and lukewarm coffee. Companies needed partners who were responsive, reliable, and truly invested in their success. From these insights, Delio Vending was born with a commitment to excellence that continues to drive everything we do today.
              </p>
              <p>
                Over the years, we've expanded our services, upgraded our technology, and grown our team—but our core values remain unchanged. We still treat every client like family, respond to service calls with urgency, and continuously innovate to provide the best possible vending solutions. Our deep roots in the Dallas community have given us unique insights into what local businesses need, and we're proud to have played a role in improving workplace satisfaction for thousands of Dallas employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from product quality to customer support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with transparency and honesty, building trust through consistent, reliable service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously adopt new technologies and methods to provide cutting-edge vending solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Handshake className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Partnership</h3>
                <p className="text-muted-foreground">
                  We view our clients as partners, working together to create the best possible break room experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">
              What Sets Us Apart
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Local Expertise, Personal Service</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unlike national chains with distant call centers, Delio Vending is a locally-owned Dallas business. When you call us, you speak with someone who knows your name and your location. Our service technicians live in the Dallas area and can respond quickly to any needs. This local presence means we understand Dallas business culture, traffic patterns, and the unique needs of our community.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Technology-Driven Operations</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've invested heavily in technology to provide superior vending services in Dallas TX. Our machines feature remote monitoring systems that alert us to potential issues before they affect your employees. Real-time inventory tracking ensures we know exactly when to restock, preventing empty machines. Our client dashboard gives you visibility into usage patterns, helping you understand what your team loves most.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Customized Product Selection</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't believe in one-size-fits-all vending. Every client receives a customized product mix based on their team's preferences, dietary needs, and budget. We conduct regular reviews to adjust offerings based on sales data and feedback. Whether your team prefers healthy options, international snacks, or classic favorites, we curate a selection that keeps everyone happy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Commitment to Sustainability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Environmental responsibility is core to our operations. All our vending machines are Energy Star certified, reducing electricity consumption by up to 40%. We partner with suppliers who use sustainable packaging and support fair trade practices. Our route optimization reduces fuel consumption, and we actively work to minimize waste through efficient inventory management.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Employee Satisfaction Focus</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research shows that quality break room amenities significantly impact employee satisfaction and retention. We view our role as partners in your employee engagement strategy. A well-stocked break room with quality coffee and snacks shows employees they're valued, boosts morale, and can even reduce absenteeism. We take pride in contributing to positive workplace cultures across Dallas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our success is built on the dedication of our exceptional team. From our experienced route drivers to our responsive customer service representatives, every Delio team member is committed to delivering outstanding service. We invest in ongoing training to ensure our staff stays current with industry best practices and technology advances.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What truly sets our team apart is their genuine care for our clients. They take pride in their work and understand that they're not just servicing machines—they're supporting the daily routines and satisfaction of thousands of Dallas employees. This customer-first mentality is evident in everything we do, from the friendly greetings during service visits to the rapid response when issues arise.
            </p>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Community Involvement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a Dallas-based company, we believe in giving back to the community that has supported our growth. We're proud sponsors of local youth sports programs, contribute to Dallas food banks, and partner with schools on educational initiatives. Our commitment to Dallas goes beyond business—it's about being good neighbors and corporate citizens.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We also support other local businesses by sourcing products from Dallas-area suppliers whenever possible. This not only ensures freshness but also keeps dollars circulating in our local economy. When you choose Delio Vending and Coffee Services, you're supporting a business that reinvests in the Dallas community.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Delio Vending and Coffee Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
