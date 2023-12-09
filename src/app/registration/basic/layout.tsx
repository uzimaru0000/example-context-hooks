import { CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { PropsWithChildren } from "react";
import { FormProvider } from "./_lib/form";

type Props = {
  header: React.ReactNode;
  footer: React.ReactNode;
};
const Layout: React.FC<PropsWithChildren<Props>> = ({
  header,
  children,
  footer,
}) => {
  return (
    <FormProvider>
      <CardHeader>{header}</CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </FormProvider>
  );
};

export default Layout;
