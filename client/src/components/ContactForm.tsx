import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema } from "@shared/schema";
import type { InsertContactRequest } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactRequest) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border border-slate-100 max-w-xl mx-auto relative z-10 -mt-20 rounded-sm">
      <h3 className="text-3xl font-display text-primary mb-2">Get in Touch</h3>
      <p className="text-slate-500 mb-8">Send us a message and our team will respond shortly.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-widest text-slate-400">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="border-0 border-b border-slate-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-widest text-slate-400">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" {...field} className="border-0 border-b border-slate-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-widest text-slate-400">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="How can we help you?" {...field} className="border-0 border-b border-slate-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent min-h-[100px] resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary/90 text-white uppercase tracking-widest py-6 rounded-none text-xs font-bold transition-all duration-300"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
