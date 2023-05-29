import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Mail = () => {
  const { mails } = useContext(AppContext);

  const { id } = useParams();

  const mailItem = mails.find((item) => item.mId === id);
  return (
    <>
      <div className="IndividualMail">
        {mailItem ? (
          <div>
            <h2>Subject : {mailItem.subject}</h2>

            <hr />
            <h3>About :</h3>
            <span
              style={{
                fontWeight: "normal",
                marginTop: "5px",
                fontSize: "20px"
              }}
              dangerouslySetInnerHTML={{ __html: `${mailItem.content}` }}
            ></span>
          </div>
        ) : (
          <p>No mail found</p>
        )}
      </div>
    </>
  );
};
