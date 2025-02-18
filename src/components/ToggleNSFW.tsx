import { useMainContext } from "../MainContext";
import ReactSwitch from "react-switch";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useEffect } from "react";
import { useTheme } from "next-themes";
const ToggleNSFW = () => {
  const context: any = useMainContext();
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [context]);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <label className="flex flex-row items-center justify-between cursor-pointer">
        <span>NSFW</span>

        <ReactSwitch
          onChange={() => context.toggleNSFW()}
          checked={context.nsfw !== "false"}
          checkedHandleIcon={<div></div>}
          checkedIcon={
            <div className="flex items-center justify-center h-full text-sm font-white dark:font-darkBG">
              <VscEye />
            </div>
          }
          uncheckedHandleIcon={<div></div>}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#FFFBEB",
                fontSize: 18,
              }}
            >
              <VscEyeClosed />
            </div>
          }
          offColor="#059669"
          onColor={theme === "dark" ? "#4B5563" : "#D1D5DB"}
          offHandleColor="#4ADE80"
          onHandleColor={theme === "dark" ? "#991B1B" : "#EF4444"}
        />
      </label>
    </div>
  );
};

export default ToggleNSFW;
