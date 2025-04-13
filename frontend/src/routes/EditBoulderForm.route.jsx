export async function editBoulderLoader({ params }) {
    const [boulderRes, gradeOptionsRes, gymsRes] = await Promise.all([
        fetch(`/api/boulders/${params.boulderId}`),
        fetch(`/api/gradeValues`),
        fetch(`/api/boulderGyms`),
      ]);
      
      if (!boulderRes.ok) {
        throw new Response("Boulder not found", { status: 404 });
      }
      
      const [boulder, gradeOptions, boulderGyms] = await Promise.all([
        boulderRes.json(),
        gradeOptionsRes.json(),
        gymsRes.json(),
      ]);
      
      return { boulder, gradeOptions, boulderGyms };
      
  }
  