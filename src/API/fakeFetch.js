export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/mails") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            mails: [
              {
                mId: "guid-1",
                unread: false,
                isStarred: false,
                subject: "Training Program",
                content:
                  "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
              },
              {
                mId: "guid-2",
                unread: true,
                isStarred: false,
                subject: "Empower your future",
                content:
                  "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
              },
              {
                mId: "guid-3",
                unread: true,
                isStarred: true,
                subject: "Pre Approved Loan",
                content:
                  "Congratulations ! <u>Credit card<u> is being shipped to you today!"
              },
              {
                mId: "guid-4",
                unread: true,
                isStarred: false,
                subject: "You won a lottery!",
                content:
                  "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
              },
              {
                mId: "guid-5",
                unread: true,
                isStarred: false,
                subject: "Invact Finance Program",
                content:
                  "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
              },
              {
                mId: "guid-6",
                unread: true,
                isStarred: false,
                subject: "neoG Camp Interview",
                content:
                  "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
              },
              {
                mId: "guid-7",
                unread: true,
                isStarred: false,
                subject: "Pre Approved Loan 1",
                content:
                  "Congratulations ! <u>Credit card<u> is being shipped to you today!"
              },
              {
                mId: "guid-8",
                unread: true,
                isStarred: false,
                subject: "You won a lottery! 8th time",
                content:
                  "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
              }
            ],
            user: {
              name: "Raju",
              bio: "25 din mein paisa double",
              img:
                "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/no-akshay-kumar-no-hera-pheri-3-finally-worked-producers-to-bring-back-khiladi-001.jpg"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found."
        });
      }
    }, 2000);
  });
};
