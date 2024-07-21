import LogInCard from "@/components/log-in/login-card";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <LogInCard />
      <Link href={"/sign-up"} className="mt-2 underline">
        Don't have an account? Sign up!
      </Link>
    </div>
  );
};
export default LogIn;
