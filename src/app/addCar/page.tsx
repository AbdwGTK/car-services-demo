"use client";
import { useState } from "react";

function CreateCarForm() {
  const [formData, setFormData] = useState({
    driver: "",
    owner: "",
    make: "",
    model: "",
    year: "",
    vin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://localhost:7100/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Car created successfully!");
    } else {
      alert("Failed to create car.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1>Create a New Car</h1>
      </header>
      <div className="flex flex-col items-center flex-grow bg-gray-100">
        <div className="flex-grow flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-4 bg-white shadow-md rounded-lg"
          >
            <div className="mb-4">
              <input
                name="driver"
                value={formData.driver}
                onChange={handleChange}
                placeholder="Driver"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Owner"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                name="make"
                value={formData.make}
                onChange={handleChange}
                placeholder="Make"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Model"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                placeholder="VIN"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Car
            </button>
          </form>
        </div>
        <footer className="bg-gray-200 text-center p-4 w-full">
          <p>&copy; 2023 Car Services</p>
        </footer>
      </div>
    </div>
  );
}

export default CreateCarForm;
