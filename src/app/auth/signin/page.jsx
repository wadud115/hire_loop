
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Label, TextField } from "@heroui/react";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password } = formData;

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { error: authError } = await authClient.signIn.email({
        email: email.trim(),
        password,
        callbackURL:"/"
      });

      if (authError) {
        setError(
          authError.message || "Invalid email or password."
        );
        return;
      }

      setSuccess("Signed in successfully!");

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/40 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">

        <Link
          href="/"
          className="mb-8 block text-center text-3xl font-bold tracking-tight"
        >
          <span className="text-indigo-500">Hire</span>
          <span className="text-zinc-900 dark:text-white">Loop</span>
        </Link>

     
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to continue your HireLoop journey.
          </p>
        </div>

  
        {error && (
          <div
            role="alert"
            className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            {error}
          </div>
        )}

        
        {success && (
          <div
            role="status"
            className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
          >
            {success}
          </div>
        )}

   
        <form onSubmit={handleSubmit} className="space-y-5">

      
          <TextField className="w-full">
            <Label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </Label>

            <div className="relative">
            

              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </TextField>

         
          <TextField className="w-full">
            <div className="mb-2 flex items-center justify-between">
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </Label>

            
            </div>

            <div className="relative">
             

              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </TextField>

         
          <Button
            type="submit"
            isDisabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

       
        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          >
            Create an account
          </Link>
        </p>

        <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
