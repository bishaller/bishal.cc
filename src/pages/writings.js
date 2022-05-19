import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo"

const WritingsPage = () => {
  return (
    <main>
      <Seo 
        title="Writings by Bishal Mishra"
        description="I am trying to write a few articles."
        />
      <Layout>
        <h1> Writings</h1>
      </Layout>
    </main>
  );
};
export default WritingsPage;
