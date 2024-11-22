export default function Skills() {
  return (
    <div id='skills-section' className="w-full flex flex-col items-center justify-center min-h-96 bg-slate-900">
      <h2 className="text-3xl font-medium\ text-pink-400 mb-16"><span className="text-white">Our </span>Skills</h2>
      <div className="grid grid-cols-2 gap-52 text-white text-center">
        <ul className="space-y-6">
          <li className="text-2xl">Typescript</li>
          <li className="text-2xl">Node.js</li>
          <li className="text-2xl">React.js</li>
        </ul>
        <ul className="space-y-6">
          <li className="text-2xl">Tailwind</li>
          <li className="text-2xl">Next.js</li>
          <li className="text-2xl">CSS</li>
        </ul>
      </div>
    </div>
  );
}
