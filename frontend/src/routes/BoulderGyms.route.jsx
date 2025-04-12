export function loader() {
    return fetch("api/boulderGyms?grouped=true").then((res) =>
      res.json()
    );
}