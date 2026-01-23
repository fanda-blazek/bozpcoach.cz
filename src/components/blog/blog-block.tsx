import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { getLinkedInPosts } from "@/lib/linkedin";

interface BlogBlockProps {
  className?: string;
}

const BlogBlock = async ({ className }: BlogBlockProps) => {
  const posts = await getLinkedInPosts();

  if (!posts || posts.length < 1) return null;

  return (
    <section className={cn("py-8", className)}>
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-medium md:text-6xl">Insights and Trends Blog</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Stay updated with the latest insights, trends, and tips across various topics.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <a
            href={posts[0].link}
            target="_blank"
            className="group my-16 grid cursor-pointer grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16"
          >
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="aspect-video rounded-lg object-cover transition-opacity group-hover:opacity-90"
            />
            <div className="flex flex-col items-start gap-4">
              <Badge variant="secondary" className="shrink">
                {posts[0].category}
              </Badge>
              <h2 className="group-hover:text-primary text-2xl font-semibold text-balance transition-colors md:max-w-lg lg:text-3xl">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground md:max-w-lg">
                Zobrazit celý příspěvek na LinkedInu. Klikněte pro více informací o tomto tématu.
              </p>
            </div>
          </a>

          <p className="text-2xl font-medium md:text-3xl">Popular Posts</p>

          <div className="mt-32 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {posts.slice(1, 4).map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                className="group flex cursor-pointer flex-col items-start gap-4"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-video rounded-lg object-cover transition-opacity group-hover:opacity-90"
                />
                <Badge variant="secondary" className="shrink">
                  {post.category}
                </Badge>
                <h3 className="group-hover:text-primary text-xl font-semibold text-balance transition-colors md:max-w-md">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 md:max-w-md">
                  Zobrazit příspěvek na LinkedIn →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BlogBlock };
