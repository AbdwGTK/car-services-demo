import { useState } from "react";

function UpdateCarForm() {
  const [formData, setFormData] = useState({
    carId: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://localhost:7100/cars/${formData.carId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      alert("Car updated successfully!");
    } else {
      alert("Failed to update car.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <input
        name="carId"
        value={formData.carId}
        onChange={handleChange}
        placeholder="Car ID"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="driver"
        value={formData.driver}
        onChange={handleChange}
        placeholder="Driver"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="owner"
        value={formData.owner}
        onChange={handleChange}
        placeholder="Owner"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="make"
        value={formData.make}
        onChange={handleChange}
        placeholder="Make"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="model"
        value={formData.model}
        onChange={handleChange}
        placeholder="Model"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="vin"
        value={formData.vin}
        onChange={handleChange}
        placeholder="VIN"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Update Car
      </button>
    </form>
  );
}

export default UpdateCarForm;
