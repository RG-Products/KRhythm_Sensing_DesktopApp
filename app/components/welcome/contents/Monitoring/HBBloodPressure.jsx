import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Label
} from 'recharts';
import './ChartCard.css';

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
    <div className="container mt-0" style={{ height: "100%", width: "100%" }}>
      <div className="chart-card" style={{ height: "100%" }}>
        

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
            <CartesianGrid stroke="#dee2e6" strokeDasharray="3 3" />
            <YAxis domain={[60, 130]} tick={{ fill: '#495057', fontSize: 10 }}>
              <Label
                value="Voltage (mV)"
                angle={-90}
                position="insideLeft"
                style={{ fill: '#1E3E6D', fontWeight: 'bold' }}
                dy={40} // move the axis label downward (larger value = further down)
              />
            </YAxis>
            <XAxis dataKey="time" tick={{ fill: '#495057', fontSize: 10 }}>
              <Label
                value="Time (s)"
                offset={-5}
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
