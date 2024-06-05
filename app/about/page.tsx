import { resumes } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import "@/styles/mdx.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

async function getResumeData() {
  return resumes.at(0) || { body: "" };
}

export default async function AboutPage() {
  const resume = await getResumeData();
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.jpg" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-lg py-4">
            Highly skilled and experienced full-stack developer with 17 years of
            expertise in both front-end and back-end technologies. Proficient in
            React, Vue, and Next.js for front-end development, and Spring Boot,
            Spring Cloud, and Node.js for back-end development. Demonstrated
            leadership in microservices architecture and cloud technologies
            including Kubernetes, Hadoop. Strong command of Linux and shell
            scripting. Proven track record of leading technical projects,
            solving complex problems, and collaborating with cross-functional
            teams to deliver high-quality software solutions.
          </p>
          <hr className="my-4" />
          <article className="container px-0 prose dark:prose-invert max-w-3xl mx-auto">
            <MDXContent code={resume.body} />
          </article>
        </div>
      </div>
    </div>
  );
}
