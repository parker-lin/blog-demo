import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      slug,
      content,
    };
  });
}
