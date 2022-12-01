import React from "react";
const UserContext = React.createContext();
const ProviderContext = UserContext.Provider;
const ConsumerProvider = UserContext.Consumer;

export { UserProvider, UserContext };
