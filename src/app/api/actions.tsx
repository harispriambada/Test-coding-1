"use server";
export async function getData() {
  const responses = await fetch(
    "http://universities.hipolabs.com/search?country=indonesia&name=universitas"
  );

  if (!responses.ok) {
    throw new Error("Maaf terjadi kesalahan saat memuat data");
  }

  const data = await responses.json();

  return data;
}
