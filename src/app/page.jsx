'use client';
import React, { useState } from "react";
import axios from "axios";

const ThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnails, setThumbnails] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setThumbnails(null);

    try {
      const response = await axios.post("http://localhost:5000/api/get-thumbnails", {
        videoUrl,
      });
      setThumbnails(response.data.thumbnails);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get("http://localhost:5000/api/download", {
        params: { url },
        responseType: "blob",
      });

      // Create a blob URL and trigger download
      const blob = new Blob([response.data], { type: response.headers["content-type"] });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `thumbnail-${Date.now()}.jpg`;
      link.click();
    } catch (error) {
      alert("Failed to download the image.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>YouTube Thumbnail Downloader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Get Thumbnails
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {thumbnails && (
        <div style={{ marginTop: "20px" }}>
          <h2>Thumbnails:</h2>
          {Object.entries(thumbnails).map(([key, url]) => (
            <div key={key} style={{ marginBottom: "20px" }}>
              <p>{key.toUpperCase()}</p>
              <img src={url} alt={key} style={{ maxWidth: "300px", display: "block", margin: "0 auto" }} />
              <button
                onClick={() => handleDownload(url)}
                style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
              >
                Download {key.toUpperCase()} Thumbnail
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThumbnailDownloader;
