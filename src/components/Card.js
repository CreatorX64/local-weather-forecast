export default function Card({ children }) {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-10 shadow-xl sm:h-[480px] sm:max-w-xl sm:p-12 lg:max-w-2xl">
      {children}
    </div>
  );
}
