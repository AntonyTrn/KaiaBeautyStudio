import React from "react";

const services = [
  {
    title: "(Required) Virtual Consultation",
    price: "$0",
    duration: "20 min",
    description:
      "A complimentary virtual skincare consultation to ensure that every service is safe, customized, and aligned with your skin goals.",
  },
  {
    title: "The Green Glow Facial",
    deposit: "$30",
    price: "$120",
    duration: "60 min",
    description:
      "Rejuvenating facial with aromatherapy, double cleanse, enzyme exfoliation, lymphatic massage, jelly mask, and customized serums + SPF. Perfect for all skin types, especially dull & dehydrated.",
  },
  {
    title: "Detox and Purify Facial",
    deposit: "$30",
    price: "$140",
    duration: "75 min",
    description:
      "Deep-cleansing treatment with scrubber, extractions, high-frequency and LED. Ideal for oily, acne-prone, congested skin.",
  },
  {
    title: "Sensitive Skin Soothing Facial",
    deposit: "$30",
    price: "$120",
    duration: "60 min",
    description:
      "Anti-inflammatory facial with galvanic therapy, gentle exfoliation, and hydrogel mask to soothe and hydrate sensitive skin.",
  },
  {
    title: "Anti-aging Facial",
    deposit: "$30",
    price: "$160",
    duration: "90 min",
    description:
      "Uses peptides, antioxidants, sculptural massage, firming mask and LED to lift and rejuvenate. Great for fine lines and wrinkles.",
  },
  {
    title: "Buccal TMJ Facial",
    deposit: "$30",
    price: "$165",
    duration: "60 min",
    description:
      "Intraoral buccal massage and TMJ release to contour and relieve jaw tension. Includes LED, neck & scalp massage.",
  },
  {
    title: "Myofascial Release Facial",
    deposit: "$30",
    price: "$200",
    duration: "80 min",
    description:
      "No oil ritual using myofascial techniques and LED. Promotes lymphatic flow, relieves tension. Not for rosacea skin.",
  },
  {
    title: "Gua Sha Cupping Facial",
    deposit: "$30",
    price: "$145",
    duration: "50 min",
    description:
      "Gua Sha & cupping with botanical oils to lift, depuff, and improve circulation. Includes mask & LED.",
  },
  {
    title: "European Sculptural Facial",
    deposit: "$40",
    price: "$200",
    duration: "75 min",
    description:
      "Massage-focused facial with exfoliation, mask, and LED for lifted skin. Not suitable for rosacea skin.",
  },
  {
    title: "Microcurrent Facial",
    deposit: "$30",
    price: "$130",
    duration: "60 min",
    description:
      "Low-voltage currents to lift, tone, and stimulate collagen. Recommended as a series. Great for sensitive skin.",
  },
  {
    title: "No Needle Mesotherapy Facial",
    price: "$150",
    duration: "60 min",
    description:
      "Electroporation and microcurrent infuse serums deeply. Improves hydration, texture, acne, and pigmentation. Includes LED.",
  },
  {
    title: "Brightening Peel",
    deposit: "$30",
    price: "$140",
    duration: "75 min",
    description:
      "GlyMed+ brightening facial for pigmentation, sun damage, melasma and uneven skin tone.",
  },
  {
    title: "Blemish Control Peel",
    deposit: "$30",
    price: "$100",
    duration: "45 min",
    description:
      "Salicylic acid peel for oily, acne-prone skin. Clarifies without downtime.",
  },
  {
    title: "Gentle Renewal Peel",
    deposit: "$30",
    price: "$100",
    duration: "55 min",
    description:
      "Mandelic and Azelaic acid peel to brighten sensitive/rosacea skin without irritation.",
  },
  {
    title: "TCA Peel",
    deposit: "$30",
    price: "$100",
    duration: "45 min",
    description:
      "Medium-depth peel for wrinkles, sun damage, and scars. 3–7 days downtime required.",
  },
  {
    title: "Dermaplaning",
    deposit: "$30",
    price: "$100",
    duration: "60 min",
    description:
      "Dermaplaning with extractions and mask. Smoothes and brightens skin. Not for rosacea skin.",
  },
  {
    title: "Dermaplaning w/ Biorepeel",
    deposit: "$30",
    price: "$180+",
    duration: "75 min",
    description:
      "Includes dermaplaning, Biorepeel, jelly mask, massage, SPF. Great before events. Not for active acne.",
  },
  {
    title: "Microneedling with Exosomes",
    deposit: "$50",
    price: "$275+",
    duration: "100 min",
    description:
      "Advanced microneedling with stem-cell derived exosomes to repair and regenerate. Avoid if rosacea/sensitive.",
  },
  {
    title: "Microneedling with Salmon DNA",
    deposit: "$50",
    price: "$225+",
    duration: "100 min",
    description:
      "Microneedling with collagen-boosting salmon DNA. Great for firmness, tone, texture. Avoid if sensitive/rosacea.",
  },
  {
    title: "Oxygen Facial",
    deposit: "$30",
    price: "$150",
    duration: "60 min",
    description:
      "Oxygen infusion, hydrodermabrasion, and mask for glowing, hydrated skin. Perfect before events.",
  },
  {
    title: "Oxygen Therapy (Add-on)",
    price: "$50",
    duration: "10 min",
    description:
      "Pressurized oxygen with serum cocktail for instant glow.",
  },
  {
    title: "BioRepeel (Add-on)",
    price: "$80",
    duration: "10 min",
    description:
      "TCA no-peel for collagen boost & brightness. No downtime.",
  },
  {
    title: "No-needle Mesotherapy (Add-on)",
    price: "$40",
    duration: "10 min",
    description:
      "Electroporation boosts product penetration & rejuvenation. Area-based pricing.",
  },
  {
    title: "Hydrodermabrasion (Add-on)",
    price: "$65",
    duration: "20 min",
    description:
      "Water-based exfoliation to cleanse, hydrate & refresh skin.",
  },
  {
    title: "Ultrasonic Skin Scrubber (Add-on)",
    price: "$25",
    duration: "10 min",
    description:
      "Ultrasonic exfoliation to remove blackheads and refine skin texture.",
  },
];

const Services = () => {
  return (
    <section className="pt-24 px-6 bg-white text-charcoal min-h-screen">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-blush p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{service.description}</p>
            <div className="text-sm text-gray-600 space-y-1">
              {service.deposit && <p><strong>Deposit:</strong> {service.deposit}</p>}
              {service.price && <p><strong>Price:</strong> {service.price}</p>}
              {service.duration && <p><strong>Duration:</strong> {service.duration}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;