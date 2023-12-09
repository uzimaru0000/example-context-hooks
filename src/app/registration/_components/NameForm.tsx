"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export const NameForm = () => {
  const { register } = useFormContext<{
    firstName: string;
    lastName: string;
  }>();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="first-name">First name</Label>
        <Input
          id="first-name"
          placeholder="John"
          required
          {...register("firstName")}
        />
        <Badge className="bg-green-500 text-white px-2 py-1 rounded-md" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input
          id="last-name"
          placeholder="Doe"
          required
          {...register("lastName")}
        />
        <Badge className="bg-green-500 text-white px-2 py-1 rounded-md" />
      </div>
    </div>
  );
};
