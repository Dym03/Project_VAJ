export async function loader({ params }) {
    const res = await fetch(`https://special-guide-q7767jrrv774f65wv-3000.app.github.dev/api/boulderGyms/${params.id}`);
    if (!res.ok) {
      throw new Response("Gym not found", { status: 404 });
    }
    return res.json();
  }
  