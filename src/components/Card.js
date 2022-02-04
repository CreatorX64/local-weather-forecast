export default function Card({ children }) {
  return (
    <div className="h-[450px] w-full max-w-md space-y-8 rounded-3xl bg-white p-12 shadow-xl sm:max-w-xl sm:space-y-10 lg:max-w-2xl">
      {children}
    </div>
  );
}
