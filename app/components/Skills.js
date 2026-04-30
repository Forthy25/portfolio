"use client";

export default function Skills() {
  const techSkills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Express" },
    { name: "Tailwind" },
  ];

  const designSkills = [{ name: "Photoshop" }, { name: "Illustrator" }, { name: "Indesign" }];

  const SkillCard = ({ skill }) => (
    <div className="group relative px-4 sm:px-5 py-3 sm:py-3 border border-gray-300 rounded-full text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
      <p className="font-medium text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition">
        {skill.name}
      </p>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-20 md:py-32 bg-white scroll-animate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center tracking-tight">
          Mein Tech-Stack
        </h2>

        {/* TECH CATEGORY */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6 sm:mb-8">Tech</h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {techSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* DESIGN CATEGORY */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6 sm:mb-8">Design</h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {designSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
