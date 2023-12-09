"use client";

import { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { FormProvider as BaseFormProvider } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormValues = z.infer<typeof schema>;

const schema = z
  .object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const methods = useForm<FormValues>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  return <BaseFormProvider {...methods}>{children}</BaseFormProvider>;
};
