import { Button } from "./Button";

export function HeaderForm() {
  return (
    <form className="flex gap-2">
      <input
        className="flex-1 bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
        placeholder="New habit..."
      ></input>
      <Button className="rounded-lg px-4 py-2 font-medium">Add habit</Button>
    </form>
  );
}
