import { useEffect } from "react";
import { getAuth } from "@firebase/auth";
import Routes from "./Routes";
import useCurrentUser from "./Hooks/useCurrentUser";
import useIsAuthLoading from "./Hooks/useIsAuthLoading";
import { useHistory } from "react-router-dom";

const App = () => {
  const auth = getAuth();
  const [, setCurrentUser] = useCurrentUser();
  const [, setIsAuthLoading] = useIsAuthLoading();
  const history = useHistory();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user?.toJSON());
        setIsAuthLoading(false);
        history.push("/inbox");
      }
    });

    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Routes />;
};

export default App;
