import React from "react";
import StudentCard from "../components/StudentCard";

const students = [
  { id: 1, name: "Alice", class: "10th" },
  { id: 2, name: "Bob", class: "9th" },
  { id: 3, name: "Charlie", class: "8th" },
  { id: 4, name: "David", class: "11th" },
  { id: 5, name: "Eva", class: "12th" },
  { id: 6, name: "Franklin", class: "7th" },
  { id: 7, name:"Vignesh Kumar", class: "12th" },
  { id: 8, name: "Niranjan", class: "12th" },
  { id: 9, name: "Harshavardhan", class: "12th" },
  { id: 10, name: "Lokesh", class: "12th" },
  { id:11,name:"Thanai",class:"12th"},
  {id:12,name:"Santhosh",class:"12th"}
];

const Home = () => {
  return (
    <div className="bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 min-h-screen p-4">
      <div className="flex flex-col gap-5 flex-grow justify-center items-center">
        <h1 className="text-gray-800 text-center text-2xl md:text-3xl font-bold p-2 underline">
          Student List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
