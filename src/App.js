import { useState } from "react";

function Panel({ title, children, isActive, show }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={show}>Show</button>}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePaneId, setActivePaneId] = useState(null);

  const panelsData = [
    {
      id: "about",
      title: "About",
      content:
        "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
    },
    {
      id: "etymology",
      title: "Etymology",
      content: (
        <>
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </>
      )
    }
  ];

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>

      {panelsData.map((panel) => (
        <Panel
          key={panel.id}
          title={panel.title}
          isActive={activePaneId === panel.id}
          show={() => setActivePaneId(panel.id)}
        >
          {panel.content}
        </Panel>
      ))}

      {/* <Panel
        title="About"
        isActive={activeIndex === 0}
        show={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        show={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel> */}
    </>
  );
}
