import { useState } from "react";
import axios from "axios";

const SendEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendDate, setSendDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost/futuremail_backend/auth/schedule_email.php",
        { user_id: user.id, to, subject, message, sendDate }
      );
      alert(res.data.message);
    } catch {
      alert("Failed to schedule email");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl text-purple-400 mb-6">📩 Schedule Future Email</h1>
      <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl max-w-xl space-y-4">
        <input type="email" placeholder="Recipient Email" value={to} onChange={e => setTo(e.target.value)} required className="w-full px-4 py-2 rounded bg-slate-800"/>
        <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} required className="w-full px-4 py-2 rounded bg-slate-800"/>
        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required className="w-full px-4 py-2 rounded bg-slate-800"/>
        <input type="datetime-local" value={sendDate} onChange={e => setSendDate(e.target.value)} required className="w-full px-4 py-2 rounded bg-slate-800"/>
        <button type="submit" className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700">Schedule Email 🚀</button>
      </form>
    </div>
  );
};

export default SendEmail;

