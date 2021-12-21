import { useRecoilState } from "recoil";
import { showUnreadNotificationState } from "../Store/UIState";

const useShowUnreadNotification = () => {
  const [showUnreadNotification, setShowUnreadNotification] = useRecoilState(
    showUnreadNotificationState
  );

  return [showUnreadNotification, setShowUnreadNotification];
};

export default useShowUnreadNotification;
