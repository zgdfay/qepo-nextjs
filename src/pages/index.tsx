import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { api } from "~/utils/api";
import { useTheme } from "next-themes";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-3xl font-bold">Hi World</h1>
        <Button>Klik</Button>
        <Button onClick={() => setTheme("dark")} size="icon">
          <Moon />
        </Button>
        <Button onClick={() => setTheme("light")} size="icon">
          <Sun />
        </Button>
      </main>
    </>
  );
}
