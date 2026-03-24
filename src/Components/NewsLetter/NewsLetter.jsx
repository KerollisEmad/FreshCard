export default function NewsLetter() {
  return (
    <>
      <section className="bg-primary-50/70 py-20 px-4 text-center">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 mb-6">
            Stay updated with our latest offers, recipes and health tips
          </p>

          <form className="max-w-md mx-auto flex rounded overflow-hidden border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 focus:outline-none text-sm"
            />
          <button
            type="button"
            className="bg-green-600 text-white px-6 py-2 text-sm font-semibold hover:bg-green-700 transition"
          >
            Subscribe
          </button>
          </form>
        </div>
      </section>
    </>
  );
}
