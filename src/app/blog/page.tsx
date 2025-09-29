import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          My Stories & Yaps 🦑
        </h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <Link
          href="https://open.spotify.com/playlist/2oTT0Jrae4Ai9TLmghAeVZ?si=6986cdc06156418c"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-6 mt-10 mb-10 p-4 rounded-lg border hover:bg-accent transition"
        >
          <Image
            src="/spotify-cover.png"
            alt="Spotify Playlist"
            width={64}
            height={64}
            className="rounded"
            unoptimized // required for static export (output: "export")
          />
          <div className="flex flex-col gap-2">
            <p className="font-medium tracking-tight">Now Vibing 🎧</p>
            <p className="text-xs text-muted-foreground">My Spotify Picks</p>
          </div>
        </Link>
      </BlurFade>

      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
