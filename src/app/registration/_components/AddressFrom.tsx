"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export const AddressForm = () => {
  const { register } = useFormContext<{ address: string }>();

  return (
    <div className="space-y-2">
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        placeholder="123 Main St"
        required
        {...register("address")}
      />
      <Badge className="bg-green-500 text-white px-2 py-1 rounded-md" />
    </div>
  );
};
