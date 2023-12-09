"use client";

import { PropsWithChildren } from "react";
import {
  UseSubmit,
  UseSubmitProvider as BaseProvider,
} from "../../_lib/submit";
import { useFormContext } from "react-hook-form";
import { FormValues } from "./form";

const useSubmit: UseSubmit = () => {
  const { handleSubmit, formState: { isValid } } = useFormContext<FormValues>();

  const submit = handleSubmit(async (value) => {
    console.log("basic submit");
    console.log(value);
  });

  return {
    isValid,
    onSubmit: submit,
  };
};

export const UseSubmitProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <BaseProvider hooks={useSubmit}>{children}</BaseProvider>;
};
