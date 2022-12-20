import React from "react"

const user = 'String=>'
export const UserContext = React.createContext(user)
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer