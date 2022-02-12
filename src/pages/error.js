import Link from "next/link";
import Card from "../components/Card";

export function getServerSideProps(context) {
  const { message } = context.query;

  if (message) {
    return {
      props: {
        message
      }
    };
  } else {
    return {
      props: {
        message:
          "Cannot access weather services right now. Please try again later."
      }
    };
  }
}

export default function ErrorPage({ message }) {
  return (
    <Card>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 text-center font-medium">
        <p>{message}</p>
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
