import VideoEditing from '@/src/Screen/InnerChildPages/VideoEditing';

export const metadata = {
  title: "Video Editing | Expert Web Solutions | California Web Coders",
  description: "Video editing services for professional post-production and marketing content.",
  keywords: ["video editing", "post-production", "marketing videos", "California Web Coders"],
  alternates: {
    canonical: "https://californiawebcoders.com/video-editing",
  },
};

export default function VideoEditingPage() {
  return <VideoEditing />;
}
