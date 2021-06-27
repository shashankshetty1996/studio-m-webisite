import { FC } from "react";

import "./Loader.css";

const Loader: FC<{}> = () => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex border-gray-700 items-center justify-center z-50">
      <span className="global-loader animate-spin ease-linear rounded-full border-full border-8 border-gray-200 h-16 w-16" />
    </div>
  );
};

export default Loader;
