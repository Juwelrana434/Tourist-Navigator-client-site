import { useState, useRef } from "react";
import DisplayBlogs from './../components/DisplayBlogs';

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // ImgBB API key
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY; // Ensure you set your key
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // Refs for file input
  const fileInputRef = useRef(null);

  // Toggle the visibility of the form
  const toggleFormVisibility = () => setIsFormVisible((prev) => !prev);

  // Handle image upload (ImgBB)
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          setImage(data.data.url); // Save the ImgBB image URL
        } else {
          alert("Failed to upload image to ImgBB");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image");
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!image) {
      alert("Please upload an image before submitting the blog post.");
      setLoading(false);
      return;
    }

    const blogData = { title, content, image };

    try {
      const response = await fetch("https://tourist-server-six.vercel.app/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        alert("Blog post created successfully!");
        // Reset form if necessary
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        alert("Failed to post blog");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Error posting blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <DisplayBlogs></DisplayBlogs>
    
    
    <div className="max-w-2xl mx-auto px-4 py-10">
    <button
      onClick={toggleFormVisibility}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-6"
    >
      {isFormVisible ? "Hide Form" : "Create Blog"}
    </button>

    {isFormVisible && (
      <div>
        <h1 className="text-3xl font-semibold mb-6">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-lg font-medium mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium mb-2">Image</label>
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4"
            >
              Upload Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <div className="mt-4">
                <img src={image} alt="Uploaded" className="w-[300px] h-auto" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              {loading ? "Posting..." : "Post Blog"}
            </button>
          </div>
        </form>
      </div>
    )}
  </div></div>
  );
};

export default BlogPostForm;
