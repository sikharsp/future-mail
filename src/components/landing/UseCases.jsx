const cases = [
  "🎓 After graduation",
  "💼 Before a big interview",
  "💔 Closure after breakup",
  "🎯 Reminder why you started"
];

const UseCases = () => {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">Use cases</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cases.map((item, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-xl">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
