"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function CreateServiceForm() {
  const [formData, setFormData] = useState({
    serviceId: "",
    carId: "",
    date: "",
    description: "",
    partsUsed: [{ partId: "" }],
  });

  const [cars, setCars] = useState([]);
  const [parts, setParts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the list of cars from the API
    const fetchCars = async () => {
      const response = await fetch("https://localhost:7100/cars");
      const data = await response.json();
      setCars(data);
    };
    fetchCars();

    // Fetch the list of parts from the API
    const fetchParts = async () => {
      const response = await fetch("https://localhost:7100/parts");
      const data = await response.json();
      setParts(data);
    };
    fetchParts();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "carId" && e.target.value === "new") {
      router.push("/addCar");
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePartsChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "partId" && e.target.value === "new") {
      router.push("/addParts");
      return;
    }
    const newPartsUsed = formData.partsUsed.map((part, i) => {
      if (i === index) {
        return { ...part, [e.target.name]: e.target.value };
      }
      return part;
    });
    setFormData({ ...formData, partsUsed: newPartsUsed });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create the service
    const response = await fetch("https://localhost:7100/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Service created successfully!");
    } else {
      alert("Failed to create service.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Create Service</h1>
      </header>
      <main className="flex-1 p-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 bg-white shadow-md rounded-md"
        >
          <input
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            placeholder="Service ID"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <select
            name="carId"
            value={formData.carId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.make} {car.model} ({car.year})
              </option>
            ))}
            <option value="new">Create a new car</option>
          </select>
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {formData.partsUsed.map((part, index) => (
            <div key={index} className="flex space-x-2">
              <select
                name="partId"
                value={part.partId}
                onChange={(e) => handlePartsChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a part</option>
                {parts.map((part) => (
                  <option key={part.id} value={part.id}>
                    {part.name} ({part.partNumber})
                  </option>
                ))}
                <option value="new">Create a new part</option>
              </select>
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Create Service
          </button>
        </form>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p className="text-center">
          &copy; 2023 Car Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default CreateServiceForm;
