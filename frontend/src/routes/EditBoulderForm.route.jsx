export async function editBoulderLoader({ params }) {
    const [boulderRes, gradeOptionsRes] = await Promise.all([
      fetch(`/api/boulders/${params.id}`),
      fetch(`/api/gradeValues`)
    ]);
  
    if (!boulderRes.ok) {
      throw new Response("Boulder not found", { status: 404 });
    }
  
    const boulder = await boulderRes.json();
    const gradeOptions = await gradeOptionsRes.json();
  
    return {
      boulder,
      gradeOptions,
    };
  }
  