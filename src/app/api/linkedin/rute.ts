import { NextResponse } from "next/server";

export async function GET() {
  const mockPosts = [
    {
      title: "Jak efektivně škálovat Next.js aplikace v roce 2025",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/example-1",
    },
    {
      title: "Proč je LinkedIn skvělým nástrojem pro B2B marketing",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b319dd7?q=80&w=1000&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/example-2",
    },
    {
      title: "Budoucnost AI: Od chatbotů k autonomním agentům",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/example-3",
    },
    {
      title: "5 tipů pro lepší produktivitu při práci z domova",
      category: "Productivity",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/example-4",
    },
  ];

  /* //
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const orgUrn = process.env.LINKEDIN_PAGE_URN;

  if (token && orgUrn) {
    try {
      const response = await fetch(
        `https://api.linkedin.com/v2/shares?q=owners&owners=${orgUrn}&count=6`, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'X-Restli-Protocol-Version': '2.0.0',
          }
        }
      );
      const data = await response.json();
      
 
    } catch (error) {
      console.error("LinkedIn fetch error:", error);
    }
  } 
  */
  return NextResponse.json(mockPosts);
}
