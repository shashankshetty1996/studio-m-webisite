import { FC } from "react";

interface Props {
  show: boolean;
}

const Drawer: FC<Props> = (props) => {
  const { show } = props;
  let containerClassName =
    "fixed inset-y-0 h-screen w-9/12 z-30 bg-white shadow-2xl -left-3/4";
  if (show) {
    containerClassName += "-left-0";
  }

  return <aside className={containerClassName}>{props.children}</aside>;
};

export default Drawer;
