// api imitation

export async function fetchData() {
  const response = await fetch("/data.json");
  return await response.json();
}
