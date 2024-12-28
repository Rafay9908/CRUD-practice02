import { useState } from 'react'
import './App.css'
import Data from './components/Data'
import Form from './components/Form'

function App() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
});

  console.log(entries);

  return (
    <>
    <Form 
    entries={entries}
    setEntries={setEntries} 
    setError={setError}
    formData={formData}
    setFormData={setFormData} 
    editingIndex={editIndex}
    setEditingIndex={setEditIndex}
    />
    {error && <p className='text-red-500 mt-2'>{error}</p>}
    {entries.length === 0 ? (<p>No entries yet!</p>) : (
      <Data setFormData={setFormData} entries={entries} setEntries={setEntries} setEditingIndex={setEditIndex} />
    )}
    
    </>
  )
}

export default App
