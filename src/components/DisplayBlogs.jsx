import { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog posts from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://tourist-server-six.vercel.app/blogs"); // Adjust the endpoint if necessary
        if (response.ok) {
          const data = await response.json();
          setBlogs(data); // Assuming the response is an array of blog posts
        } else {
          console.error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {blogs.length === 0 ? (
        <div>No blog posts available.</div>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="border-b pb-4 mb-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              {blog.image && (
                <div className="mt-4">
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
              <p className="text-gray-600">{blog.content}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
