"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Lottie from "lottie-react";

export default function SimpleWhiteContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

                    <form className="mt-4 flex flex-col items-center space-y-6">
                        <div className="flex flex-col w-[80%]">
                            <Label
                                htmlFor="email"
                                className="text-gray-700 text-sm font-medium mt-3"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 border-gray-300 w-70 rounded border text-sm"
                            />
                        </div>

                        <div className="flex flex-col w-[80%] ">
                            <Label
                                htmlFor="password"
                                className="text-gray-700 text-sm font-medium"
                            >
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 border-gray-300 rounded w-70 text-sm "
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-[50%] bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                        >

                            Sign In
                        </Button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Don't have an account?{" "}
                        <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
                            <Link href="/sign-up">Sign-Up</Link>
                        </span>
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
