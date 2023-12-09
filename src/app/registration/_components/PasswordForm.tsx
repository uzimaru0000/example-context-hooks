"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useFormContext } from "react-hook-form";

export const PasswordForm = () => {
  const { register } = useFormContext<{
    password: string;
    passwordConfirmation: string;
  }>();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          required
          type="password"
          {...register("password")}
        />
        <Badge className="bg-red-500 text-white px-2 py-1 rounded-md" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          required
          type="password"
          {...register("passwordConfirmation")}
        />
        <Badge className="bg-red-500 text-white px-2 py-1 rounded-md" />
      </div>
    </>
  );
};
