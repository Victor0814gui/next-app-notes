import React, { createContext,useContext } from "react";


const NotesContext = createContext({});

export function NotesContextProvider(){
  return(
    <NotesContext.Provider value={{

    }}>
    </NotesContext.Provider>
  )
}