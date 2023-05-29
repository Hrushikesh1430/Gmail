import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Filters = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <fieldset>
        <legend>Filters</legend>
        <input
          id="unread"
          name="unread"
          type="checkbox"
          onChange={() => dispatch({ type: "FILTERS", payload: "unread" })}
        ></input>
        <label>Show unread emails</label>
        <input
          id="starred"
          name="starred"
          type="checkbox"
          onChange={() => dispatch({ type: "FILTERS", payload: "starred" })}
        ></input>
        <label>Show starred emails</label>
      </fieldset>
    </>
  );
};
