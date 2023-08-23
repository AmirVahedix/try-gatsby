import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>AmirVahedix in Gatsby</h1>
      <p>is this related to The Great Gatsby Movie???</p>
      <Link to="/about" className="text-blue-800">
        About
      </Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
