import React from "react";
import { useDispatch } from "react-redux";
import {
  setReadStatus,
  setMailOpen,
  setCurrentMail,
} from "../../Store/emailsDataSlice";

const EmailCard = ({ emailData }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setReadStatus(emailData));
    dispatch(setMailOpen(true));
    dispatch(setCurrentMail(emailData));
  };

  const date = new Date(emailData.date);
  const minute = date.getMinutes();
  const paddedMinute = `${minute}`.length > 1 ? minute : String(minute).padStart(2, "0");

  const isUnread = emailData.readStatus === "unread";

  return (
    <div
      className={`flex items-start gap-4 border-[#cfd2dc] border-[1.25px] px-5 py-1 rounded-md cursor-pointer ${isUnread ? "border-l-[#e54065] border-l-4 bg-white" : ""}`}
      onClick={handleClick}
    >
      {/* Avatar */}
      <span className="uppercase text-xl font-semibold text-white bg-[#e54065] min-w-[35px] min-h-[35px] mt-1 rounded-full flex justify-center items-center">
        {emailData.from.name.charAt(0)}
      </span>

      <div className="text-sm">
        <p className={`text-sm ${isUnread ? "bg-white" : ""}`}>
          <span className={`text-sm ${isUnread ? "bg-white" : ""}`}>From: </span>
          <span className={`capitalize font-medium ${isUnread ? "bg-white" : ""}`}>
            {emailData.from.name}
          </span>
          <span className={`font-medium ${isUnread ? "bg-white" : ""}`}>{` <${emailData.from.email}>`}</span>
        </p>

        <div className={`${isUnread ? "bg-white" : ""}`}>
          <span className={`${isUnread ? "bg-white" : ""}`}>Subject: </span>
          <span className={`capitalize font-medium ${isUnread ? "bg-white" : ""}`}>
            {emailData.subject}
          </span>
        </div>

        <p className={`text-sm ${isUnread ? "bg-white" : ""}`}>
          {emailData.short_description}
        </p>

        <div className={`text-sm ${isUnread ? "bg-white" : ""}`}>
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          <span className={`ml-2 ${isUnread ? "bg-white" : ""}`}>
            {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:
            {paddedMinute}
            {date.getHours() >= 12 ? `pm` : `am`}
          </span>
        </div>

        {emailData.favourite && (
          <span className="text-sm font-semibold text-[#e54065] ml-10">
            favorite
          </span>
        )}
      </div>
    </div>
  );
};

export default EmailCard;
