export function loader() {
    return fetch("https://special-guide-q7767jrrv774f65wv-3000.app.github.dev/api/boulderGyms?grouped=true").then((res) =>
      res.json()
    );
}