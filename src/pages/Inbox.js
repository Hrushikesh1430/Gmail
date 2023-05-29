import { useContext, useEffect, useState } from "react";
import { Filters } from "../Components/Filters";
import { MailItem } from "../Components/MailItem";
import { AppContext } from "../context/AppContext";

export const Inbox = () => {
  const { mails, state } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState(state.mails);

  useEffect(() => {
    setFilteredData(state.mails);
  }, [mails, state.mails]);

  useEffect(() => {
    filterData();
  }, [state.filters, state.mails]);

  const filterData = () => {
    const unreadData = state.filters.includes("unread")
      ? state.mails.filter((item) => item.unread === true)
      : state.mails;
    const starredData = state.filters.includes("starred")
      ? unreadData.filter((item) => item.isStarred === true)
      : unreadData;

    setFilteredData(starredData);
  };

  return (
    <>
      <Filters />
      <div className="parentMail">
        <h2>Mails</h2>
        {filteredData.map((item) => (
          <MailItem item={item} page="home" />
        ))}
      </div>
    </>
  );
};
