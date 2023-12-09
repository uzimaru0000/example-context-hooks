import { Submit } from "../../_components/Submit";
import { UseSubmitProvider } from "../_lib/submit";

const Page = () => {
  return (
    <UseSubmitProvider>
      <Submit />
    </UseSubmitProvider>
  );
};

export default Page;
