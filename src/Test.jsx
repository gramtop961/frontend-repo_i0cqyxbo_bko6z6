export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-neutral-900">Test Page</h1>
        <p className="mt-2 text-neutral-600">Routing is working. Navigate back to the home page to view the storefront.</p>
        <a href="/" className="mt-4 inline-block rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">Back to Home</a>
      </div>
    </div>
  );
}
