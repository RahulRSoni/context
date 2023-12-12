import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(props) {
	const { user } = useContext(UserContext);

	if (!user) {
		return <div>Please Login</div>;
	} else {
		return (
			<div>
				Login Successfully!!
				<br />
				Welcome {user.userName}
			</div>
		);
	}
}

export default Profile;
