# 🚀 Future Mail

**Future Mail** is a production-ready email scheduling backend that allows users to send emails **automatically at a future date & time**.  
Emails are stored securely and delivered via background cron execution — no manual intervention required.

---

## ✨ Why Future Mail?

Many applications need delayed or scheduled emails:
- ⏰ Reminders
- 🔔 Notifications
- 📩 Onboarding emails
- 🧾 Alerts & reports

Future Mail solves this reliably using a **database-driven queue + cron jobs**.

---

## 🧩 Core Features

✅ Schedule emails for future delivery  
✅ Automatic background email sending  
✅ Secure credentials using environment variables  
✅ SMTP support using **PHPMailer**  
✅ Database-based email queue (`pending`, `sent`, `failed`)  
✅ Production-ready & scalable design  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Backend | PHP |
| Mail Service | PHPMailer (SMTP) |
| Database | MySQL |
| Scheduler | Cron Job |
| Hosting | Render / VPS / Shared Hosting |

---

---

## 🔄 Email Processing Workflow

1️⃣ User schedules an email  
2️⃣ Email is saved in the database with status **`pending`**  
3️⃣ Cron job runs automatically  
4️⃣ Due emails are sent via SMTP  
5️⃣ Status updates to **`sent`** or **`failed`**

---

## ⏱️ Cron Job Setup

### 🖥️ Linux / VPS
```bash
* * * * * /usr/bin/php /path/to/send_pending_emails.php >> cron.log 2>&1


