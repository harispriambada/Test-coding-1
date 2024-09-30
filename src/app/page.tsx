import Navbar from "./_components/Navbar";
import TableData from "./_components/TableData";
import { getData } from "./api/actions";

export default async function Home() {
  const dataUniversitas = await getData();

  return (
    <div className="mx-auto  container">
      <Navbar />

      <TableData data={dataUniversitas} />
    </div>
  );
}
