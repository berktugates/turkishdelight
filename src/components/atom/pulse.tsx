export default function Pulse() {
  return (
    <div className="w-4 h-4 text-orange-600 relative">
      <div className="absolute inset-0 bg-current rounded-full opacity-50 animate-ping"></div>
      <div className="absolute inset-1 bg-current rounded-full"></div>
    </div>
  );
}
