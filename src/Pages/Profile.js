import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";

const Profile = () => {
  const { user, user_id } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <AppLayout>
      <div>{JSON.stringify(user, null, 2)}</div>
    </AppLayout>
  );
};

export default Profile;
