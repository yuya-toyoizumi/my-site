import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 prose dark:prose-invert">
        <h2 className="text-xl font-bold">Not Found</h2>
        <p>Sorry, this page does not exist.</p>
        <p>
          <Link href="/" className="no-underline">
            Back Home -&gt;
          </Link>
        </p>
      </div>
    </>
  )
}
