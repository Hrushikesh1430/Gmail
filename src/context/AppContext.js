import { createContext, useEffect, useReducer, useState } from "react";

import { fakeFetch } from "../API/fakeFetch";
import { InitialState, mailReducer } from "../reducer/AppReducer";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, InitialState);

  const [mails, setMails] = useState([]);
  const [profile, setProfile] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await fakeFetch("https://example.com/api/mails");
      dispatch({ type: "fetchMails", payload: data.mails });
      setMails(data.mails);
      setProfile(data.user);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        mails,
        profile,
        error,
        loading,
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
