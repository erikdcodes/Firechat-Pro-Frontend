import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";

const Profile = () => {
  const { user } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <AppLayout>
      <div>{user?.name}</div>
    </AppLayout>
  );
};

export default Profile;
