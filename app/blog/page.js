import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

// Metadata for the SEO
export const metadata = {
  title: 'Blog - Amol Shinde',
};

export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="blog">
      <div className="my-auto">
        <h2 className="mb-5">My <span className="text-primary">Blog</span></h2>
        {allPostsData.length === 0 ? (
          <p>No blogs published yet! Add markdown files to the posts directory.</p>
        ) : (
          <ul className="list-unstyled">
            {allPostsData.map(({ id, date, title, description }) => (
              <li key={id} className="mb-4">
                <h3 className="mb-1">
                  <Link href={`/blog/${id}`} className="text-secondary" style={{textDecoration: 'none'}}>{title}</Link>
                </h3>
                <div className="subheading mb-2">{date}</div>
                <p>{description}</p>
                <Link href={`/blog/${id}`} className="font-weight-bold text-primary">Read More &rarr;</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
