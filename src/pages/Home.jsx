import React, { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    console.info(import.meta.env.VITE_APP_SECRET_KEY)
  }, [])

  return (
    <div className='App'>
      <h1>Home</h1>
    </div>
  )
}
