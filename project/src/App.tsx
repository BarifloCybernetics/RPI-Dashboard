import React, { useState, useEffect } from 'react';
import { Cpu, MemoryStick as Memory, Thermometer } from 'lucide-react';

function App() {
  const [systemInfo, setSystemInfo] = useState({
    temperature: '35.2°C',
    cpuUsage: '23%',
    memoryUsage: '45%'
  });

  // Simulated data update
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemInfo({
        temperature: `${(30 + Math.random() * 10).toFixed(1)}°C`,
        cpuUsage: `${Math.floor(Math.random() * 100)}%`,
        memoryUsage: `${Math.floor(Math.random() * 100)}%`
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Raspberry Pi Monitor
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Temperature Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Thermometer className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-gray-500">Temperature</p>
                <p className="text-2xl font-semibold">{systemInfo.temperature}</p>
              </div>
            </div>
          </div>

          {/* CPU Usage Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Cpu className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-500">CPU Usage</p>
                <p className="text-2xl font-semibold">{systemInfo.cpuUsage}</p>
              </div>
            </div>
          </div>

          {/* Memory Usage Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Memory className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-500">Memory Usage</p>
                <p className="text-2xl font-semibold">{systemInfo.memoryUsage}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600">
          This is a demo React application running on Raspberry Pi via Docker
        </p>
      </div>
    </div>
  );
}

export default App;