import { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const AboutPage: React.FC<PageProps> = () => {
  return <div>About Page</div>;
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
