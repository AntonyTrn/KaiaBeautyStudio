import React from "react";

const Portfolio = () => {
  const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];
  return (
    <section className="pt-24 px-6 bg-blush text-charcoal min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Studio Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`portfolio-${i}`} className="rounded shadow-md object-cover w-full h-60" />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;