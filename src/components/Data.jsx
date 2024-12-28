import React, { useState } from "react";

function Data({ 
  setFormData,
  entries,
  setEntries,
  setEditingIndex,
 }) {

 

  const handleDelete = (index) => {
    setEntries((prev) => prev.filter((element, i) => i !== index));
  }

  const handleEdit = (index) => {
    setFormData(entries[index]); 
    setEditingIndex(index);
  }

  console.log(entries)

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mt-10">
      <div className="overflow-auto border border-white">
      <table className=" text-white table-auto border-spacing-10 text-left border-separate w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
             <tr key={index}>
             <td>{entry.name}</td>
             <td>{entry.email}</td>
             <td>{entry.number}</td>
             <td><button className="bg-blue-700 py-2 px-8 rounded" onClick={() => handleEdit(index)}>Edit</button></td>
             <td><button className="bg-red-700 py-2 px-8 rounded" onClick={() => handleDelete(index)}>Delete</button></td>
           </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Data;
