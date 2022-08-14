import { React } from "react";

import Notes from "./Notes";
export const FlashCards = (props) => {
  const { showAlert } = props;
  return (
    <>
      <div>
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
};

export default FlashCards;
