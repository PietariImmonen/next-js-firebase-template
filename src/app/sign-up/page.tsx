import SignUpCard from "@/components/sign-up/sign-up-card";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <SignUpCard />
      <Link href={"/log-in"} className="mt-2 underline">
        Already a user? Log in!
      </Link>
    </div>
  );
};
export default SignUp;
