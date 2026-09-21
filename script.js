const sections = [
  {
    title: "About Pavel",
    subtitle: "Learn more about my work, background and journey.",
    links: [
      ["Personal Website","pavelsarwar.com","https://pavelsarwar.com"],
      ["Linktree","All current links","https://linktr.ee/pavelsarwar"],
      ["GitHub","Projects and code","https://github.com/pavelsarwar"]
    ]
  },
  {
    title: "Professional",
    subtitle: "My professional profiles and contributions.",
    links: [
      ["LinkedIn","Connect professionally","https://www.linkedin.com/in/pavelsarwar/"],
      ["Google for Education","Education & community work","https://edu.google.com/"],
      ["Google Local Guides","Local Guides community","https://www.google.com/maps/contrib/"]
    ]
  },
  {
    title: "Social Impact",
    subtitle: "Initiatives and organizations I am part of.",
    links: [
      ["Youth Connect Foundation","Bangladesh","https://youthconnect.org.bd"],
      ["Youth Hub Foundation","Malaysia","#"],
      ["Youth Hub","Bangladesh","#"]
    ]
  },
  {
    title: "Community",
    subtitle: "Communities I support and contribute to.",
    links: [
      ["GEG Seremban","Google Educator Group","#"],
      ["Google Local Guides","Community contribution","https://www.google.com/maps"]
    ]
  },
  {
    title: "Connect With Me",
    subtitle: "Let's collaborate and make an impact together.",
    links: [
      ["Facebook","Follow my updates","https://www.facebook.com/asmpavelsarwar"],
      ["Instagram","Photos and stories","https://www.instagram.com/pavelsarwar/"],
      ["X","Updates and ideas","https://x.com/pavelsarwar"]
    ]
  }
];

const grid = document.querySelector("#linksGrid");
grid.innerHTML = sections.map(section => `
  <article class="section-card">
    <h2>${section.title}</h2>
    <p>${section.subtitle}</p>
    ${section.links.map(([name,desc,url]) => `
      <a class="link" href="${url}" ${url !== "#" ? 'target="_blank" rel="noopener"' : ''}>
        <span><strong>${name}</strong><small>${desc}</small></span>
        <span class="arrow">›</span>
      </a>
    `).join("")}
  </article>
`).join("");

document.querySelector("#shareBtn").addEventListener("click", async () => {
  const data={title:"A S M Pavel Sarwar | pavel.bd",text:"Connect with A S M Pavel Sarwar",url:location.href};
  if(navigator.share){ try{await navigator.share(data)}catch(e){} }
  else { await navigator.clipboard.writeText(location.href); alert("Link copied."); }
});