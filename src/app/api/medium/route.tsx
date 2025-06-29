import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

type CustomFeed = {
  title: string;
  link: string;
  contentSnippet: string;
  content: string;
  pubDate: string;
  isoDate: string;
  thumbnail?: string; 
};

const parser = new Parser<{}, CustomFeed>();

function extractFirstImage(content: string): string | null {
  if (!content) return null;
  

  const patterns = [

    /<img[^>]+src="([^">]+)"/,
    
    /<figure[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"[\s\S]*?<\/figure>/,
    
    /src="(https:\/\/(?:cdn-images-1\.medium\.com|miro\.medium\.com|cdn\.medium\.com|images\.medium\.com|i\.medium\.com)[^"]+)"/,

    /background-image:url\(['"]?([^'"\)]+)['"]?\)/,
    
    /data-src="([^"]+)"/
  ];
  

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match && match[1]) {
      const url = match[1];
      if (!url.includes('stat?event=post') && !url.includes('icon') && !url.includes('logo')) {
        return url;
      }
    }
  }
  
  return null;
}

export async function GET() {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@stack.marketing');
    
    const posts = feed.items.map((item) => {
      let image = '/blog-placeholder.jpg';
      
      if (item.thumbnail) {
        image = item.thumbnail;
      }
      else if (item.content) {
        const extractedImage = extractFirstImage(item.content);
        if (extractedImage) {
          image = extractedImage;
        } else {
        }
      }
      
      return {
        title: item.title || 'Untitled Post',
        link: item.link || '#',
        contentSnippet: item.contentSnippet || 'No description available',
        pubDate: item.pubDate || new Date().toISOString(),
        image: image,
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}