import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-purple-400">
          Welcome, {user?.name}
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Card */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            ✨ Send an Email to the Future
          </h2>

          <p className="text-gray-400 mb-6">
            Write an email today and deliver it to yourself or someone else
            on a future date. Perfect for goals, reminders, or emotions.
          </p>

          <button
            onClick={() => navigate("/user/send-email")}
            className="bg-purple-600 px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition"
          >
            Send Future Email →
          </button>
        </div>

        {/* Placeholder stats */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            📊 Your Activity
          </h2>

          <ul className="text-gray-400 space-y-2">
            <li>• Emails Scheduled: 0</li>
            <li>• Emails Delivered: 0</li>
            <li>• Next Delivery: —</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

