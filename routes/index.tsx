import { Head } from "aleph/react";
import SlsShow from "../components/slsShow.tsx";

export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>sls on web demo</title>
      </Head>
      <SlsShow />
    </div>
  );
}
