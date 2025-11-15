// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
const teamSections: {
  title: string;
  members: [string, string, string][];
}[] = [
  {
    title: "Computer Science Team",
    members: [ 
      ["Sai", "pfp.png", "#"],
      ["Moiz", "moiz.png", "https://www.linkedin.com/in/moiz-ahmed-hashmi-a36670213/"],
      ["Arjun", "pfp.png", "#"],
      ["Eddie", "eddie.jpeg", "https://www.linkedin.com/in/eddiebian/"],
      ["Darren", "darren.jpeg", "https://www.linkedin.com/in/wenxuan-su/"],
      ["Caden", "caden.PNG", "#"],
      ["Adham", "adham.png", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
      ["Austin", "yeet.jpg", "https://www.linkedin.com/in/austin-xiong-35093731b/"],
      ["Laird", "pfp.png", "#"],
    ],
  },
  {
    title: "Physics Team",
    members: [
      ["Parth", "pfp.png", "#"],
      ["John", "pfp.png", "#"],
      ["Kenny", "pfp.png", "#"]
    ],
  },
  {
    title: "Math Team",
    members: [
      ["Shawn", "pfp.png", "#"],
      ["Raymond", "pfp.png", "#"],
      ["Ervin", "pfp.png", "#"],
      ["Sophie", "pfp.png", "#"]
    ],
  },
];

export function TeamGrid() {
  return (
    <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-16 md:flex-row md:gap-20">
      {teamSections.map(({ title, members }) => (
        <section key={title} className="flex-1">
          <h3 className="text-white text-xl font-semibold mb-6 text-center">
            {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {members.map(([name, photoUrl, link], index) =>
              link !== "#" ? (
                <a
                  key={name + index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, rgba(0, 102, 41, 0.25) 30%, transparent 100%)",
                          padding: "2px",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-xl relative"
                          style={{ backgroundColor: "#001002" }}
                        >
                          {photoUrl !== "none" && (
                            <img
                              src={photoUrl}
                              alt={name}
                              className="w-full h-full object-cover rounded-xl"
                              draggable={false}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-white text-sm font-medium">
                      {name}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={name + index} className="block">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, rgba(0, 102, 41, 0.25) 30%, transparent 100%)",
                          padding: "2px",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-xl relative"
                          style={{ backgroundColor: "#001002" }}
                        >
                          {photoUrl !== "none" && (
                            <img
                              src={photoUrl}
                              alt={name}
                              className="w-full h-full object-cover rounded-xl"
                              draggable={false}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-white text-sm font-medium">
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
