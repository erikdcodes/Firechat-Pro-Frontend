import { useEffect } from "react";
import { getAuth } from "@firebase/auth";
import Routes from "./Routes";
import useCurrentUser from "./Hooks/useCurrentUser";
import useIsAuthLoading from "./Hooks/useIsAuthLoading";

const App = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useCurrentUser();
  const [isAuthLoading, setIsAuthLoading] = useIsAuthLoading();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user?.toJSON());
      setIsAuthLoading(false);
    });

    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Routes />;
};

export default App;
