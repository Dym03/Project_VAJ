export async function loader() {
  const res = await fetch(`${window.location.origin}/api/boulderGyms?grouped=true`);
  if (!res.ok) {
    throw new Response("Failed to load gyms", { status: res.status });
  }
  return res.json();
}