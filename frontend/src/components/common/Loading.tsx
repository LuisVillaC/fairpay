import type { FC } from "react";
import { Icons } from "../ui/Icons";

const Loading: FC = () => (
  <div className="h-full max-w-screen-2xl items-center rounded-lg border border-gray-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-800">
    <div className="flex items-center justify-center text-gray-600">
      <Icons.Spinner className="mr-2 h-8 w-8 animate-spin fill-green-700 text-gray-200 dark:text-gray-600" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
export default Loading;
