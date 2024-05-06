// components
import { LandingUpdate } from "@/types";
import UpdatesCarousel from "./UpdatesCarousel";

// fetch update blogs here please
const getUpdates = async () => {
  const date = Date.now();
  const mockUpdates : LandingUpdate[] = [
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

  await new Promise(resolve => setTimeout(resolve, 1000));

  return mockUpdates;
};

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <UpdatesCarousel updates={updates} />
  )
}
