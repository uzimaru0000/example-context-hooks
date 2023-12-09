"use client";

import { Button } from "@/components/ui/button";
import { useSubmit } from "../_lib/submit";

export const Submit = () => {
  const { isValid, onSubmit } = useSubmit();

  return (
    <Button
      className="w-full"
      type="submit"
      onClick={onSubmit}
      disabled={!isValid}
    >
      Register
    </Button>
  );
};
