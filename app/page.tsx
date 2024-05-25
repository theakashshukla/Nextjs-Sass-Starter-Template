import { Icons } from "@/components/icons";
import Quest from "./quest/page";

export default function Home() {
  return (
    <main className="flex justify-center m-2">
      
      <Quest />
      <Icons.gitHub className="w-6 h-6" />

    </main>
  );
}
