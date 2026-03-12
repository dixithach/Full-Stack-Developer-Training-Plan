import React from "react";

const DashboardIcon = () => (
  <svg
    className="w-6 h-6 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 10h18M3 14h18M4 6h16M4 18h16"
    ></path>
  </svg>
);

const CoursesIcon = () => (
  <svg
    className="w-6 h-6 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6.253v11.494m-6.253-5.647l12.5 0"
    ></path>
  </svg>
);

const ProjectsIcon = () => (
  <svg
    className="w-6 h-6 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 13v9m4-9v9m4-9v9M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
    ></path>
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="w-6 h-6 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="p-6 text-2xl font-semibold">Vitae Hub</div>
        <nav className="mt-8">
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <CoursesIcon />
            <span>Courses</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <ProjectsIcon />
            <span>Projects</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Student Dashboard
          </h1>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-600">
                Total Courses
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-600">
                Completed Projects
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">8</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-600">
                Pending Tasks
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-600">
                Certificates Earned
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">3</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>
            <ul>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  Completed 'React Fundamentals' course
                </span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Submitted 'Project Alpha'</span>
                <span className="text-sm text-gray-500">5 days ago</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  Started 'Advanced CSS' course
                </span>
                <span className="text-sm text-gray-500">1 week ago</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">
                  New task assigned: 'Final Project Proposal'
                </span>
                <span className="text-sm text-gray-500">1 week ago</span>
              </li>
              <li className="flex justify-between items-center py-3">
                <span className="text-gray-700">
                  Earned 'JavaScript Basics' certificate
                </span>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
