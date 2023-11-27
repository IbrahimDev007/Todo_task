import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const useAuthcontext = () => {
	const AuthInfo = useContext(AuthContext);

	return AuthInfo;
};

export default useAuthcontext;
