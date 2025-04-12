export function loader() {
    return fetch("http://localhost:3000/api/boulderGyms?grouped=true").then((res) =>
      res.json()
    );
}