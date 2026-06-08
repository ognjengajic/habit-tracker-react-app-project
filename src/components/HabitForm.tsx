import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";
import { useHabit } from "../context/HabitProvider";

export function HabitForm() {
  const [name, setName] = useState("");
  const { addHabit } = useHabit();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (name.trim() === "") return;
    setName("");
    addHabit(name);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
        placeholder="New habit..."
      ></input>
      <Button
        disabled={name.trim() === ""}
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add habit
      </Button>
    </form>
  );
}
