"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import {
  createUserWithEmailAndPasswordAuth,
  signInWithEmailAndPasswordAuth,
  signInWithGoogle,
  signOut,
} from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

export default function SignInCard() {
  //Using formik for handling the form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await createUserWithEmailPassword(values.email, values.password);
    },
  });
  const router = useRouter();
  /**
   * Function for signing in with Google
   */
  const signWithGoogle = async () => {
    const isOk = await signInWithGoogle();

    if (isOk) router.push("/dashboard");
  };

  /**
   * Function for signing in with email and password
   */
  const createUserWithEmailPassword = async (
    password: string,
    email: string,
  ) => {
    const isOk = await createUserWithEmailAndPasswordAuth(password, email);

    if (isOk) router.push("/dashboard");
  };
  return (
    <Card className="w-full max-w-md sm:mx-0 mx-4">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          Enter your email and password to sign up.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>
          <Button className="w-full mt-4" type="submit">
            Log in
          </Button>
        </form>
      </CardContent>
      <Separator className="mb-4" />
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signWithGoogle()}
        >
          <ChromeIcon className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </CardFooter>
    </Card>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
