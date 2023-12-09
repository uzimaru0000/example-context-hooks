import { CardTitle, CardDescription } from "@/components/ui/card";

const Page = () => {
  return (
    <>
      <CardTitle className="text-3xl font-bold text-center">
        Registration Form
      </CardTitle>
      <CardDescription className="text-gray-500 dark:text-gray-400 text-center">
        Please fill in the form to create an account.
      </CardDescription>
    </>
  );
};

export default Page;
