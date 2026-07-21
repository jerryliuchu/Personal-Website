import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering the wrong icon before the theme is known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground transition-colors hover:bg-muted"
      data-testid="theme-toggle"
    >
      {mounted && (
        <>
          <Sun
            className={`h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
              isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
              isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
            }`}
          />
        </>
      )}
    </button>
  );
}
