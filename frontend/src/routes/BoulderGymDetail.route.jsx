export async function loader({ params }) {
    const res = await fetch(`api/boulderGyms/${params.id}`);
    if (!res.ok) {
      throw new Response("Gym not found", { status: 404 });
    }
    return res.json();
  }
  