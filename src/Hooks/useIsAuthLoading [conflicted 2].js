import { useRecoilState } from "recoil";
import { isAuthLoadingState } from "../Store/UIState";

const useIsAuthLoading = () => {
  const [isAuthLoading, setIsAuthLoading] = useRecoilState(isAuthLoadingState);
  const updateIsAuthLoading = (newState) => {
    setIsAuthLoading(newState);
  };
  return [isAuthLoading, updateIsAuthLoading];
};

export default useIsAuthLoading;
