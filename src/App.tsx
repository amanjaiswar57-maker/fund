import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Camera, Users, Target, CheckCircle, Settings } from 'lucide-react';
import AdminPanel from './AdminPanel';
import QRCode from './QRCode';

interface CampaignStats {
  goal: number;
  raised: number;
  supporters: number;
}

const App: React.FC = () => {
  const [stats, setStats] = useState<CampaignStats>({
    goal: 65000,
    raised: 12450,
    supporters: 1245
  });
  
  const [progress, setProgress] = useState(0);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const calculatedProgress = (stats.raised / stats.goal) * 100;
    setProgress(calculatedProgress);
  }, [stats.raised, stats.goal]);

  const handleUPIPayment = () => {
    const upiLink = "upi://pay?pa=ajay@okaxis&pn=Ajay&am=10&cu=INR&tn=CameraFund";
    window.location.href = upiLink;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-lg text-slate-800">Ajay's Creator Fund</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAdminPanel(true)}
                className="text-slate-600 hover:text-purple-600 transition-colors"
                title="Admin Panel"
              >
                <Settings className="w-5 h-5" />
              </button>
              <a href="https://www.instagram.com/ajayc_inematography?igsh=MTZnY2ozMms5dXczdA==" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              The Power of ₹10:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Help Me Capture Better Stories
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              6,500 people contributing just ₹10 can fund the Sony ZV-E10 II. 
              <br />
              <span className="font-semibold text-purple-600">Be part of the 0.15%.</span>
            </p>
          </div>

          {/* Camera Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl float-animation">
                <img 
                  src="/images/sony-zv-e10-ii.jpg" 
                  alt="Sony ZV-E10 II Camera" 
                  className="w-64 h-48 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-64 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center hidden">
                  <Camera className="w-24 h-24 text-slate-500" />
                </div>
                <p className="text-center mt-4 text-sm text-slate-600 font-medium">Sony ZV-E10 II</p>
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">Campaign Progress</span>
                <span className="text-sm font-bold text-purple-600">{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="progress-fill h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Stats Table */}
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Goal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Raised</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Supporters</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {formatCurrency(stats.goal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                      {formatCurrency(stats.raised)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {stats.supporters.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Make Your Contribution</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* QR Code Section */}
              <div className="text-center">
                <div className="bg-slate-100 rounded-lg p-6 mb-4">
                  <QRCode />
                </div>
                <p className="text-sm text-slate-600">
                  Scanning from a laptop? Use your phone's GPay app.
                </p>
              </div>

              {/* Button Section */}
              <div className="flex flex-col justify-center items-center text-center">
                <button
                  onClick={handleUPIPayment}
                  className="w-full max-w-xs gpay-gradient text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse-slow"
                >
                  💳 PAY ₹10 via GPay
                </button>
                <p className="text-sm text-slate-500 mt-4">
                  One-tap payment for mobile users
                </p>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Why This Camera Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">The Dream</h3>
                <p className="text-sm text-slate-600">
                  I want to create 4K cinematic travel films that inspire and transport viewers to amazing places.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">The Commitment</h3>
                <p className="text-sm text-slate-600">
                  I will credit every single supporter in the description of my first video shot on this camera.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">The Transparency</h3>
                <p className="text-sm text-slate-600">
                  I will post the purchase receipt once the goal is met, so you know exactly where your money went.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            Thank you for being part of my creative journey. Every ₹10 counts! 🎬
          </p>
        </div>
      </footer>

      {/* Admin Panel */}
      {showAdminPanel && (
        <AdminPanel
          stats={stats}
          onUpdateStats={setStats}
          onClose={() => setShowAdminPanel(false)}
        />
      )}
    </div>
  );
};

export default App;
