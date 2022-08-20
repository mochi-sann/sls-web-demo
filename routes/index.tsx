import { Head, Link } from "aleph/react";
import SlsShow from "../components/slsShow.tsx";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <SlsShow />
    </div>
  );
}
