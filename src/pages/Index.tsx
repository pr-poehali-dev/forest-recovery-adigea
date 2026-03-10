// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SlideData = any;

const FOREST_IMG = "https://cdn.poehali.dev/projects/1360502a-b078-4830-8653-8d5c350f9af1/files/30a32e42-b5a0-421d-9af0-a4c84224ec6b.jpg";

const slides = [
  {
    id: 1,
    type: "cover",
  },
  {
    id: 2,
    type: "intro",
    title: "Введение",
    content: [
      "Леса Адыгеи — уникальная экосистема Западного Кавказа, включающая реликтовые колхидские леса и буково-пихтовые массивы Кавказского биосферного заповедника.",
      "Антропогенное воздействие, незаконные рубки и изменения климата нанесли значительный ущерб лесному покрову республики за последние десятилетия.",
      "Восстановление лесов является стратегически важной задачей для сохранения биоразнообразия, регуляции водного баланса и поглощения углекислого газа.",
    ],
    fact: "Площадь лесов Адыгеи составляет около 277 тыс. га — 36% территории республики",
  },
  {
    id: 3,
    type: "problem",
    title: "Проблематика",
    items: [
      { icon: "🌲", label: "Сокращение площади", value: "−12 000 га", desc: "за последние 20 лет" },
      { icon: "🔥", label: "Лесные пожары", value: "до 3 500 га", desc: "выгорает ежегодно" },
      { icon: "🪲", label: "Вредители и болезни", value: "8 видов", desc: "инвазивных вредителей" },
      { icon: "🌡️", label: "Изменение климата", value: "+1.4°C", desc: "средняя t° за 30 лет" },
    ],
  },
  {
    id: 4,
    type: "methods",
    title: "Методы восстановления",
    methods: [
      {
        num: "01",
        name: "Естественное возобновление",
        desc: "Содействие природному самовосстановлению через охрану от выпаса, пожаров и рубок в зонах с сохранившимся семенным фондом.",
      },
      {
        num: "02",
        name: "Искусственное лесовосстановление",
        desc: "Посадка сеянцев коренных пород — пихты кавказской, бука восточного, дуба скального — с учётом лесотипологических условий.",
      },
      {
        num: "03",
        name: "Комбинированное восстановление",
        desc: "Сочетание посадки рамочных деревьев и обеспечения условий для естественного распространения видов-доминантов.",
      },
      {
        num: "04",
        name: "Реинтродукция редких видов",
        desc: "Возврат в природу исчезнувших или редких видов деревьев и кустарников при участии питомников Кавказского заповедника.",
      },
    ],
  },
  {
    id: 5,
    type: "results",
    title: "Результаты и прогноз",
    stats: [
      { value: "4 200", unit: "га", label: "площадь восстановленных лесов (2015–2024)" },
      { value: "1.2 млн", unit: "шт", label: "высажено саженцев коренных пород" },
      { value: "87%", unit: "", label: "приживаемость при правильном уходе" },
      { value: "50+", unit: "лет", label: "до формирования полноценного древостоя" },
    ],
    note: "Прогноз при сохранении текущих темпов работ: к 2040 году возможно восстановление до 15 000 га деградированных лесных территорий.",
  },
  {
    id: 6,
    type: "recommendations",
    title: "Рекомендации",
    list: [
      "Расширить сеть лесных питомников для выращивания посадочного материала коренных пород",
      "Создать ГИС-систему мониторинга состояния лесных массивов Адыгеи",
      "Ввести охранные зоны вокруг участков естественного возобновления",
      "Организовать просветительские программы для местного населения",
      "Усилить сотрудничество с Кавказским биосферным заповедником",
      "Привлечь волонтёрские организации к массовым посадкам деревьев",
    ],
  },
  {
    id: 7,
    type: "conclusion",
    title: "Заключение",
    text: "Восстановление лесов Адыгеи — это не только экологическая, но и социально-экономическая задача, требующая системного подхода, координации государственных структур, научного сообщества и гражданского общества. Сохранение уникальных кавказских лесов является нашим общим долгом перед будущими поколениями.",
    sources: [
      "Кавказский государственный природный биосферный заповедник. Ежегодный отчёт, 2023.",
      "Министерство природных ресурсов Республики Адыгея. Лесной план, 2022–2031.",
      "Ханбеков Р.И. Леса Адыгеи и проблемы их восстановления. — Майкоп, 2019.",
    ],
  },
];

