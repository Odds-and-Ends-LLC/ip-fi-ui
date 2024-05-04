// components
import UpdatesCarousel from "./UpdatesCarousel";

// fetch update blogs here please
const getUpdates = async () => {
  const mockUpdates = [
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
    { date: "Jan 1, 2023", type: "Blog", title: "Title", image: "/images/blog-placeholder.png" },
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
