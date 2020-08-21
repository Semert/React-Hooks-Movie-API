import React, { useEffect, useState } from 'react'
import './App.css';
import Cardy from './components/Card/Card'
import { Container } from '@material-ui/core'


const API =  'http://www.omdbapi.com/?i=tt3896198&apikey=2cf3c2a6'



function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


  useEffect(() => {
    async function loadData() {
      const res = await fetch(`${API}&s=pokemon`)
      const resJSON = await res.json()
      if (resJSON) {
        setData(resJSON.Search)
        setLoading(false)
        setError("")
      }
    }
    loadData()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!search) {
      return setError("Please write a valid text")
    }

    const response = await fetch(`${API}&s=${search}`)
    const data = await response.json()
    if (!data.Search) {
      return setError( "There are no results.")
    }

    // eslint-disable-next-line no-sequences
    return setData(data.Search), setError(""), setSearch("")
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

      <div className="App">
         <form onSubmit={(event) => handleSubmit(event)}>
             <div className="container">
             <input
               id="standard-secondary"
               color="secondary"
               type="text"
               className="form-control"
               placeholder="Search..."
               onChange={(event) => setSearch(event.target.value)}
               value={search}
               autoFocus
              />
             </div>
           </form>
             <p className="error">
              {error ? error : ""}
            </p>
            <Container fixed>
            <div className="flex">
               <Cardy data={data} />
            </div>
            </Container>
      </div>
  );
}

export default App;