const Slide = ({ slide, index }: { slide: SlideData; index: number }) => {
  if (slide.type === "cover") {
    return (
      <div className="slide cover-slide">
        <div className="cover-bg" style={{ backgroundImage: `url(${FOREST_IMG})` }} />
        <div className="cover-overlay" />
        <div className="cover-content">
          <div className="cover-top">
            <span className="cover-org">Министерство образования и науки Республики Адыгея</span>
            <span className="cover-year">2025–2026 учебный год</span>
          </div>
          <div className="cover-main">
            <div className="cover-label">Научно-исследовательский проект</div>
            <h1 className="cover-title">Восстановление<br />лесов Адыгеи</h1>
            <div className="cover-subtitle">Проблемы, методы и перспективы</div>
          </div>
          <div className="cover-bottom">
            <div className="cover-author">
              <span className="cover-author-label">Выполнил:</span>
              <span className="cover-author-name">Ученик 9 «А» класса</span>
            </div>
            <div className="cover-school">МБОУ «Гимназия № 1», г. Майкоп</div>
          </div>
        </div>
        <div className="slide-number">01</div>
      </div>
    );
  }

  if (slide.type === "intro") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="intro-body">
          <div className="intro-paragraphs">
            {s.content.map((p: string, i: number) => (
              <p key={i} className="intro-para">{p}</p>
            ))}
          </div>
          <div className="intro-fact">
            <div className="fact-icon">📊</div>
            <p className="fact-text">{s.fact}</p>
          </div>
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  if (slide.type === "problem") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="problem-grid">
          {s.items.map((item: SlideData, i: number) => (
            <div key={i} className="problem-card">
              <div className="problem-icon">{item.icon}</div>
              <div className="problem-value">{item.value}</div>
              <div className="problem-label">{item.label}</div>
              <div className="problem-desc">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  if (slide.type === "methods") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="methods-list">
          {s.methods.map((m: SlideData, i: number) => (
            <div key={i} className="method-item">
              <div className="method-num">{m.num}</div>
              <div className="method-body">
                <div className="method-name">{m.name}</div>
                <div className="method-desc">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  if (slide.type === "results") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="results-stats">
          {s.stats.map((st: SlideData, i: number) => (
            <div key={i} className="stat-card">
              <div className="stat-value">
                {st.value}
                {st.unit && <span className="stat-unit">{st.unit}</span>}
              </div>
              <div className="stat-label">{st.label}</div>
            </div>
          ))}
        </div>
        <div className="results-note">
          <span className="note-bullet">▶</span>
          {s.note}
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  if (slide.type === "recommendations") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="rec-list">
          {s.list.map((r: string, i: number) => (
            <div key={i} className="rec-item">
              <div className="rec-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="rec-text">{r}</div>
            </div>
          ))}
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  if (slide.type === "conclusion") {
    const s = slide as SlideData;
    return (
      <div className="slide content-slide conclusion-slide">
        <div className="slide-header">
          <div className="slide-num-badge">{String(index + 1).padStart(2, "0")}</div>
          <h2 className="slide-title">{s.title}</h2>
          <div className="slide-line" />
        </div>
        <div className="conclusion-text">{s.text}</div>
        <div className="sources-block">
          <div className="sources-title">Источники</div>
          {s.sources.map((src: string, i: number) => (
            <div key={i} className="source-item">
              <span className="source-num">{i + 1}.</span> {src}
            </div>
          ))}
        </div>
        <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
    );
  }

  return null;
};

const Index = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        :root {
          --forest: #1a3a2a;
          --forest-mid: #2d5a3d;
          --forest-light: #3d7a52;
          --gold: #b8963e;
          --gold-light: #d4b06a;
          --cream: #f5f0e8;
          --cream-dark: #ede5d5;
          --ink: #1c1c1c;
          --ink-mid: #3a3a3a;
          --ink-light: #6a6a6a;
          --page-bg: #d8d0c0;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--page-bg);
          font-family: 'IBM Plex Sans', sans-serif;
        }

        .presentation-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          padding: 40px 20px;
          min-height: 100vh;
        }

        .print-hint {
          background: var(--forest);
          color: var(--cream);
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          padding: 10px 24px;
          border-radius: 4px;
          letter-spacing: 0.04em;
          opacity: 0.9;
        }

        .print-hint strong { color: var(--gold-light); }

        /* === SLIDE BASE === */
        .slide {
          width: 794px;
          height: 1123px;
          background: var(--cream);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.25);
          page-break-after: always;
        }

        /* === COVER === */
        .cover-slide { background: var(--forest); }

        .cover-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          mix-blend-mode: luminosity;
        }

        .cover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(13,30,20,0.85) 0%,
            rgba(26,58,42,0.7) 50%,
            rgba(13,30,20,0.9) 100%
          );
        }

        .cover-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 56px 64px;
        }

        .cover-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(184,150,62,0.3);
          padding-bottom: 20px;
        }

        .cover-org {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(245,240,232,0.6);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          max-width: 340px;
          line-height: 1.5;
        }

        .cover-year {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: var(--gold);
          letter-spacing: 0.06em;
        }

        .cover-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cover-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .cover-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 86px;
          font-weight: 300;
          color: var(--cream);
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }

        .cover-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: rgba(245,240,232,0.65);
          letter-spacing: 0.02em;
        }

        .cover-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(184,150,62,0.3);
          padding-top: 20px;
        }

        .cover-author-label {
          font-size: 10px;
          color: rgba(245,240,232,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 4px;
        }

        .cover-author-name {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: var(--cream);
        }

        .cover-school {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          color: rgba(245,240,232,0.5);
          letter-spacing: 0.04em;
          text-align: right;
        }

        /* corner decoration on cover */
        .cover-slide::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 200px; height: 200px;
          background: linear-gradient(225deg, rgba(184,150,62,0.15) 0%, transparent 60%);
          z-index: 1;
        }

        .cover-slide::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 300px; height: 3px;
          background: linear-gradient(90deg, var(--gold), transparent);
          z-index: 3;
        }

        /* === CONTENT SLIDES === */
        .content-slide {
          padding: 56px 64px 48px;
          display: flex;
          flex-direction: column;
          background: var(--cream);
        }

        .content-slide::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--forest), var(--forest-mid), var(--gold));
        }

        .content-slide::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--forest), transparent 80%);
        }

        .slide-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .slide-num-badge {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--gold);
          background: var(--forest);
          padding: 5px 10px;
          border-radius: 2px;
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }

        .slide-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--forest);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .slide-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--gold) 0%, rgba(184,150,62,0.15) 100%);
        }

        .slide-number {
          position: absolute;
          bottom: 32px;
          right: 48px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 60px;
          font-weight: 300;
          color: rgba(26,58,42,0.07);
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
        }

        /* === INTRO === */
        .intro-body {
          display: flex;
          flex-direction: column;
          gap: 28px;
          flex: 1;
        }

        .intro-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .intro-para {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 15.5px;
          font-weight: 300;
          color: var(--ink-mid);
          line-height: 1.75;
          letter-spacing: 0.005em;
        }

        .intro-fact {
          margin-top: auto;
          background: var(--forest);
          color: var(--cream);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-left: 4px solid var(--gold);
        }

        .fact-icon { font-size: 28px; flex-shrink: 0; }

        .fact-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          font-style: italic;
          color: var(--cream);
          line-height: 1.4;
        }

        /* === PROBLEM === */
        .problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          flex: 1;
        }

        .problem-card {
          background: white;
          border: 1px solid rgba(26,58,42,0.1);
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
        }

        .problem-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--forest-light), var(--gold));
        }

        .problem-icon { font-size: 32px; margin-bottom: 16px; }

        .problem-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          color: var(--forest);
          line-height: 1;
          margin-bottom: 8px;
        }

        .problem-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .problem-desc {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: var(--ink-light);
        }

        /* === METHODS === */
        .methods-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
        }

        .method-item {
          display: flex;
          align-items: flex-start;
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(26,58,42,0.1);
        }

        .method-item:last-child { border-bottom: none; }

        .method-num {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: 500;
          color: var(--gold);
          background: var(--forest);
          padding: 4px 10px;
          flex-shrink: 0;
          margin-top: 2px;
          letter-spacing: 0.04em;
        }

        .method-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--forest);
          margin-bottom: 6px;
          line-height: 1.1;
        }

        .method-desc {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: var(--ink-mid);
          line-height: 1.65;
        }

        /* === RESULTS === */
        .results-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: var(--forest);
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 80px; height: 80px;
          background: radial-gradient(circle, rgba(184,150,62,0.15) 0%, transparent 70%);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: var(--cream);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-unit {
          font-size: 24px;
          color: var(--gold);
          margin-left: 6px;
        }

        .stat-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(245,240,232,0.6);
          line-height: 1.4;
          letter-spacing: 0.02em;
        }

        .results-note {
          background: var(--cream-dark);
          border-left: 4px solid var(--gold);
          padding: 18px 24px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: var(--ink-mid);
          line-height: 1.65;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .note-bullet {
          color: var(--gold);
          flex-shrink: 0;
          font-size: 10px;
          margin-top: 3px;
        }

        /* === RECOMMENDATIONS === */
        .rec-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
        }

        .rec-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(26,58,42,0.08);
        }

        .rec-item:last-child { border-bottom: none; }

        .rec-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--gold);
          flex-shrink: 0;
          width: 28px;
          margin-top: 2px;
        }

        .rec-text {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: var(--ink-mid);
          line-height: 1.6;
        }

        /* === CONCLUSION === */
        .conclusion-slide {}

        .conclusion-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: var(--forest);
          line-height: 1.7;
          border-left: 4px solid var(--gold);
          padding: 24px 32px;
          background: white;
          margin-bottom: 40px;
        }

        .sources-block {
          margin-top: auto;
        }

        .sources-title {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-light);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(26,58,42,0.1);
        }

        .source-item {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: var(--ink-light);
          line-height: 1.6;
          margin-bottom: 6px;
        }

        .source-num {
          color: var(--gold);
          font-weight: 500;
        }

        /* === PRINT === */
        @media print {
          body { background: white; }
          .print-hint { display: none; }
          .presentation-wrapper { padding: 0; gap: 0; }
          .slide { box-shadow: none; page-break-after: always; break-after: page; }
        }
      `}</style>

      <div className="presentation-wrapper">
        <div className="print-hint">
          Для сохранения в PDF: <strong>Ctrl+P</strong> (Windows) / <strong>Cmd+P</strong> (Mac) → «Сохранить как PDF» → формат бумаги A4, поля: нет
        </div>

        {slides.map((slide, index) => (
          <Slide key={slide.id} slide={slide} index={index} />
        ))}
      </div>
    </>
  );
};

export default Index;