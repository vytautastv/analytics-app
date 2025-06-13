import Link from 'next/link';
import { Card } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Key Marketing Metrics',
    excerpt: 'Learn about the most important metrics to track for your marketing campaigns.',
    date: '2024-03-01',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Maximizing ROI with Data-Driven Decisions',
    excerpt: 'How to use analytics data to make better business decisions and improve ROI.',
    date: '2024-02-28',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The Future of Web Analytics',
    excerpt: 'Exploring upcoming trends and technologies in web analytics and tracking.',
    date: '2024-02-25',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Insights and guides about analytics, marketing, and business growth
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="p-6">
            <article>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold hover:text-primary">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="text-sm text-muted-foreground">
                  {post.readTime}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
}
