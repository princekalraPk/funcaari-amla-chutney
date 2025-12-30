import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: December 30, 2024
          </p>

          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you visit Funcaari, we may collect personal information such as your name, email address, phone number, and delivery address when you voluntarily provide it through our enquiry forms or order placement.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you about your orders or enquiries.</li>
            <li>Improve our products and website experience.</li>
            <li>Send promotional emails (only if you opt-in).</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">4. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect some website functionality.
          </p>

          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@funcaari.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
