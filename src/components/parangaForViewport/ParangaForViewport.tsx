import { useEffect, useState } from "react";
import { Icon_loader } from "./Icons";
export const ParangaForViewport = ({ channel }: { channel?: string }) => {
  const [dispalyElement, setDispalyElement] = useState(false);
  const parangaSetDisplay = (e?: Event) => {
    if (channel) {
      const ce = e as CustomEvent | undefined;
      const detail: any = ce?.detail;
      if (!detail || detail.channel !== channel) return;
    }
    setDispalyElement(true);
  };
  const parangaSetHide = (e?: Event) => {
    if (channel) {
      const ce = e as CustomEvent | undefined;
      const detail: any = ce?.detail;
      if (!detail || detail.channel !== channel) return;
    }
    setDispalyElement(false);
  };
  useEffect(() => {
    window.addEventListener("hideParange", parangaSetHide as EventListener);
    window.addEventListener("showParange", parangaSetDisplay as EventListener);

    return () => {
      window.removeEventListener(
        "hideParange",
        parangaSetHide as EventListener,
      );
      window.removeEventListener(
        "showParange",
        parangaSetDisplay as EventListener,
      );
    };
  }, []);
  return (
    <>
      {dispalyElement && (
        <div className="fixed inset-0 top-0 left-0 z-[1311] flex items-center justify-center w-screen h-screen transition-all duration-500 ease-in-out bg-[rgba(255,255,255,0.65)]">
          <Icon_loader className="rotate" />
        </div>
      )}
    </>
  );
};

export default ParangaForViewport;
