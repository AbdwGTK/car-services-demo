"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Service } from "./types";

export default function Home() {
  const router = useRouter();
  const [serviceHistory, setServiceHistory] = useState<Service[]>([]);

  useEffect(() => {
    // Fetch the service history data
    async function fetchServiceHistory() {
      try {
        const response = await fetch("https://localhost:7100/services");
        const data = await response.json();
        setServiceHistory(data);
      } catch (error) {
        console.error("Error fetching service history:", error);
      }
    }

    fetchServiceHistory();
  }, []);

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
        <h3 className="text-lg font-bold mt-8">Service History</h3>
        <ul className="mt-4">
          {serviceHistory.length > 0 ? (
            serviceHistory.map((service) => (
              <li key={service.serviceId} className="border-b py-2">
                <p>
                  <strong>Car:</strong> {service.carId}
                </p>
                <p>
                  <strong>Description:</strong> {service.description}
                </p>
              </li>
            ))
          ) : (
            <p>No service history available.</p>
          )}
        </ul>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p className="text-center">
          &copy; 2024 Car Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
