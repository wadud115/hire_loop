"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Label, TextField } from "@heroui/react";
import { Eye, EyeOff, UserRound, Mail, LockKeyhole } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password, confirmPassword } = formData;

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: authError } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (authError) {
        setError(authError.message || "Unable to create your account.");
        return;
      }

      setSuccess("Account created successfully!");

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/40 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
       
        <Link href="/" className="mb-8 block text-center text-3xl font-bold tracking-tight">
          <span className="text-indigo-500">Hire</span>
          <span className="text-zinc-900 dark:text-white">Loop</span>
        </Link>

        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Join HireLoop and find your next opportunity.
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
              Full Name
            </Label>
            <div className="relative">
              <UserRound className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <Input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="         Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full"
                isRequired
              />
            </div>
          </TextField>

         
          <TextField className="w-full">
            <Label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="         you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
                isRequired
              />
            </div>
          </TextField>

       
          <TextField className="w-full">
            <Label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="         At least 8 characters"
                value={formData.password}
                onChange={handleChange}
                className="w-full"
                isRequired
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </TextField>

          <TextField className="w-full">
            <Label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Confirm Password
            </Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <Input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="         Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full"
                isRequired
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            isDisabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </form>

  
        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          >
            Sign in
          </Link>
        </p>

        <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </main>
  );
}
