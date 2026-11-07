import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* The Card Container */}
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* The Image */}
        <div className="relative h-64 w-full">
          <Image
            src="/lson.jpeg"
            alt="Profile Picture"
            fill
            sizes="(max-width: 384px) 100vw, 384px"
            className="object-cover"
            priority
          />
        </div>

        {/* The Content */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-brand mb-2">
            Tailwind CSS Practice
          </h1>
          <p className="text-gray-600 mb-4">
            This profile card was built using Tailwind CSS utility classes. 
            No custom CSS files were needed for this layout!
          </p>
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Learn Tailwind
          </a>
        </div>
      </div>
    </main>
  );
}