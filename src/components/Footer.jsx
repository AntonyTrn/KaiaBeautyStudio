import React from "react";

const Footer = () => (
  <footer className="bg-tan text-charcoal text-center py-6 mt-16 border-t border-gray-200">
    <div className="text-sm space-y-2">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p>📍 6282 Irvine Blvd Ste 32, Irvine, CA 92620</p>
      <p>📞 <a href="tel:+1234567890" className="text-rose underline">(123) 456-7890</a></p>
      <p>📧 <a href="mailto:hello@kaiabeautystudio.com" className="text-rose underline">hello@kaiabeautystudio.com</a></p>
      <p>📱 <a href="https://instagram.com/kaiabeautystudio" className="text-rose underline">@kaiabeautystudio</a></p>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Kaia Beauty Studio</p>
      <p className="text-gray-500">All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;