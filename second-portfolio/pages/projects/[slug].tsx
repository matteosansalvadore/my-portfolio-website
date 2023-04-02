import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// export default function Project() {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <>
//       <Head></Head>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export async function getStaticProps({ params }) {
//   const req = await fetch(`https://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { project: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch(`https://localhost:3000/projects.json`);
//   const data = await req.json();

//   const paths = data.map((project) => {
//     return { params: { id: project } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
