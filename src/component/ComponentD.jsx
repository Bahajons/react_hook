import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { UserConsumer, UserContext, UserProvider } from './useContext'

export default function ComponentD() {
  const [context, setContext] = useContext(UserContext)
  return (
    <div>
      <button onClick={() => setContext('wefewf')}>Change</button>
      <UserProvider/>
    </div>
  )
}
