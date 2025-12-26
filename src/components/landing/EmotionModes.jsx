const emotions = ["💔 Regret", "💪 Motivation", "❤️ Love", "😌 Forgiveness", "🎉 Celebration"];

const EmotionModes = () => {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-3xl font-semibold mb-12">
        Not all messages feel the same
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {emotions.map((emotion, i) => (
          <div
            key={i}
            className="bg-slate-900 px-6 py-4 rounded-xl hover:bg-purple-600 transition cursor-pointer"
          >
            {emotion}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmotionModes;
