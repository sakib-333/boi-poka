import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BookVibeContext } from "../../../Context/BookVibeContext";

const PagesToRead = () => {
  const { books } = useContext(BookVibeContext);
  const data = books.map((book) => {
    return { name: book.bookName, Pages: book.totalPages };
  });
  return (
    <div className="mt-4 md:mt-8 lg:mt-16">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Pages" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
