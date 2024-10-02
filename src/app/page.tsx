import { Suspense } from "react";
import Navbar from "./_components/Navbar";
import TableData from "./_components/TableData";
import { getData } from "./api/actions";
import Loading from "./loading";

export default async function Home() {
  const dataUniversitas = await getData();

  return (
    <div className="mx-auto  container">
      <Navbar />

      <Suspense fallback={<Loading />}>
        <TableData data={dataUniversitas} />
      </Suspense>
    </div>
  );
}
