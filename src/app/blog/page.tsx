"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import BlogCard from '../../../components/cards/blogCard';

interface BlogPost {
  title: string;
  link: string;
  contentSnippet: string;
  pubDate: string;
  image?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => {
        if (!res.ok) {
          console.error("API response not OK:", res.status, res.statusText);
          return res.text().then(text => {
            console.error("Error response:", text);
            throw new Error(`API error: ${res.status}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received blog posts:", data);
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Unexpected data format:", data);
          setError("Received invalid data format from server");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog posts:", error);
        setError("Failed to load blog posts. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const truncateDescription = (text: string, maxLength: number = 120): string => {
    if (!text) return "No description available";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center font-[Satoshi]">
          Our <span className="text-[#D3B6FB]">Blogs</span>
        </h1>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D3B6FB]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-xl text-red-400">{error}</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                description={truncateDescription(post.contentSnippet)}
                imageUrl={post.image || "/blog-placeholder.jpg"} 
                link={post.link}
                width="w-full"
                height="h-[420px]"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">No blog posts found.</p>
          </div>
        )}
      </div>
    </main>
  );
}