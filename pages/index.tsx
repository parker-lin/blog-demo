import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-2">
            <Link href={`/posts/${post.slug}`} className="text-xl text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 text-sm">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
