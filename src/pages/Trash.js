import { useContext } from "react";
import { MailItem } from "../Components/MailItem";
import { AppContext } from "../context/AppContext";

export const Trash = () => {
  const {
    state: { trash }
  } = useContext(AppContext);
  return (
    <div className="parentMail">
      {trash.length > 0 ? (
        trash.map((item) => <MailItem item={item} page="trash" />)
      ) : (
        <h4>No deleted Emails found</h4>
      )}
    </div>
  );
};
