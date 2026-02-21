# Image Storage Guide

## Where to Store Images

All images should be placed in the `public/images/` directory:

```
creator-fund/
├── public/
│   └── images/
│       ├── sony-zv-e10-ii.jpg     # Camera image (recommended: 400x300px)
│       └── gpay-qr-code.png       # Your GPay QR code (recommended: 300x300px)
├── src/
└── ...
```

## Required Images

### 1. Camera Image
- **Filename**: `sony-zv-e10-ii.jpg`
- **Recommended size**: 400x300 pixels
- **Format**: JPG or PNG
- **Content**: High-quality image of Sony ZV-E10 II camera

### 2. QR Code Image
- **Filename**: `gpay-qr-code.png`
- **Recommended size**: 300x300 pixels
- **Format**: PNG (for better quality)
- **Content**: Your actual GPay QR code for ₹10 payment

## How to Generate QR Code

1. Open Google Pay app
2. Go to "New Payment" → "QR code"
3. Enter your UPI ID: `ajay@okaxis`
4. Set amount: ₹10
5. Add note: "CameraFund"
6. Screenshot the QR code
7. Crop and save as `gpay-qr-code.png` in `public/images/`

## Image Fallback

The code includes automatic fallbacks:
- If camera image is missing → Shows camera icon placeholder
- If QR code is missing → Shows QR placeholder pattern

## UPI Details

Current UPI configuration:
- **UPI ID**: `ajay@okaxis` (update if different)
- **Name**: `Ajay`
- **Amount**: ₹10
- **Note**: `CameraFund`

To update UPI details, edit these files:
- `src/App.tsx` (line 28)
- `src/QRCode.tsx` (line 10-12)
