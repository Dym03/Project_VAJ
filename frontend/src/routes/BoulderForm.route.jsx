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
    const formData = await request.formData();
    const actionType = formData.get("_action");
  
    if (actionType === "create") {
      const body = {
        name: formData.get("name"),
        grade: formData.get("grade"),
        builderName: formData.get("builderName"),
        gym_id: formData.get("gym_id"),
      };
  
      const res = await fetch("/api/boulders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        return redirect("/active_boulders");
      } else {
        const error = await res.json();
        throw new Response(error.error || "Failed to create boulder", {
          status: 400,
        });
      }
    }
  
    if (actionType === "delete") {
      const id = formData.get("id");
  
      const res = await fetch(`/api/boulders/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        return redirect("/active_boulders");
      } else {
        const error = await res.json();
        throw new Response(error.error || "Failed to delete boulder", {
          status: 400,
        });
      }
    }
  
    return null;
  }
  