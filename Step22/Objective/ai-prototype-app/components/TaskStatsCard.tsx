interface TaskStatsCardProps {
  totalTasks: number;
  completedTasks: number;
}

export default function TaskStatsCard({
  totalTasks,
  completedTasks,
}: TaskStatsCardProps) {
  const percentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Task Overview</h2>

      <div className="mb-2">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-sm mt-2 text-gray-600">
        {percentage.toFixed(0)}% completed
      </p>
    </div>
  );
}