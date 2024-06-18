// Blog Getters

// packages
import "server-only";
import { cache } from "react";

// types
import { LandingUpdateType } from "@/types";

export const getBlogs = cache(async () => {
  try {
    const date = Date.now();
    const data : LandingUpdateType[] = [
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
      { date, type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    ];

    await new Promise(resolve => setTimeout(resolve, 5000));

    return { data };
  } catch (error) {
    console.log("failed to fetch blogs");
    return {
      error: "Failed to fetch blogs at this time.",
    };
  }
});
