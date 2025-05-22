import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => (
  <>

    <section className="pt-28 px-6 bg-tan text-charcoal min-h-screen flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6"
      >
        Glow Like Never Before
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg max-w-xl mb-6"
      >
        Personalized skin treatments that feel like luxury and deliver real results.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="px-6 py-3 bg-rose text-white rounded shadow hover:bg-pink-700 transition"
      >
        Book Now
      </motion.button>
    </section>

<section className="pt-4 px-6 bg-tan text-charcoal min-h-screen flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-blush border border-gray-200 rounded-2xl shadow-lg p-8 max-w-xl w-full"
  >
    <h2 className="text-2xl font-bold mb-4 text-rose text-center">About Kaia Beauty Studio</h2>
    <p className="mb-4 text-sm text-gray-700 text-center">
      At Kaia Beauty Studio, we believe skincare is not just a luxury, but a lifestyle.
      Our curated skin rituals are designed to leave you feeling refreshed, radiant,
      and confident. We specialize in customized, results-driven facials tailored to
      your skin’s needs.
    </p>

    <h3 className="text-lg font-semibold mt-6 mb-2 text-center">📍 Hours & Location</h3>
    <p className="text-sm text-center">
      <a
        href="https://www.google.com/maps/place/6282+Irvine+Blvd+%2332,+Irvine,+CA+92620"
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose underline"
      >
        6282 Irvine Blvd #32, Irvine, CA 92620
      </a>
    </p>
    <ul className="mt-2 space-y-1 text-xs text-center text-gray-600">
      <li>Monday: 12 PM – 9 PM</li>
      <li>Tuesday: 12 PM – 9 PM</li>
      <li>Wednesday: 12 PM – 9 PM</li>
      <li>Thursday: Closed</li>
      <li>Friday: 1 PM – 9 PM</li>
      <li>Saturday: 2 PM – 9 PM</li>
      <li>Sunday: 12 PM – 9 PM</li>
    </ul>

    <h3 className="text-lg font-semibold mt-6 mb-1 text-center">❗ Cancellation Policy</h3>
    <p className="text-xs text-center text-gray-600">
      A 35% cancellation fee will be charged for no-show appointments.
    </p>
  </motion.div>
</section>

  </>
);

export default Home;
