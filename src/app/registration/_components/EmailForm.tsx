"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useFormContext } from "react-hook-form";

export const EmailForm = () => {
  const { register } = useFormContext<{ email: string }>();

  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        placeholder="john.doe@example.com"
        required
        type="email"
        {...register("email")}
      />
      <Badge className="bg-green-500 text-white px-2 py-1 rounded-md" />
    </div>
  );
};
