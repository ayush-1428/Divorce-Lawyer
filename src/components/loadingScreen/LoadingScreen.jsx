// src/components/LoadingScreen.jsx
export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <span className="ml-4 text-xl font-semibold">Loading...</span>
    </div>
  );
}
