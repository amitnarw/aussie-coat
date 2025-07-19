"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { handleGenerateImages } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "./ui/card";

const formSchema = z.object({
  description: z.string().min(10, {
    message: "Please enter a more detailed description (at least 10 characters).",
  }).max(500, {
    message: "Description cannot exceed 500 characters."
  }),
});

export default function Visualizer() {
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setImages([]);
    startTransition(async () => {
      const result = await handleGenerateImages(values);
      if (result.success && result.data) {
        setImages(result.data.images);
      } else {
        toast({
          variant: "destructive",
          title: "Image Generation Failed",
          description: result.error,
        });
      }
    });
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A bright, modern kitchen with white cabinets, a navy blue island, and lots of natural light."
                        rows={4}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full" size="lg">
                {isPending ? "Generating..." : "Generate Ideas"}
                {!isPending && <Sparkles className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isPending || images.length > 0) && (
        <div>
            <h3 className="text-2xl font-bold text-center mb-6 font-headline">Inspiration Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isPending
                ? Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index}>
                        <CardContent className="p-0">
                            <Skeleton className="w-full h-64" />
                        </CardContent>
                    </Card>
                ))
                : images.map((src, index) => (
                    <Card key={index} className="overflow-hidden group">
                        <CardContent className="p-0">
                        <Image
                            src={src}
                            alt={`Generated inspiration image ${index + 1}`}
                            width={512}
                            height={512}
                            unoptimized
                            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}
