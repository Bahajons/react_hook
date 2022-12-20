import React from 'react'
import { useContext } from 'react'
import { UserConsumer, UserContext } from './useContext'

export default function ComponentD() {
  const context = useContext()
  return (
    <div>
      <UserConsumer>
        {
          (username) => {
            return <div>
              <h6>{username}</h6>
              <button onClick={()=>{}}>Change</button>
            </div>
          }
        }
      </UserConsumer>
    </div>
  )
}
