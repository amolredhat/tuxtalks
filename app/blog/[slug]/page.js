import { getPostData, getSortedPostsData } from '../../../lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} - Amol's Blog`,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column w-100 min-vh-100">
      <div className="my-auto" style={{ maxWidth: '800px', width: '100%' }}>
        <Link href="/blog" className="btn btn-primary mb-4" style={{ borderRadius: '20px' }}>&larr; Back to Blog</Link>
        <h1 className="mb-2 text-primary">{postData.title}</h1>
        <div className="subheading mb-4 text-muted">{postData.date}</div>
        <div 
          className="blog-content lead"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 { margin-top: 2rem; margin-bottom: 1.25rem; color: #f8fafc !important; }
        .blog-content p { color: var(--foreground); line-height: 1.8; margin-bottom: 1.5rem; }
        .blog-content pre { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; padding: 20px; border-radius: 12px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 0.9em; }
        .blog-content code { background: rgba(14, 165, 233, 0.1); color: var(--primary-accent); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; font-family: 'Courier New', monospace; }
        .blog-content a { color: var(--primary-accent); text-decoration: none; border-bottom: 1px dashed var(--primary-accent); transition: all 0.2s; }
        .blog-content a:hover { color: var(--primary-hover); border-bottom-style: solid; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 16px; margin: 2rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05); }
        .blog-content blockquote { border-left: 4px solid var(--primary-accent); padding-left: 1.5rem; color: #94a3b8; font-style: italic; margin: 2rem 0; background: rgba(14, 165, 233, 0.05); padding: 1rem 1.5rem; border-radius: 0 12px 12px 0; }
        .blog-content ul, .blog-content ol { color: var(--foreground); margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
      `}} />
    </section>
  );
}
