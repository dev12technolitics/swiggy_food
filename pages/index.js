import Head from 'next/head';
import { HomePage } from "../components/home";
export default function Home() {
  return (
    <div>
       <Head>
        <title>Swiggy Food</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"></meta>
      </Head>
      <HomePage />
    </div>
  );
}
