# Ajay's Creator Fund - Sony ZV-E10 II Crowdfunding Campaign

A modern, responsive landing page for crowdfunding a Sony ZV-E10 II camera to create 4K cinematic travel films.

## 🎯 Campaign Details

- **Goal**: ₹65,000
- **Current Progress**: ₹12,450 (19.2%)
- **Supporters**: 1,245
- **Contribution**: ₹10 per person

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop and mobile
- **Live Progress Tracker**: Real-time campaign statistics
- **Interactive Payment**: QR code for desktop, one-tap UPI payment for mobile
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Animations**: Floating camera, pulsing CTA button, gradient progress bar

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📱 Payment Integration

### UPI Details
- **UPI ID**: ajay@okaxis
- **Amount**: ₹10
- **Note**: CameraFund

### Payment Methods
1. **Mobile**: One-tap GPay button
2. **Desktop**: QR code scanning

## 🎨 Customization

### Update Your Details
Edit these files to personalize:

1. **UPI Information**: 
   - `src/App.tsx` (line 28)
   - `src/QRCode.tsx` (line 10-12)

2. **Images**:
   - Add camera image: `public/images/sony-zv-e10-ii.jpg`
   - Add QR code: `public/images/gpay-qr-code.png`

3. **Social Links**: Update href attributes in navigation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
creator-fund/
├── public/
│   └── images/
│       ├── sony-zv-e10-ii.jpg     # Camera image
│       └── gpay-qr-code.png       # QR code
├── src/
│   ├── App.tsx                    # Main component
│   ├── QRCode.tsx                 # QR code component
│   ├── AdminPanel.tsx             # Admin dashboard
│   └── main.tsx                   # Entry point
└── web/                           # Production-ready version
```

## 🌟 Live Demo

Visit the live site to see the campaign in action!

## 💝 Support

Every ₹10 contribution helps bring better cinematic stories to life. Supporters will be credited in the first video shot on this camera.

---

**Built with ❤️ for the creator community**
