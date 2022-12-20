import React from 'react'
import ComponentB from './ComponentB'
import { UserContext } from './useContext'

export default function ComponentA() {
    return (
        <div>
            <ComponentB />
            {console.log(UserContext)}
            
        </div>
    )
}
