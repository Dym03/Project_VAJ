export async function loader({ params }) {
    const res = await fetch("/api/boulders");

    if (!res.ok) {
        throw new Response("Boulders not found", { status: 404 });
    }
    
    return res.json()
  }
