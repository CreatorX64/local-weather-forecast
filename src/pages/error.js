import Link from "next/link";
import Card from "../components/Card";

export default function ErrorPage() {
  return (
    <Card>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 text-center font-medium">
        <p>Cannot access weather services right now. Please try again later.</p>
        <div>
          <p>
            <a className="link font-normal" href="mailto:creatorX64@gmail.com">
              Share the error with me ✉
            </a>
          </p>
          <p>
            <Link href="/">
              <a className="link font-normal">Back to home &rarr;</a>
            </Link>
          </p>
        </div>
      </div>
    </Card>
  );
}
