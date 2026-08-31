const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Best Price Guarantee",
      description: "We ensure you get the best price for your travel experiences. No hidden fees or surprise charges.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Safe & Secure Booking",
      description: "Your data and payments are protected with the highest level of security and encryption.",
      icon: "🛡️"
    },
    {
      id: 3,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or issues.",
      icon: "🎧"
    },
    {
      id: 4,
      title: "Handpicked Destinations",
      description: "We carefully select and verify each destination to ensure you have a premium travel experience.",
      icon: "⭐"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose TripZen?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We are committed to providing you with the best travel experience possible, from the moment you book until you return home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 mb-6 text-3xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
