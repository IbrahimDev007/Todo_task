import { useQuery } from "@tanstack/react-query";
import useInterceptor from "./useInterceptor";
const useTaskDataHook = () => {
	const [axiosSecure] = useInterceptor();
	const {
		data: task,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["task"],
		enabled: !isLoading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/`);
			console.log(res.data);
			return res.data;
		},
	});
	return [task, isLoading, refetch];
};
export default useTaskDataHook;
