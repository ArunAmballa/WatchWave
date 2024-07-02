import Image from "next/image";
import RoomComponent from "./pages/RoomComponent";
import UploadForm from "./components/uploadForm";
import YouTubeHome from "./pages/YouTubeHome";

export default function Home() {
  return (
  <div>
    <h1> Welcome to Watch Wave </h1>
    <YouTubeHome></YouTubeHome>
  </div>
  );
}
