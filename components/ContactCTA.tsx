export default function ContactCTA() {
  return (
    <section className="py-20 bg-maroon text-white text-center">
      <h2 className="text-3xl font-serif mb-4">Get in Touch</h2>
      <p className="mb-6">
        Interested in partnering or learning more about our offerings?
      </p>
      <a
        href="/contact"
        className="inline-block px-6 py-3 bg-gold text-maroon font-semibold rounded-lg hover:bg-yellow-500 transition"
      >
        Contact Us
      </a>
    </section>
  );
}
