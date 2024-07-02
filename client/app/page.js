import Image from "next/image";
import RoomComponent from "./pages/RoomComponent";
import UploadForm from "./components/uploadForm";

export default function Home() {
  return (
  <div>
    <h1> Welcome to Watch Wave </h1>
    <UploadForm></UploadForm>
  </div>
  );
}
