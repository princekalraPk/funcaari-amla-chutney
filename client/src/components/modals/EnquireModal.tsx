import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Product } from "@/lib/data";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  quantity: z.string().min(1, "Please select a quantity"),
  address: z.string().min(10, "Address is required"),
});

interface EnquireModalProps {
  product: Product;
  trigger?: React.ReactNode;
}

export default function EnquireModal({ product, trigger }: EnquireModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      quantity: "1",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a backend
    console.log("Enquiry submitted:", { product: product.name, ...values });
    
    toast({
      title: "Enquiry Sent!",
      description: `We have received your enquiry for ${values.quantity} jar(s) of ${product.name}. We will contact you shortly.`,
    });
    
    setOpen(false);
    form.reset();
    emailjs.send(
      "service_cragrs2",
      "template_8tmvzza",
      {
        to_email: "funcaari.orders@gmail.com", // 👈 or another email
        product: product.name,
        quantity: values.quantity,
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        message: "",
      },
      "3gQaepZE1fcTvycRc"
    )
    .then(() => {
      alert("Order submitted successfully! We’ll contact you soon.");
    })
    .catch(() => {
      alert("Failed to send order. Please try again.");
    });

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button className="w-full">Enquire Now</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">Order Enquiry</DialogTitle>
          <DialogDescription>
            Complete the form below to enquire about <strong>{product.name}</strong>. We'll get back to you with payment details.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 Jar</SelectItem>
                      <SelectItem value="2">2 Jars</SelectItem>
                      <SelectItem value="3">3 Jars</SelectItem>
                      <SelectItem value="5">5 Jars</SelectItem>
                      <SelectItem value="10">10+ Jars (Bulk)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Full address with pincode" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Send Enquiry</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
