import React from "react";

const stats = [
  { value: "100%", label: "Speed" },
  { value: "50%", label: "Power" },
  { value: "10X", label: "Growth" },
  { value: "24/7", label: "Access" },
];

const Stats = () => {
  return (
    <div className="flex gap-10 mt-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-3xl font-bold">{stat.value}</h2>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;