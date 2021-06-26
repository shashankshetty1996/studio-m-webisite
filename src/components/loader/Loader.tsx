import { FC } from "react";

const Loader: FC<{}> = () => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex border-gray-700 items-center justify-center z-50">
      <span
        style={{ borderTopColor: "#b38a4a" }}
        className="animate-spin ease-linear rounded-full border-full border-8 border-gray-200 h-16 w-16"
      ></span>
    </div>
  );
};

export default Loader;
