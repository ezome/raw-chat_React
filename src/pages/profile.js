import { useSelector, useDispatch } from "react-redux";
import { ProfileForm } from "../components/profile-form";
import { toggleVisibleProfile, fullProfileSelector } from "../store/profile";

export const ProfilePage = () => {
  const profile = useSelector(fullProfileSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />

      {profile.isVisibleProfile && (
        <>
          <h2>firstName: {profile.firstName}</h2>
          <h2>lastName: {profile.lastName}</h2>
          <h2>phone: {profile.phone}</h2>
        </>
      )}

      <button onClick={() => dispatch(toggleVisibleProfile())}>
        toggleVisibleProfile
      </button>

      <ProfileForm {...profile} />
    </div>
  );
};
