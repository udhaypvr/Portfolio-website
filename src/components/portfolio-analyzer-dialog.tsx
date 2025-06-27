"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { analyzePortfolioAction } from "@/app/actions";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  portfolioContent: z
    .string()
    .min(50, { message: "Please provide at least 50 characters to analyze." })
    .max(2000, { message: "Content must be less than 2000 characters." }),
});

export function PortfolioAnalyzerDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioContent: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setSuggestions(null);
    const result = await analyzePortfolioAction(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setSuggestions(result.data.suggestions);
    } else {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description:
          result.error || "An unexpected error occurred. Please try again.",
      });
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      form.reset();
      setSuggestions(null);
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary flex items-center">
            <Sparkles className="mr-2 text-accent" />
            AI Portfolio Analyzer
          </DialogTitle>
          <DialogDescription className="font-body">
            Paste your project description below. Our AI will provide
            suggestions to make it more appealing to clients.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="portfolioContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body">
                    Project Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Developed a full-stack e-commerce platform using React and Node.js..."
                      className="min-h-[150px] font-body"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                disabled={isLoading}
                className="font-body bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Get Suggestions"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>

        {suggestions && (
          <div className="mt-6 p-4 bg-secondary rounded-md border">
            <h4 className="font-headline text-lg font-semibold text-primary mb-2">
              Suggestions:
            </h4>
            <div className="font-body text-sm whitespace-pre-wrap prose prose-sm max-w-none">
              {suggestions}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
