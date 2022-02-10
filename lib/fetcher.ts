export async function fetcher<T>(url: string): Promise<T> {
  return await fetch(url).then((res) => res.json());
}
