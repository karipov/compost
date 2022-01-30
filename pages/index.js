import Head from "next/head";
import Shell from "./shell";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ComPost</title>
        <meta
          name="description"
          content="Social application to green sustainability"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Shell />
    </div>
  );
}
