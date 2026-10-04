// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
const teamSections: {
  title: string;
  members: [string, string, string][];
}[] = [
    {
      title: "Computer Science Team",
      members: [
        ["Darren Su", "darren.jpeg", "https://www.linkedin.com/in/wenxuan-su/"],
        ["Adam Abouaita", "none", "https://wmoj.ca"],
        ["Eric Feng", "none", "#"],
        ["Ayyan Hashmi", "none", "#"],
        ["Spencer Wu", "none", "#"],
        ["Mithru Naidu", "none", "#"],
        ["Aaron Deng", "none", "#"],
        ["Keshia Agung", "none", "#"],
        ["Olivia Wan", "none", "#"],
      ],
    },
    {
      title: "Physics Team",
      members: [
        ["Ian", "none", "#"],
        ["Chelsea", "none", "#"],
        ["Kahan", "none", "#"],
      ],
    },
    {
      title: "Math Team",
      members: [
        ["Ian", "none", "#"],
      ],
    },
  ];

export function TeamGrid() {
  return (
    <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-16 md:flex-row md:gap-20">
      {teamSections.map(({ title, members }) => {
        const withPhotos = members.filter(
          ([_, photoUrl]) => photoUrl && photoUrl !== "none" && photoUrl !== "pfp.png"
        );
        const withoutPhotos = members.filter(
          ([_, photoUrl]) => !photoUrl || photoUrl === "none" || photoUrl === "pfp.png"
        );

        return (
          <section key={title} className="flex-1">
            <h3 className="text-white text-xl font-bold mb-6 text-center">
              <span className="gradient-text">{title}</span>
            </h3>

            {/* Members with photos */}
            {withPhotos.length > 0 && (
              <div className="grid grid-cols-2 gap-6 md:gap-8 justify-items-center mb-6">
                {withPhotos.map(([name, photoUrl, link], index) =>
                  link !== "#" ? (
                    <a
                      key={name + index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-110 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden glass card-hover group-hover:glow-green">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="w-full h-full rounded-2xl relative z-10">
                            <img
                              src={photoUrl}
                              alt={name}
                              className="w-full h-full object-cover rounded-2xl"
                              draggable={false}
                            />
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
                        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden glass">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-700/10 rounded-2xl"></div>
                          <div className="w-full h-full rounded-2xl relative z-10">
                            <img
                              src={photoUrl}
                              alt={name}
                              className="w-full h-full object-cover rounded-2xl"
                              draggable={false}
                            />
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
            )}

            {/* Members without photos (smaller rectangular box) */}
            {withoutPhotos.length > 0 && (
              <div
                className={
                  withoutPhotos.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                }
              >
                {withoutPhotos.map(([name, _, link], index) =>
                  link !== "#" ? (
                    <a
                      key={name + index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block group hover:scale-105 transition-all duration-300 ${
                        withoutPhotos.length === 1 ? "w-full max-w-[200px]" : "w-full"
                      }`}
                    >
                      <div className="glass rounded-xl px-4 py-2.5 min-h-[44px] flex items-center justify-center border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all duration-300 card-hover group-hover:glow-green text-center">
                        <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">
                          {name}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={name + index}
                      className={
                        withoutPhotos.length === 1 ? "w-full max-w-[200px]" : "w-full"
                      }
                    >
                      <div className="glass rounded-xl px-4 py-2.5 min-h-[44px] flex items-center justify-center border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 text-center">
                        <p className="text-white text-sm font-medium">
                          {name}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
