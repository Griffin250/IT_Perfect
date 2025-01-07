import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";
import Button from "@/app/components/reusable/Button";

export default function Subscribe() {
  return (
    <div className=" flex w-[94vw] flex-col items-center justify-center p-6 gap-4">
      <Title title="Are you ready to start your project?" />
      <SubTitle text="Let’s discuss about your amazing idea." />
      <span className="font-light text-sm">
        Don&apos;t worry, it is secure and confidential.
      </span>
      <div className="flex flex-row my-6 gap-4 w-full md:w-1/2">
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          className="py-4 px-3 lg:px-12 rounded-[1.563rem] w-2/3 shadow-2xl outline-none placeholder:text-primary text-primary"
        />
        <Button className="w-1/3 rounded-[1.563rem]">Subscribe</Button>
      </div>
    </div>
  );
}
