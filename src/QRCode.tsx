import React from 'react';

interface QRCodeProps {
  upiId?: string;
  name?: string;
  amount?: number;
}

const QRCode: React.FC<QRCodeProps> = () => {
  
  return (
    <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center border-2 border-slate-300 relative overflow-hidden">
      {/* QR Code Image */}
      <img 
        src="/images/gpay-qr-code.png" 
        alt="GPay QR Code for ₹10 payment" 
        className="w-full h-full object-cover rounded-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
      {/* Fallback placeholder */}
      <div className="absolute inset-0 bg-slate-100 hidden">
        <div className="grid grid-cols-8 gap-0 w-full h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={`${Math.random() > 0.5 ? 'bg-slate-800' : 'bg-white'}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white/90">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2 mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-xs">QR</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">Scan to Pay ₹10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
