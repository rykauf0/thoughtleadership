/* ----- Diagram components for MDX essays ----- */
/* Each is a self-contained, editorial-style visualization */

/* -------------------------------------------------- */
/*  The Judgment Deficit – pipeline diagram            */
/* -------------------------------------------------- */
export function JudgmentPipeline() {
  const stages = [
    { label: "Ambiguous tasks", sub: "Messy, unstructured work", active: true },
    { label: "Struggle & failure", sub: "Wrong calls, red ink, do-overs", active: true },
    { label: "Feedback loops", sub: "Consequences you can feel", active: false },
    { label: "Pattern recognition", sub: "Intuition built over years", active: false },
    { label: "Sound judgment", sub: "Decisions under uncertainty", active: false },
  ];
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          How judgment develops — and where AI intervenes
        </p>
        <div className="space-y-0">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-stretch">
              <div className="flex flex-col items-center mr-4 md:mr-6">
                <div className={`w-3 h-3 rounded-full shrink-0 ${s.active ? "bg-red-400 ring-4 ring-red-50" : "bg-accent ring-4 ring-blue-50"}`} />
                {i < stages.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
              </div>
              <div className={`pb-5 ${i === stages.length - 1 ? "pb-0" : ""}`}>
                <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
                {i === 1 && (
                  <span className="inline-block mt-2 text-[11px] font-mono text-red-500 bg-red-50 border border-red-100 rounded px-2 py-0.5">
                    AI automates this away
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-200">
          The first two stages are the ones AI removes — and the ones that build everything downstream.
        </p>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Measurement Trap – three-layer stack           */
/* -------------------------------------------------- */
export function MeasurementLayers() {
  const layers = [
    {
      label: "Layer 3: Timeline Mismatch",
      measures: "Expects ROI in 6–12 months",
      reality: "Real payback takes 2–4 years",
      stat: "53% of investors expect ROI in 6 months — 16% of CEOs think they can deliver",
      color: "bg-amber-50 border-amber-200",
      dot: "bg-amber-400",
    },
    {
      label: "Layer 2: Efficiency Illusion",
      measures: "Time saved per task",
      reality: "Hides work intensification, cognitive load, burnout",
      stat: "62% junior worker burnout in AI-intensive workflows",
      color: "bg-orange-50 border-orange-200",
      dot: "bg-orange-400",
    },
    {
      label: "Layer 1: Adoption Fallacy",
      measures: "Logins, MAU, license utilization",
      reality: "Zero correlation with business value",
      stat: "95% of pilots show zero P&L impact despite $30–40B investment",
      color: "bg-red-50 border-red-200",
      dot: "bg-red-400",
    },
  ];
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          The three layers of the measurement trap
        </p>
        <div className="space-y-3">
          {layers.map((l) => (
            <div key={l.label} className={`border rounded-lg p-4 ${l.color}`}>
              <div className="flex items-start gap-3">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${l.dot}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{l.label}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase">What orgs measure</p>
                      <p className="text-xs text-slate-600 mt-0.5">{l.measures}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase">What they miss</p>
                      <p className="text-xs text-slate-600 mt-0.5">{l.reality}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 italic">{l.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Shadow Stack – Copilot vs GitHub Copilot       */
/* -------------------------------------------------- */
export function CopilotComparison() {
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          Same company. Same AI. Different design. Different outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-red-200 rounded-lg p-5">
            <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-3">M365 Copilot</p>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-slate-900">3.3%</p>
                <p className="text-xs text-slate-500">M365 base converted to paid</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">-19.8</p>
                <p className="text-xs text-slate-500">Accuracy NPS</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">18%</p>
                <p className="text-xs text-slate-500">Choose it when ChatGPT is also available</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500">Layered <em>on top of</em> existing workflows</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="text-xs font-mono text-green-600 uppercase tracking-wider mb-3">GitHub Copilot</p>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-slate-900">26M</p>
                <p className="text-xs text-slate-500">Active users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">High</p>
                <p className="text-xs text-slate-500">User satisfaction & retention</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Organic</p>
                <p className="text-xs text-slate-500">Adoption without executive mandates</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500">Built <em>inside</em> the developer workflow</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">
          The difference isn&apos;t the technology. It&apos;s whether the tool meets people where they work.
        </p>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Intensification Paradox – ratchet cycle        */
/* -------------------------------------------------- */
export function RatchetCycle() {
  const steps = [
    { num: "1", label: "AI frees capacity", detail: "Team becomes 30% more productive" },
    { num: "2", label: "Org absorbs the gain", detail: "Targets rise, scope expands, timelines compress" },
    { num: "3", label: "Net capacity = zero", detail: "People are working just as hard on more things" },
    { num: "4", label: "New AI deployed", detail: "To handle the expanded workload" },
  ];
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          The ratchet effect — why freed capacity never stays free
        </p>
        <div className="relative">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-stretch">
              <div className="flex flex-col items-center mr-4 md:mr-6">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-300 my-1" />
                )}
              </div>
              <div className={`pb-5 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 ml-11 md:ml-[3.25rem]">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-white border border-slate-200 rounded px-3 py-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Repeat — each cycle ratchets expectations higher
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Governance Inversion – board vs reality        */
/* -------------------------------------------------- */
export function GovernanceGap() {
  const boardSees = [
    "47 governance policies",
    "3 oversight committees",
    "Responsible AI review board",
    "Compliance dashboard: all green",
    "Ethics framework published",
  ];
  const actuallyHappening = [
    "80% of employees using unsanctioned AI",
    "AI agents accumulating decision authority",
    "No governance for autonomous systems",
    "Human-in-the-loop is a checkbox, not a practice",
    "Shadow workflows invisible to security",
  ];
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          The governance gap
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="text-xs font-mono text-green-600 uppercase tracking-wider mb-4">What the board sees</p>
            <ul className="space-y-2.5">
              {boardSees.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                  <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-5">
            <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-4">What&apos;s actually happening</p>
            <ul className="space-y-2.5">
              {actuallyHappening.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                  <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">
          Governance artifacts ≠ actual governance. The gap between these columns is the real risk.
        </p>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Complexity Trap – complicated vs complex       */
/* -------------------------------------------------- */
export function ComplexityComparison() {
  const rows = [
    { dim: "Nature", complicated: "Knowable — expert analysis reveals the answer", complex: "Emergent — the answer changes as you interact with it" },
    { dim: "Approach", complicated: "Plan → execute → deliver", complex: "Probe → sense → respond" },
    { dim: "Expertise", complicated: "Solve it with the right specialist", complex: "No single expert has the answer" },
    { dim: "Failure mode", complicated: "Insufficient knowledge", complex: "Premature convergence" },
    { dim: "AI role", complicated: "Automate analysis, accelerate answers", complex: "Surface patterns, but can't replace experimentation" },
    { dim: "Example", complicated: "Building a trading algorithm", complex: "Getting a team to change how they make decisions" },
  ];
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          The distinction most leadership teams never make
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-2.5 pr-4 font-mono text-slate-400 uppercase tracking-wider w-24"></th>
                <th className="text-left py-2.5 pr-4 font-semibold text-slate-900">Complicated</th>
                <th className="text-left py-2.5 pr-4 font-semibold text-slate-900">Complex</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.dim} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-mono text-slate-400 uppercase tracking-wider align-top">{r.dim}</td>
                  <td className="py-3 pr-4 text-slate-600 align-top">{r.complicated}</td>
                  <td className="py-3 pr-4 text-slate-600 align-top">{r.complex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">
          Most AI transformation is complex. Most AI programs are designed for complicated.
        </p>
      </div>
    </figure>
  );
}

/* -------------------------------------------------- */
/*  The Anxiety Equation – balance visualization       */
/* -------------------------------------------------- */
export function AnxietyBalance() {
  return (
    <figure className="my-12 not-prose">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          The equation running in every employee&apos;s head
        </p>
        <div className="flex flex-col md:flex-row items-stretch gap-4 mb-4">
          <div className="flex-1 bg-white border border-amber-200 rounded-lg p-5 text-center">
            <p className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">Learning anxiety</p>
            <p className="text-lg font-bold text-slate-900 mb-1">&ldquo;This will be hard&rdquo;</p>
            <p className="text-xs text-slate-500">Fear of incompetence, looking foolish, loss of identity and status</p>
          </div>
          <div className="flex items-center justify-center px-2">
            <span className="text-2xl font-light text-slate-300">vs</span>
          </div>
          <div className="flex-1 bg-white border border-red-200 rounded-lg p-5 text-center">
            <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2">Survival anxiety</p>
            <p className="text-lg font-bold text-slate-900 mb-1">&ldquo;I&apos;ll be left behind&rdquo;</p>
            <p className="text-xs text-slate-500">Fear of irrelevance, being replaced, organizational consequences</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
          <p className="text-xs text-slate-500">
            <strong className="text-slate-900">Change happens when survival anxiety &gt; learning anxiety.</strong>
            <br />
            But most programs amplify survival anxiety instead of reducing learning anxiety — and get resistance, not adoption.
          </p>
        </div>
      </div>
    </figure>
  );
}
