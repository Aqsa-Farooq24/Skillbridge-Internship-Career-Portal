async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return res.json();
}

export default async function HealthPage() {
  const data = await getData();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Health Check</h1>

      <p className="mt-4">
        API Status: Connected
      </p>

      <p className="mt-2">
        Sample Data: {data.title}
      </p>
    </main>
  );
}