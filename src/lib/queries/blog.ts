// Blog Getters

// packages
import "server-only";
import { cache } from "react";

// types
import { LandingUpdate } from "@/types";

export const getBlogs = cache(async () => {
  try {
    const date = Date.now();
    const data : LandingUpdate[] = [
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

    return data;
  } catch (error) {
    console.log("failed to fetch blogs");
    return null;
  }
});
