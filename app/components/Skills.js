export default function Skills() {
  const techSkills = [
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Express", icon: "🚀" },
    { name: "Tailwind", icon: "🌊" },
  ];

  const designSkills = [
    { name: "Photoshop", icon: "🎞️" },
    { name: "Illustrator", icon: "✏️" },
    { name: "Indesign", icon: "📑" },
  ];

  const SkillCard = ({ skill, isDark = false }) => (
    <div
      className={`group relative border-2 rounded-xl p-6 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        isDark
          ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:from-slate-700 hover:to-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/40"
          : "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300 hover:from-slate-200 hover:to-slate-300 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-400/40"
      }`}
    >
      <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <p
        className={`font-semibold text-sm sm:text-base ${
          isDark ? "text-white" : "text-slate-800"
        }`}
      >
        {skill.name}
      </p>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Mein Tech-Stack
        </h2>

        {/* TECH CATEGORY */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-slate-700 rounded" />
            <h3 className="text-2xl font-bold text-gray-800">Tech</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {techSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} isDark={false} />
            ))}
          </div>
        </div>

        {/* DESIGN CATEGORY */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-slate-900 rounded" />
            <h3 className="text-2xl font-bold text-gray-800">Design</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {designSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} isDark={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
