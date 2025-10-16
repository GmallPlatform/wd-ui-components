import { useEffect, useState } from "react";
import { Icon_check_circle, Icon_close } from "./Icons";
import Collapse from "../collapse/Collapse";
export const Resultoutput = ({ channel }: { channel?: string }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSetError = (event: CustomEvent) => {
    if (channel) {
      const detail: any = event.detail;
      if (!detail || detail.channel !== channel) return;
      setError(detail.payload || "");
      return;
    }
    const data: string = event.detail || "";
    setError(data);
  };
  const handleSetSuccess = (event: CustomEvent) => {
    if (channel) {
      const detail: any = event.detail;
      if (!detail || detail.channel !== channel) return;
      setSuccess(detail.payload || "");
      return;
    }
    const data: string = event.detail || "";
    setSuccess(data);
  };
  useEffect(() => {
    window.addEventListener("setError", handleSetError as EventListener);
    window.addEventListener("setSuccess", handleSetSuccess as EventListener);
    return () => {
      window.removeEventListener("setError", handleSetError as EventListener);
      window.removeEventListener(
        "setSuccess",
        handleSetSuccess as EventListener,
      );
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[1301] flex flex-col items-center justify-center pb-6 w-fit">
        <Collapse
          in={Boolean(error && error !== "")}
          onClick={() => {
            setError("");
          }}
        >
          <div className="flex items-center gap-2 min-w-[360px]  p-3 rounded-md border border-[#e7e7e7] bg-[#fef2f0] text-[#262626]">
            <div className="flex flex-1 items-center gap-3 overflow-x-hidden">
              <Icon_check_circle className="w-4 h-4 text-[color:var(--icons-error-default)]" />
              <span className="body-m-medium text-default truncate">
                {error}
              </span>
            </div>
            <Icon_close className="w-4 h-4 text-[color:var(--icons-default-default)] cursor-pointer shrink-0" />
          </div>
        </Collapse>
        <Collapse
          in={Boolean(success && success !== "")}
          onClick={() => {
            setSuccess("");
          }}
        >
          <div className="flex items-center gap-2 min-w-[360px]  p-3 rounded-md border border-[#e7e7e7] bg-[#edfdf0] text-[#262626]">
            <div className="flex flex-1 items-center gap-3 overflow-x-hidden">
              <Icon_check_circle className="w-4 h-4 text-[color:var(--icons-success-default)]" />
              <span className="body-m-medium truncate">{success}</span>
            </div>
            <Icon_close className="w-4 h-4 text-[color:var(--icons-default-default)] cursor-pointer shrink-0" />
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Resultoutput;
