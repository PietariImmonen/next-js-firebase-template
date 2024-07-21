import LogInCard from "@/components/login/login-card";
import { isUserAuthenticated } from "@/lib/firebase/firebase-admin";
import { redirect } from "next/navigation";

const SignIn = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <LogInCard />
    </div>
  );
};
export default SignIn;
