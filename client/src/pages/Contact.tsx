import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or want to place a bulk order? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">
                We are available Monday to Saturday, 9am to 6pm.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-muted-foreground">Meham , Rohtak , India - 124112</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">funcaari@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">+91 74049 49951</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Inquiry about bulk order" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[120px]" />
                </div>

                <Button className="w-full text-lg" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
