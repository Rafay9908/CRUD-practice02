import React, { useState } from 'react'

function Form({
    formData,
    setFormData,
    entries,
    setEntries,
    setError,
    editingIndex,
    setEditingIndex
}) {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.number){
            setError('All fields are required')
            return;
        }

        if (editingIndex !== null) {
            const updatedEntries = [...entries]
            updatedEntries[editingIndex] = formData;

            setEntries(updatedEntries);

            setEditingIndex(null)
        } else {
            setEntries((prev) => [...prev, formData]);
        }

        
        setFormData({ name: "", email: "", number: "" });
        setError('');
    }

    const handleDelete = (index) => {

    }

  return (
    <div className='w-11/12 lg:w-4/5 mx-auto mb-4'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
            <input 
            className='p-3 outline-none rounded'
            type="text"
            placeholder='Enter your Name'
            value={formData.name}
            name='name'
            onChange={handleInputChange}
            />
            <input 
            className='p-3 outline-none rounded'
            type="text"
            placeholder='Enter your Email'
            value={formData.email}
            name='email'
            onChange={handleInputChange}
            />
            <input 
            className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 outline-none rounded'
            type="number"
            placeholder='Enter your Number'
            value={formData.number}
            name='number' 
            onChange={handleInputChange}
            />
            <button type='submit' className='bg-blue-500 p-3 rounded text-white font-bold hover:bg-blue-400'>Add</button>
        </form>
    </div>
  )
}

export default Form