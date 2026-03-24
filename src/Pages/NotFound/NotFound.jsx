import { Link } from "react-router";
import imageNotFound from "../../assets/page-not-found.svg";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title="FreshCard | Page Not Found"
        description="The page you are looking for does not exist. Please check the URL or return to the homepage."
        author="FreshCard Team"
        keywords="FreshCard, not found, 404, error, page not found, groceries, online shopping"
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 text-gray-700 px-4">
        <div className="flex flex-col items-center">

          <img src={imageNotFound} alt="imageNotFound" className="size-60" />
          <h1 className="my-2 text-2xl font-semibold">Page Not Found</h1>
          <p className="mb-2 text-center max-w-md">
            Oops! The page you are looking for doesn’t exist or has been moved.
            <br />
            Please check the URL or return to the homepage.
          </p>
          <Link
            to="/"
            className="mt-5 px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            Go Home
          </Link>
          <div className="mt-6 text-sm text-gray-500">
            <span>If you think this is a mistake, contact </span>
            <a
              href="mailto:support@freshcard.com"
              className="text-green-600 underline hover:text-green-700"
            >
              support@freshcard.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
