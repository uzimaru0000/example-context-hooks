import { NameForm } from "../_components/NameForm";
import { EmailForm } from "../_components/EmailForm";
import { PasswordForm } from "../_components/PasswordForm";
import { AddressForm } from "../_components/AddressFrom";

const Page = () => {
  return (
    <>
      <NameForm />
      <EmailForm />
      <PasswordForm />
      <AddressForm />
    </>
  );
};

export default Page;
