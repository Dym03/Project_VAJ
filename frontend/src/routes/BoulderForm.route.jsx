import { redirect } from 'react-router-dom';

export async function loader() {
    const [boulderGymsRes, gradeOptionsRes] = await Promise.all([
        fetch("/api/boulderGyms"),
        fetch("/api/gradeValues"),
      ]);
    
      if (!boulderGymsRes.ok) {
        throw new Response("Boulder Gyms not found", { status: 404 });
      }
      if (!gradeOptionsRes.ok) {
        throw new Response("Grades not found", { status: 404 });
      }
    
      const [boulderGyms, gradeOptions] = await Promise.all([
        boulderGymsRes.json(),
        gradeOptionsRes.json(),
      ]);
    
      return {
        boulderGyms,
        gradeOptions,
      };
  }


export async function action({ request }) {
    const formData = new URLSearchParams(await request.formData());
    const body = {
        name: formData.get('name'),
        grade: formData.get('grade'),
        builderName: formData.get("builderName"),
        gym_id: formData.get('gym_id')
    };

    const res = await fetch("/api/boulders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      return redirect('/active_boulders')
    } else {
      const error = await res.json();
      alert("Failed to add boulder: " + error.error);
    }
  };