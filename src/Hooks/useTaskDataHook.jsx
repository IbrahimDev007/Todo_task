import { useQuery } from "@tanstack/react-query";
import useInterceptor from "./useInterceptor";
const useTaskDataHook = () => {
	const [axiosSecure] = useInterceptor();
	const {
		data: task = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["task"],
		queryFn: async () => {
			if (!isLoading) {
				const res = await axiosSecure.get("/");
				console.log("data-->", res.data); //check data
				return res.data;
			}
		},
	});
	return [task, refetch, isLoading];
};
export default useTaskDataHook;
