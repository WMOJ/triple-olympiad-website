// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
const teamSections: {
  title: string;
  members: [string, string, string][];
}[] = [
    {
      title: "Computer Science Team",
      members: [
        ["Eric Feng", "pfp.png", "#"],
        ["Adam Abouaita", "adham.png", "https://wmoj.ca"],
        ["Darren Su", "darren.jpeg", "https://www.linkedin.com/in/wenxuan-su/"],
        ["Ayyan Hashmi", "pfp.png", "#"],
        ["Spencer Wu", "pfp.png", "#"],
        ["Mithru Naidu", "pfp.png", "#"],
        ["Aaron Deng", "pfp.png", "#"],
        ["Keshia Agung", "pfp.png", "#"],
        ["Olivia Wan", "pfp.png", "#"],
      ],
    },
    {
      title: "Physics Team",
      members: [
        ["Ian", "pfp.png", "#"],
        ["Chelsea", "pfp.png", "#"],
        ["Kahan", "pfp.png", "#"],
      ],
    },
    {
      title: "Math Team",
      members: [
        ["Ian", "pfp.png", "#"],
      ],
    },
  ];

export function TeamGrid() {
  return (
    <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-16 md:flex-row md:gap-20">
      {teamSections.map(({ title, members }) => (
        <section key={title} className="flex-1">
          <h3 className="text-white text-xl font-bold mb-6 text-center">
            <span className="gradient-text">{title}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {members.map(([name, photoUrl, link], index) =>
              link !== "#" ? (
                <a
                  key={name + index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-110 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden glass card-hover group-hover:glow-green">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div
                        className="w-full h-full rounded-2xl relative z-10"
                      >
                        {photoUrl !== "none" && (
                          <img
                            src={photoUrl}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                            draggable={false}
                          />
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-white text-sm font-semibold group-hover:text-emerald-300 transition-colors text-center">
                      {name}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={name + index} className="block group">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden glass">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-700/10 rounded-2xl"></div>
                      <div
                        className="w-full h-full rounded-2xl relative z-10"
                      >
                        {photoUrl !== "none" && (
                          <img
                            src={photoUrl}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                            draggable={false}
                          />
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-white text-sm font-semibold text-center">
                      {name}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
