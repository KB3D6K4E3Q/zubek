export default function Profile() {
  return (
    <div className="flex min-h-screen bg-white p-8 text-black">
      {/* Sidebar */}
      <div className="w-1/3 flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Hello.</h1>
        <h2 className="text-lg text-gray-800">How Can I Help?</h2>
      </div>

      {/* Main Content */}
      <div className="w-2/3 flex flex-col justify-center">
        <p className="text-lg text-gray-700 max-w-lg">
        I'm <span className="font-semibold">Ondrej</span>, a 16-year-old developer and designer from Slovakia. Over the past 4 years, I've worked on several successful projects, primarily in the fintech space. I'm passionate about building innovative solutions and continuously expanding my skill set. I'm now eager to take on new challenges and collaborate on exciting projects.
        </p>
        <p className="mt-4 text-gray-700 max-w-lg">
        <p className="mt-4 text-gray-700 max-w-lg">
          I specialize in <span className="font-semibold">developing user-centric designs</span> and <span className="font-semibold">
            building seamless digital experiences</span>. From <span className="font-semibold">conceptualizing ideas</span> and {''}
            <span className="font-semibold">creating wireframes</span> to <span className="font-semibold">designing intuitive UI/UX</span> and <span className="font-semibold">optimizing for both web and mobile platforms</span>, I ensure each project delivers real value and impact.
        </p>
        </p>

        <div className="mt-8">
          <h2 className="font-semibold text-xl">Let's Connect</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="https://mail.google.com/mail/u/1/?fs=1&source=atom#search/namecheap?compose=GTvVlcSDbFRZKfkGTpRHsMhqVDfxBzqnzBbHWqBTCGlTgCcMdXNmvNMSVHZJXlVlWrNcWnsjqdmXq" className="text-blue-600 hover:underline">Email ↗</a></li>
            <li><a href="https://www.linkedin.com/in/ondrej-zubek-580b6534a/" className="text-blue-600 hover:underline">LinkedIn ↗</a></li>
            <li><a href="https://www.instagram.com/_ondrej.zubek_/?next=/" className="text-blue-600 hover:underline">Instagram →</a></li>
          </ul>
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          © 2025 Made with ❤️ by <a href="https://www.instagram.com/_ondrej.zubek_/?next=/">Ondrej</a>
          </footer>
      </div>
    </div>
  );
}
