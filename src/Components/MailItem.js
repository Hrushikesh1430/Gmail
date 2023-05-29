import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const MailItem = ({ item, page }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`Mail ${item.unread ? "unreadMail" : "readMail"}`}
        key={item.mId}
      >
        <div className="MailInfo">
          <p>Subject : {item.subject}</p>
          {page === "home" && (
            <button
              className="star"
              onClick={() =>
                dispatch({ type: "TOGGLE_STARRED", payload: item })
              }
            >
              {item.isStarred ? "Unstar" : "Star"}
            </button>
          )}
          <p>
            About :{" "}
            <span
              dangerouslySetInnerHTML={{ __html: `${item.content}` }}
            ></span>
          </p>
          {page === "home" ? (
            <div className="buttonContainer">
              <div>
                <button
                  className="details"
                  onClick={() => navigate(`mail/${item.mId}`)}
                >
                  View Details
                </button>
              </div>
              <div>
                <button
                  className={page === "home" ? "delete" : "restore"}
                  onClick={() => dispatch({ type: "trash", payload: item })}
                >
                  {page === "home" ? "Delete" : "Restore"}
                </button>
                <button
                  className="unread"
                  onClick={() =>
                    dispatch({ type: "TOGGLE_UNREAD", payload: item })
                  }
                >
                  Mark as {item.unread ? "read" : "unread"}
                </button>
                <button
                  className="spam"
                  onClick={() => dispatch({ type: "spam", payload: item })}
                >
                  Report Spam
                </button>
              </div>
            </div>
          ) : (
            <button
              className="restore"
              onClick={() =>
                page === "home"
                  ? dispatch({ type: "trash", payload: item })
                  : page === "trash"
                  ? dispatch({
                      type: "RESTORE",
                      payload: { item: item, page: "trash" }
                    })
                  : dispatch({
                      type: "RESTORE",
                      payload: { item: item, page: "spam" }
                    })
              }
            >
              Restore
            </button>
          )}
        </div>
      </div>
    </>
  );
};
