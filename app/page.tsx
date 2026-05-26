export default function CraftMemoriesWebsite() {
  const categories = [
    {
      title: "Metal Casting",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      description: "Traditional handcrafted metal art with timeless elegance.",
    },
    {
      title: "Paintings",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
      description: "Beautiful handmade paintings inspired by culture and creativity.",
    },
    {
      title: "Tribal Jewellery",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
      description: "Authentic tribal jewellery crafted with heritage and detail.",
    },
    {
      title: "Bamboo Craft",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description: "Eco-friendly bamboo creations with artistic craftsmanship.",
    },
    {
      title: "Stone Carving",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
      description: "Detailed stone sculptures reflecting ancient artistry.",
    },
    {
      title: "Embroidery Sarees",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      description: "Elegant embroidered sarees woven with tradition and style.",
    },
    {
      title: "Pottery",
      image:
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop",
      description: "Handmade clay pottery crafted with precision and care.",
    },
    {
      title: "Paper Mache",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      description: "Creative paper mache designs full of color and imagination.",
    },
    {
      title: "Sandalwood Art",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description: "Luxury sandalwood carvings known for fragrance and beauty.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              CM
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-orange-700">
                Craft Memories
              </h1>
              <p className="text-sm text-gray-600">
                Preserving Tradition Through Art
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#collections" className="hover:text-orange-600 transition">
              Collections
            </a>
            <a href="#about" className="hover:text-orange-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-orange-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-orange-800">
              Celebrating Handmade Heritage
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Discover timeless Indian handicrafts crafted with passion, tradition,
              and creativity. Every piece tells a story and keeps memories alive.
            </p>

            <button className="mt-8 px-8 py-4 bg-orange-600 hover:bg-orange-700 transition rounded-2xl text-white font-semibold shadow-xl">
              Explore Collections
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
              alt="Craft"
              className="rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl backdrop-blur-lg">
              <h3 className="text-3xl font-bold text-orange-700">9+</h3>
              <p className="text-gray-600">Traditional Craft Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-800">
            Our Craft Collections
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Explore handcrafted treasures from different artistic traditions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white/60 backdrop-blur-lg py-20 px-6 mt-10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
            alt="Artisan"
            className="rounded-[2rem] shadow-2xl h-[450px] object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-orange-800">
              About Craft Memories
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Craft Memories is dedicated to preserving India’s rich artistic
              heritage by showcasing handmade crafts from skilled artisans.
              Our mission is to connect tradition with modern appreciation.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              From tribal jewellery to pottery and sandalwood carvings, every
              creation reflects culture, passion, and generations of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-[2rem] p-10 shadow-2xl text-center">
          <h2 className="text-4xl font-bold text-orange-800">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Want to collaborate or showcase your handcrafted products?
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-orange-700">Email</h3>
              <p className="mt-2 text-gray-600">craftmemories@gmail.com</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-orange-700">Phone</h3>
              <p className="mt-2 text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-orange-700">Location</h3>
              <p className="mt-2 text-gray-600">Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white py-6 text-center mt-10">
        <p>
          © 2026 Craft Memories • Handmade Heritage & Traditional Artistry
        </p>
      </footer>
    </div>
  );
}
