// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
const teamSections: {
  title: string;
  symbol: string;
  members: [string, string, string][];
}[] = [
    {
      title: "Computer Science Team",
      symbol: "Cs",
      members: [
        ["Darren Su", "none", "https://www.linkedin.com/in/wenxuan-su/"],
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
      symbol: "Ph",
      members: [
        ["Ian", "none", "#"],
        ["Chelsea", "none", "#"],
        ["Kahan", "none", "#"],
      ],
    },
    {
      title: "Math Team",
      symbol: "Ma",
      members: [
        ["Ian", "none", "#"],
      ],
    },
  ];

// Two-letter "element symbol" from a name: initials, or the first two letters.
function symbolFor(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length > 1) return parts[0][0].toUpperCase() + parts[parts.length - 1][0].toLowerCase();
  return parts[0][0].toUpperCase() + (parts[0][1] ?? "").toLowerCase();
}

function hasPhoto(photoUrl: string) {
  return Boolean(photoUrl) && photoUrl !== "none" && photoUrl !== "pfp.png";
}

export function TeamGrid() {
  return (
    <div className="flex flex-col gap-12">
      {teamSections.map(({ title, symbol, members }) => (
        <section key={title} aria-labelledby={`team-${symbol}`}>
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
            <h3 id={`team-${symbol}`} className="heading text-xl md:text-2xl">
              {title}
            </h3>
            <span className="data text-xs text-fg-3">
              {members.length} {members.length === 1 ? "member" : "members"}
            </span>
          </div>

          <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(7.25rem,1fr))] gap-[3px]">
            {members.map(([name, photoUrl, link], index) => {
              const linked = link !== "#";
              const inner = (
                <>
                  <span className="flex items-start justify-between">
                    <span className="cell-num">{symbol}</span>
                    {linked && (
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="text-fg-3 group-hover:text-on-brand">
                        <path d="M2.5 7.5l5-5M3.5 2.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    )}
                  </span>
                  {hasPhoto(photoUrl) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoUrl} alt="" className="my-1 h-12 w-12 object-cover" draggable={false} />
                  ) : (
                    <span aria-hidden="true" className="cell-sym text-[1.7rem] text-brand-accent group-hover:text-on-brand transition-colors">
                      {symbolFor(name)}
                    </span>
                  )}
                  <span className="cell-name text-[0.8125rem] text-fg">{name}</span>
                </>
              );
              return (
                <li key={name + index}>
                  {linked ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cell group h-[6.5rem] transition-colors hover:bg-brand hover:border-brand hover:text-on-brand [&:hover_.cell-num]:text-on-brand [&:hover_.cell-name]:text-on-brand"
                    >
                      {inner}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <div className="cell h-[6.5rem]">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
