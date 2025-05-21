import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostPage({ post }: { post: Post }) {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{post.date}</p>
      <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params?.slug);
  return { props: { post } };
};
