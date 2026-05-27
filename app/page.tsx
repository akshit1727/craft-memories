export default function CraftMemoriesWebsite() {
  const crafts = [
    {
      title: "Metal Casting",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      description:
        "Traditional handcrafted metal masterpieces made with timeless techniques.",
    },
    {
      title: "Paintings",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful paintings inspired by Indian heritage and creativity.",
    },
    {
      title: "Tribal Jewellery",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
      description:
        "Authentic tribal jewellery crafted with elegance and culture.",
    },
    {
      title: "Bamboo Craft",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description:
        "Eco-friendly bamboo creations made by skilled artisans.",
    },
    {
      title: "Stone Carving",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
      description:
        "Detailed stone carvings reflecting ancient artistic traditions.",
    },
    {
      title: "Embroidery Sarees",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant embroidered sarees woven with beauty and heritage.",
    },
    {
      title: "Pottery",
      image:
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop",
      description:
        "Handmade clay pottery crafted with passion and precision.",
    },
    {
      title: "Paper Mache",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Creative paper mache art full of vibrant colors and imagination.",
    },
    {
      title: "Sandalwood Art",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury sandalwood carvings admired for beauty and fragrance.",
    },
  ];

  const testimonials = [
    {
      name: "Meera Singh",
      text:
        "Absolutely beautiful handmade products with amazing craftsmanship!",
    },
    {
      name: "Aarav Malhotra",
      text:
        "Loved the detailing and authentic handcrafted designs.",
    },
    {
      name: "Riya Kapoor",
      text:
        "One of the best traditional art collections I’ve ever seen.",
    },
  ];

  const teamMembers = [
    {
      role: "CEO",
      name: "Vidhi",
    },
    {
      role: "Marketing Head",
      name: "Tanishka",
    },
    {
      role: "R&D Head",
      name: "Anchal",
    },
    {
      role: "Design Head",
      name: "Anshu",
    },
    {
      role: "Finance Head",
      name: "Hanu",
    },
    {
      role: "Sales & Logistics Head",
      name: "Sheetal",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-600 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
              CM
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-orange-700">
                Craft Memories
              </h1>

              <p className="text-sm text-gray-600">
                Crafting Culture Into Timeless Memories
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#collections" className="hover:text-orange-600 transition">
              Collections
            </a>

            <a href="#about" className="hover:text-orange-600 transition">
              About
            </a>

            <a href="#team" className="hover:text-orange-600 transition">
              Team
            </a>

            <a href="#contact" className="hover:text-orange-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-orange-700 font-semibold text-lg mb-4">
            Founded by Anshu Tyagi
          </p>

          <h2 className="text-6xl font-extrabold leading-tight text-orange-900">
            Preserving India’s Handmade Heritage
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Explore handcrafted treasures inspired by tradition, culture, and
            artistry. Every creation tells a unique story crafted with love and
            dedication.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-2xl text-white font-semibold shadow-xl transition">
              Explore Collection
            </button>

            <button className="px-8 py-4 border-2 border-orange-600 rounded-2xl text-orange-700 font-semibold hover:bg-orange-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
            alt="Craft Hero"
            className="rounded-[2.5rem] shadow-2xl h-[550px] w-full object-cover"
          />

          <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl">
            <h3 className="text-4xl font-bold text-orange-700">9+</h3>

            <p className="text-gray-600">
              Traditional Craft Categories
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-800">
            Our Collections
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Discover handcrafted art forms from across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {crafts.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
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
        className="bg-white/60 backdrop-blur-lg py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
            alt="About"
            className="rounded-[2rem] shadow-2xl h-[500px] object-cover w-full"
          />

          <div>
            <h2 className="text-5xl font-bold text-orange-800">
              About Craft Memories
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Craft Memories is a handcrafted art and heritage brand. Our mission is to preserve India’s traditional
              craftsmanship by connecting skilled artisans with people who value
              culture, creativity, and handmade beauty.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              From tribal jewellery to pottery and sandalwood carvings, every
              creation reflects generations of expertise and artistic passion.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-800">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "100% Handmade",
            "Eco Friendly",
            "Traditional Craftsmanship",
            "Premium Quality",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-700">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-orange-100 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-800 mb-6">
            Meet Our Team
          </h2>

          <p className="text-lg text-gray-600 mb-16">
            The passionate minds behind Craft Memories.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  {member.name.charAt(0)}
                </div>

                <h3 className="mt-6 text-3xl font-bold text-orange-700">
                  {member.name}
                </h3>

                <p className="mt-2 text-orange-600 font-semibold text-lg">
                  {member.role}
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Dedicated to preserving traditional craftsmanship with
                  creativity, passion, and innovation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-800">
            Customer Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 shadow-xl"
            >
              <p className="text-gray-700 italic leading-relaxed">
                “{item.text}”
              </p>

              <h3 className="mt-6 text-xl font-bold text-orange-700">
                — {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-[2rem] p-12 shadow-2xl text-center">
          <h2 className="text-5xl font-bold text-orange-800">
            Contact Us
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Want to collaborate or explore handcrafted collections?
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-orange-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-700">
                Email
              </h3>

              <p className="mt-3 text-gray-600">
                hello@craftmemories.in
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-700">
                Phone
              </h3>

              <p className="mt-3 text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-700">
                Location
              </h3>

              <p className="mt-3 text-gray-600">
                Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white py-8 text-center mt-10">
        <h2 className="text-2xl font-bold">
          Craft Memories
        </h2>

        <p className="mt-3 text-orange-100">
          Crafting Culture Into Timeless Memories
        </p>

        <p className="mt-4 text-sm text-orange-200">
          © 2026 Craft Memories | Designed with passion by Anshu Tyagi
        </p>
      </footer>
    </div>
  );
}