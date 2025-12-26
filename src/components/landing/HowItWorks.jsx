const steps = [
  { title: "Write", desc: "Write an email to your future self or someone else." },
  { title: "Choose Time", desc: "Pick a date when it should be delivered." },
  { title: "Receive", desc: "The email arrives exactly on time." }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-16">How it works</h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
