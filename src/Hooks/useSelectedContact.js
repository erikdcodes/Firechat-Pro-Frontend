import { useRecoilState } from "recoil";
import { selectedContactState } from "../Store/UIState";

const useSelectedContact = () => {
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  return [selectedContact, setSelectedContact];
};

export default useSelectedContact;
