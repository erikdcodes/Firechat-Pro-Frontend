import { useRecoilState } from "recoil";
import { currentUserState } from "../Store/UIState";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const updateCurrentUser = (newUser) => {
    setCurrentUser(newUser);
  };
  return [currentUser, updateCurrentUser];
};

export default useCurrentUser;
