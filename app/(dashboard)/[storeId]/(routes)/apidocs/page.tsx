import { ApiAlert } from "@/components/ui/api-alert";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const ApiDocs = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="API" description="Documentation" />
      </div>
      <Separator />
      <Separator />
      <ApiAlert
        title="Store Info"
        description="/API/{store_id}"
        variant="public"
      />
    </>
  );
};

export default ApiDocs;
