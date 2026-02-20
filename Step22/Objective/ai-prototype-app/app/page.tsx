import TaskStatsCard from "@/components/TaskStatsCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <TaskStatsCard totalTasks={20} completedTasks={8} />
    </main>
  );
}
