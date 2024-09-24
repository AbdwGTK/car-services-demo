import { useState } from "react";

function UpdatePartForm() {
  const [formData, setFormData] = useState({
    partId: "",
    name: "",
    partNumber: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `https://localhost:7100/parts/${formData.partId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      alert("Part updated successfully!");
    } else {
      alert("Failed to update part.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white shadow-md rounded-md"
    >
      <input
        name="partId"
        value={formData.partId}
        onChange={handleChange}
        placeholder="Part ID"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        name="partNumber"
        value={formData.partNumber}
        onChange={handleChange}
        placeholder="Part Number"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Update Part
      </button>
    </form>
  );
}

export default UpdatePartForm;
