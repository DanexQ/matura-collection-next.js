"use client";
import { MobileNavProps } from "./MobileMenu";

const BurgerMenu = ({
  isActive,
  onClick,
}: Omit<MobileNavProps, "children">) => {
  return (
    <div
      className="flex items-center justify-center w-6 h-full cursor-pointer group md:hidden"
      onClick={onClick}
    >
      <div
        className={`w-6 h-1 rounded  relative transition-all after:transition-all before:transition-all after:content-[''] after:h-1 after:rounded after:bg-neutral-200 after:absolute before:group-hover:bg-fuchsia-500 before:content-[''] before:h-1 before:rounded before:bg-neutral-200 before:absolute after:group-hover:bg-fuchsia-500 ${
          isActive
            ? "bg-transparent after:w-full after:translate-x-0 before:translate-x-0 before:w-full after:rotate-45 before:-rotate-45"
            : "bg-neutral-200 after:w-3 before:w-3 before:translate-x-1/2 after:translate-x-1/2 after:translate-y-2 before:-translate-y-2 group-hover:bg-fuchsia-500"
        }`}
      />
    </div>
  );
};

export default BurgerMenu;
