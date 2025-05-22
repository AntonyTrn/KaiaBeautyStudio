import React from "react";

const About = () => (
  <section className="pt-24 px-6 bg-white text-charcoal min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">About Kaia Beauty Studio</h2>
      <p className="mb-6">
        At Kaia Beauty Studio, we believe skincare is not just a luxury, but a lifestyle. Our curated skin rituals are designed to leave you feeling refreshed, radiant, and confident. We specialize in customized, results-driven facials tailored to your skin’s needs.
      </p>

      <h3 className="text-2xl font-semibold mt-10 mb-4">📍 Hours & Location</h3>
<a
  href="https://www.google.com/maps/place/6282+Irvine+Blvd+%2332,+Irvine,+CA+92620"
  target="_blank"
  rel="noopener noreferrer"
  className="text-rose underline"
>
  6282 Irvine Blvd #32, Irvine, CA 92620
</a>
      <ul className="mt-2 space-y-1 text-sm">
        <li><strong>Monday:</strong> 12 PM – 9 PM</li>
        <li><strong>Tuesday:</strong> 12 PM – 9 PM</li>
        <li><strong>Wednesday:</strong> 12 PM – 9 PM</li>
        <li><strong>Thursday:</strong> Closed</li>
        <li><strong>Friday:</strong> 1 PM – 9 PM</li>
        <li><strong>Saturday:</strong> 2 PM – 9 PM</li>
        <li><strong>Sunday:</strong> 12 PM – 9 PM</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-10 mb-2">❗ Cancellation Policy</h3>
      <p className="text-sm">
        A 35% cancellation fee will be charged for no-show appointments.
      </p>
    </div>
  </section>
);

export default About;