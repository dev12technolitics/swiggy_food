import Head from "next/head";
import { HomePage } from "../components/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Swiggy Food</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Poppins:wght@100&display=swap" rel="stylesheet"/>
      </Head>
      <HomePage />
    </div>
  );
}
