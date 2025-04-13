import { redirect } from 'react-router-dom';

export async function loader() {
    const res = await fetch(`${window.location.origin}/api/boulderGyms?grouped=true`);
    if (!res.ok) {
      throw new Response("Failed to load gyms", { status: res.status });
    }
    return res.json();
  }

export async function action({ request, params }) {
    const formData = new URLSearchParams(await request.formData());
  
    const gymData = {
      name: formData.get('name'),
      city: formData.get('city'),
      address: formData.get('address'),
    };
    
    console.log(gymData)

    const res = await fetch('/api/boulderGyms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gymData),
    });

    console.log(res)
  
    if (res.ok) {
      return redirect('/boulderGyms')
    } else {
      const error = await res.json();
      throw new Error("Failed to create gym: " + error.error);
    }
  }