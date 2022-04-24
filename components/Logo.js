import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg height="40" width="40">
      <image
        height="40"
        width="40"
        href={
          !mounted
            ? "logo_blue.svg"
            : resolvedTheme === "dark"
            ? "/logo_blue.svg"
            : "logo_green.svg"
        }
        alt="webt logo"
      />
    </svg>
  );
}
