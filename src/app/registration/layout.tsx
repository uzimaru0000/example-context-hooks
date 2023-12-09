import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Card className="w-full max-w-lg mx-auto my-20 p-10">{children}</Card>;
};

export default Layout;
