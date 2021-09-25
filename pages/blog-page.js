import Link from "next/link";
import Layout from "../components/Layout";

export default function BlogPage() {
  return (
    <Layout title="Blog page">
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7">
            </path>
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}
