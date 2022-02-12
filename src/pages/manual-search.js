import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../components/Card";

export default function ManualSearchPage() {
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    if (address.trim() === "") {
      setError("Please enter an address");
    } else {
      router.push(`/forecast?address=${encodeURIComponent(address)}`);
    }
  }

  function handleChange(event) {
    if (event.target.value.trim() === "") {
      setError("Please enter an address");
    } else {
      setError("");
    }
    setAddress(event.target.value);
  }

  return (
    <Card>
      <form className="flex h-full w-full flex-col items-stretch justify-start">
        <h1 className="mb-12 text-3xl font-bold">Manual Search</h1>
        <div>
          <label htmlFor="address" className="mb-2 block font-medium">
            Enter your address
          </label>
          <textarea
            id="address"
            type="text"
            name="address"
            placeholder="Istanbul, Turkey ..."
            className="focusable block w-full resize-none overflow-auto rounded-2xl border px-4 py-1"
            value={address}
            onChange={handleChange}
            required
          />
          <p className="text-right text-red-400">{error}</p>
        </div>
        <div className="mt-auto">
          <button
            className="group focusable cursor-pointer rounded-full bg-primary-soft px-4 py-1 text-white transition hover:bg-primary sm:px-5 sm:py-2"
            onClick={handleSubmit}
          >
            Get weather{" "}
            <span className="inline-block transition group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
      </form>
    </Card>
  );
}
