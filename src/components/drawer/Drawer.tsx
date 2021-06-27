import { FC } from "react";

interface Props {
  show: boolean;
  className?: string;
}

const Drawer: FC<Props> = (props) => {
  const { show, className } = props;
  let containerClassName = `fixed inset-y-0 h-screen w-9/12 z-30 bg-white shadow-2xl ${
    show ? "-left-0" : "-left-3/4"
  } ${className}`;

  return <aside className={containerClassName}>{props.children}</aside>;
};

export default Drawer;
