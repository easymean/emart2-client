import React, { createContext, useReducer, useContext } from "react";
import { UserModel } from "@/model/UserModel";
import { UserReducer } from "./reducer";

export const UserStateContext = createContext({} as UserModel);
export const UserDispatchContext = createContext(null);

// export const UserProvider = ({ children, user }) => {
//   const [state, dispatch] = useReducer(UserReducer, user);
//   return (
//     <UserDispatchContext.Provider value={dispatch}>
//       <UserStateContext.Provider value={state}>
//         {children}
//       </UserStateContext.Provider>
//     </UserDispatchContext.Provider>
//   );
// };

export const useUser = (): UserModel => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
