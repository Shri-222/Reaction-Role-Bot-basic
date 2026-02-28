# 🚀 Reaction Role Bot

A lightweight, self-hosted Discord bot that automatically assigns roles to users based on emoji reactions.

Unlike large multi-purpose bots, this bot is minimal, fast, customizable, and fully under your control — no branding, no feature bloat.

---

## ✨ Features

- 🎯 Assign roles automatically when users react
- 🔄 Removes role when reaction is removed
- 🔐 Admin-only setup command
- 💾 Persistent storage using local database
- ⚡ Lightweight & fast (no external DB required)
- 🛠 Fully self-hosted — complete control

---

## 📸 How It Works

1. Admin links an emoji to a role using a setup command  
2. Users react to a message  
3. Bot assigns the linked role instantly  
4. Removing the reaction removes the role  

---

# 📦 Installation

## 🔹 Prerequisites

- Node.js **v18 or higher (recommended)**
- npm
- A Discord Bot Token

Check your Node version:

```bash
node -v
```

---

## 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/reaction-role-bot.git
cd reaction-role-bot
```

---

## 🔹 Step 2: Install Dependencies

```bash
npm install
```

---

## 🔹 Step 3: Create a `.env` File

Create a file named `.env` in the root folder:

```env
DISCORD_TOKEN=your_bot_token_here
PREFIX=!
```

---

## 🔹 Step 4: Start the Bot

```bash
node index.js
```

If everything is correct, you should see the bot online in your server.

---

# ⚙️ Bot Setup Guide

## 1️⃣ Invite the Bot to Your Server

Go to Discord Developer Portal →  
Select your bot → OAuth2 → URL Generator  

Select:

**Scopes**
- ✅ bot

**Bot Permissions**
- Send Messages  
- Manage Roles  
- Read Message History  
- Add Reactions  

Open the generated URL and invite the bot.

---

## 2️⃣ Enable Gateway Intents

Go to Developer Portal → Bot → Enable:

- ✅ Server Members Intent  
- ✅ Message Content Intent  

Save changes.

---

## 3️⃣ IMPORTANT: Role Hierarchy

⚠️ The bot's role must be placed **above** the roles it needs to assign.

Server Settings → Roles → Drag bot role above target roles.

If you skip this, role assignment will fail.

---

## 4️⃣ Create a Role

Server Settings → Roles → Create Role  
Example: Gamer

---

## 5️⃣ Link Emoji to Role

Use the setup command:

```bash
!setup [MESSAGE_ID] [EMOJI] @RoleName
```

### Example:

```bash
!setup 1475398279058423940 🎮 @Gamer
```

---

### 🧠 Command Breakdown

| Parameter | Description |
|------------|-------------|
| MESSAGE_ID | ID of the message users will react to |
| EMOJI | Emoji users will click (🎮 🎨 🎵 etc.) |
| @RoleName | Role to assign (must mention it) |

---

# 📜 Commands

| Command | Usage | Description |
|---------|--------|-------------|
| setup | !setup [MessageID] [Emoji] @Role | Link emoji to role |

---

# 🛠 Technologies Used

- discord.js (v14)
- Node.js
- dotenv
- quick.db (SQLite storage)

---

# ❓ Troubleshooting

## Bot cannot assign roles
- Ensure bot role is above target role
- Ensure Manage Roles permission is enabled

## Bot doesn't respond
- Check PREFIX in `.env`
- Ensure Message Content Intent is enabled
- Confirm you are an admin

## Reactions not working
- Verify message ID is correct
- Ensure bot can add reactions
- Check console for errors

---

# 🚀 Upgrade to Premium Version

Want more advanced features?

Premium Version Includes:

- 🏷 Tier system (Free / Premium / Enterprise)
- 🎛 Reaction panel generator
- ♾ Unlimited panels
- 🎨 Custom embed styling
- 🗑 Panel deletion command
- 🌐 Multi-server support
- ☁ Hosted version available (no coding required)

👉 Get Premium Version Here: (https://shri22.gumroad.com/l/Reaction-Role-Bot)

---

# 📈 Why Use This Instead of Big Bots?

Large bots like Dyno or Carl-bot:
- Have branding
- Are overloaded with features
- Cannot be fully customized
- Are not self-hosted

This bot is:
- Minimal
- Customizable
- Fully controlled by you
- Perfect for developers and private communities

---

# 📄 License

MIT License — You are free to modify and use commercially.

---

# 🤝 Support

- Open a GitHub issue
- Or contact via Discord 

---

# ⭐ Contributing

Pull requests are welcome.  
Fork the repository and submit improvements.

---


If this project helped you, consider starring the repository ⭐
