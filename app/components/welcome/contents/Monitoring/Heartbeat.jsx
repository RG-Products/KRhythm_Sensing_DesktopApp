import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Label
} from 'recharts';
import './ChartCard.css';

const generateECGPoint = (index) => {
  const phase = index % 50;
  if (phase === 5) return 80;
  if (phase === 6) return -60;
  if (phase === 7) return 40;
  if (phase === 8) return -20;
  if (phase === 9) return 10;
  return Math.random() * 2 - 1;
};

const Heartbeat = ({ reset }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const next = [
          ...prev,
          {
            time: prev.length,
            value: generateECGPoint(prev.length),
          },
        ];
        return next.slice(-100);
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (reset) {
      setData([]);
    }
  }, [reset]);

  return (
    <div className="container mt-0" style={{ height: '100%', width: '100%' }}>
      <div className="chart-card" style={{ height: '100%' }}>
        {/* Optional: remove title inside chart to save space */}
        {/* <h5 className="chart-title" style={{ fontSize: '24px', margin: 0 }}>
          Blood Pressure
        </h5> */}

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
            <CartesianGrid stroke="#dee2e6" strokeDasharray="3 3" />
            <XAxis dataKey="time" tick={{ fill: '#495057', fontSize: 10 }}>
              <Label
                value="Time (s)"
                offset={-5}
                position="insideBottom"
                style={{ fill: '#1E3E6D', fontWeight: 'bold' }}
              />
            </XAxis>
            <YAxis domain={[-100, 100]} tick={{ fill: '#495057', fontSize: 10 }}>
              <Label
                value="Voltage (mV)"
                angle={-90}
                position="insideLeft"
                style={{ fill: '#1E3E6D', fontWeight: 'bold' }}
                dy={40}
              />
            </YAxis>
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#ced4da' }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#20c997"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Heartbeat;
