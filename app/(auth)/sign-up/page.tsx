"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Lottie from "lottie-react";

export default function LoginContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimpass, setConfimpass] = useState("");
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lotties/login.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Error loading Lottie JSON:", err));
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="flex bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] overflow-hidden max-w-5xl w-full">
        
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-center text-3xl font-extrabold text-purple-800">
            Welcome Back!
          </h1>
          <p className="text-center text-gray-600 mt-2 text-sm">
            Please enter your credentials to access your account
          </p>

          <form className="mt-8 space-y-5 flex flex-col items-center">
            <div className="flex flex-col space-y-1 w-[85%]">
              <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Good name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-gray-400 px-2 py-2 border text-sm"
              />
            </div>

            <div className="flex flex-col space-y-1 w-[85%]">
              <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-gray-400 px-2 py-2 border text-sm"
              />
            </div>

            <div className="flex flex-col space-y-1 w-[85%]">
              <Label htmlFor="password" className="text-gray-700 text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-gray-400 px-2 py-2 border text-sm"
              />
            </div>

            <div className="flex flex-col space-y-1 w-[85%]">
              <Label htmlFor="confirm-password" className="text-gray-700 text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="*********"
                value={confimpass}
                onChange={(e) => setConfimpass(e.target.value)}
                className="border-gray-300 focus:ring-2 focus:ring-gray-400 px-2 py-2 border text-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-50 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 transition-colors duration-200"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-blue-800 font-medium hover:underline transition-all duration-300"
            >
              Sign-In
            </Link>
          </p>
        </div>

        <div className="w-1/2 bg-purple-50 flex justify-center items-center p-8">
          {animationData ? (
            <Lottie animationData={animationData} loop autoplay className="w-[400px] h-[400px]" />
          ) : (
            <p className="text-gray-500">Loading animation...</p>
          )}
        </div>
      </div>
    </div>
  );
}
