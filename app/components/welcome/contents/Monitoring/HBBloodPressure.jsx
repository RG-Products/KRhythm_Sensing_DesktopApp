import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Label
} from 'recharts';

const generateBPPoint = (index) => {
  const phase = index % 60;
  if (phase === 0) return 120;
  if (phase === 1) return 80;
  if (phase < 5) return 100 + Math.random() * 5;
  return 80 + Math.random() * 2;
};

const HBBloodPressure = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const next = [...prev, {
          time: prev.length,
          value: generateBPPoint(prev.length),
        }];
        return next.slice(-100);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-0">
      <div
        className="card shadow rounded p-3"
        style={{ background: 'radial-gradient(circle, rgb(230, 250, 252), rgb(211, 250, 253), #c7f6fa, #B6F2F6)' }}
      >
        <h5 className="text-center mb-3" style={{ color: '#1E3E6D', fontWeight: 'bolder', fontSize: '28px' }}>
          Blood Pressure Monitor
        </h5>

        <ResponsiveContainer width="100%" height={327}>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 40, left: 40 }}>
            <CartesianGrid stroke="#dee2e6" strokeDasharray="3 3" />
            <YAxis domain={[60, 130]} tick={{ fill: '#495057', fontSize: 11 }}>
              <Label
                value="Voltage (mV)"
                angle={-90}
                position="insideLeft"
                style={{ fill: '#1E3E6D', fontWeight: 'bold' }}
              />
            </YAxis>
            <XAxis dataKey="time" tick={{ fill: '#495057', fontSize: 11 }}>
              <Label
                value="Time (s)"
                offset={-10}
                position="insideBottom"
                style={{ fill: '#1E3E6D', fontWeight: 'bold' }}
              />
            </XAxis>
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

export default HBBloodPressure;
