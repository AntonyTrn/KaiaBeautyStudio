import React, { useState } from "react";

const BookNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="pt-24 px-6 text-charcoal bg-blush min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
      {submitted ? (
        <p className="text-green-700">Booking confirmed!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input className="w-full p-2 bg-white border rounded" placeholder="Name" required />
          <input className="w-full p-2 bg-white border rounded" type="email" placeholder="Email" required />
          <select className="w-full p-2 bg-white border rounded" required>
            <option value="">Select Service</option>
            <option>Facial</option>
            <option>Consultation</option>
          </select>
          <button className="bg-rose px-4 py-2 text-white rounded hover:bg-pink-700">Book Now</button>
        </form>
      )}
    </section>
  );
};

export default BookNow;