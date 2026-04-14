import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem('timeline')) || [];
    
    const counts = {
      Call: timeline.filter(i => i.type === 'Call').length,
      Text: timeline.filter(i => i.type === 'Text').length,
      Video: timeline.filter(i => i.type === 'Video').length,
    };

    setData([
      { name: 'Call', value: counts.Call, fill: '#1e40af' },
      { name: 'Text', value: counts.Text, fill: '#8b5cf6' },
      { name: 'Video', value: counts.Video, fill: '#10b981' },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Friendship Analytics</h1>
      
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          By Interaction Type
        </div>
      </div>
    </div>
  );
};

export default Stats;