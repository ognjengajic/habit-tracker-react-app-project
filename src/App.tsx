import { Header } from "./components/Header";
import { HeaderForm } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";

export default function App() {
  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HeaderForm />
      <HabitList />
    </div>
  );
}
