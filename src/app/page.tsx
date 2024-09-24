"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Car Services</h1>
      </header>
      <main className="flex-1 p-4">
        <h2 className="text-xl font-bold">Welcome to Car Services</h2>
        <p className="mt-4">Issue a car service request.</p>
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => router.push("/services")}
        >
          Create New Service Request
        </button>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p className="text-center">
          &copy; 2023 Car Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
