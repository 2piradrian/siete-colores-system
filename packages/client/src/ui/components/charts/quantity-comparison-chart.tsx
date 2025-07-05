import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

type Props = {
  month: number;
  year: number;
};

export default function QuantityComparisonChart({ month, year }: Props) {
  const data = [
    { name: "Total año", vendidos: year },
    { name: "Mes actual", vendidos: month },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="vendidos" fill="#eec3e8" />
      </BarChart>
    </ResponsiveContainer>
  );
}