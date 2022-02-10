export default function Card({ children }) {
  return (
    <div className="mx-auto flex h-[480px] w-full max-w-md flex-col items-center justify-start gap-2 rounded-3xl bg-white p-12 shadow-xl sm:max-w-xl sm:gap-10 lg:max-w-2xl">
      {children}
    </div>
  );
}
