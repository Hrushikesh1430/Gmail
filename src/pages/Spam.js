import { useContext } from "react";
import { MailItem } from "../Components/MailItem";
import { AppContext } from "../context/AppContext";

export const Spam = () => {
  const {
    state: { spam }
  } = useContext(AppContext);
  return (
    <div className="parentMail">
      {spam.length > 0 ? (
        spam.map((item) => <MailItem item={item} page="trash" />)
      ) : (
        <h4>No Spam Emails found</h4>
      )}
    </div>
  );
};
