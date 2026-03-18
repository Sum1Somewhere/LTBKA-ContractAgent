import { useState, useRef, useEffect } from "react";

const ACCESS_PASSWORD = "LIfetime100";
const ROLES = [
  "Category Manager",
  "Sales",
  "Legal",
  "Operations",
  "Finance",
  "Executive",
  "Other",
];
const TABS = [
  "Chat",
  "Q&A Log",
  "Documents",
  "Negotiations",
  "Examples",
  "Settings",
];
const PRIORITIES = ["🔴 Must Have", "🟡 Nice to Have", "🔵 Explore"];
const CATEGORIES = [
  "Royalties & Fees",
  "Territory",
  "Products",
  "Retailers",
  "Termination",
  "Quality & Approvals",
  "IP & Ownership",
  "Other",
];

function LogoImg(props) {
  const height = props.height || 36;
  const color = props.white ? "white" : "#c41c1c";
  return (
    <svg
      height={height}
      viewBox="0 0 220 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="38"
        fontFamily="Georgia, serif"
        fontSize="40"
        fontWeight="bold"
        fill={color}
        letterSpacing="1"
      >
        KitchenAid
      </text>
      <text
        x="195"
        y="20"
        fontFamily="Georgia, serif"
        fontSize="18"
        fill={color}
      >
        &#174;
      </text>
    </svg>
  );
}

function MixerIcon({ size = 28, color = "white" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 38 Q14 54 32 54 Q50 54 50 38 Z"
        fill={color}
        opacity="0.95"
      />
      <rect x="20" y="54" width="24" height="4" rx="2" fill={color} />
      <rect
        x="16"
        y="58"
        width="32"
        height="3"
        rx="1.5"
        fill={color}
        opacity="0.8"
      />
      <path
        d="M32 38 L32 18 Q32 10 42 10 L48 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="40" y="6" width="14" height="10" rx="4" fill={color} />
      <line
        x1="32"
        y1="38"
        x2="32"
        y2="52"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="32"
        cy="44"
        rx="5"
        ry="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="47" cy="11" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

const KA_CONTRACT = `
AMENDED AND RESTATED KITCHENWARE LICENSE AGREEMENT
Effective Date: January 1, 2023
Licensor: WHIRLPOOL PROPERTIES, INC.
Licensee: LIFETIME BRANDS, INC. and LIFETIME BRANDS EUROPE LIMITED
Term: January 1, 2023 to December 31, 2026

ARTICLE 1 - GRANT OF LICENSE
1.1 Limited, non-exclusive, non-transferable license to use the KITCHENAID marks in the Territory.
Liquidated damages: US$100 per product unit sold in violation of restrictions.
1.2 Licensed Products must have a unique distinctive look and feel. No competing products with same look and feel.
1.3 Consumer Complaints: Licensee must give immediate attention, notify Licensor of serious complaints.
1.4 License is non-transferable. No sublicensing.
1.5 Licensor may modify the Marks at any time.

ARTICLE 2 - IP RIGHTS
Project Patents: Owned by Licensee. Licensor gets royalty-free non-exclusive license. Licensee cannot license Project Patents to unaffiliated third parties during term and for 3 years post-termination.

ARTICLE 3 - ENFORCEMENT
3.4 Notify Licensor of all business locations within 30 business days of any change.
3.6 Only Suppliers in Exhibit C-1 may manufacture. Licensor may deauthorize a Supplier; Licensee has 3 months to cease.
3.7 Authorized Distributors in Exhibit C-4. Licensor may deauthorize; Licensee has 60 days to cease.

ARTICLE 4 - QUALITY CONTROL
4.1 ALL products, packaging, materials require prior written approval before sale.
4.2 Must comply with Prop 65, FDA, CPSC, all local laws. 30 days to cure non-compliance.
4.4 Approval process: Concept to Design to Prototype to Production. Minimum 3 months for review.
4.5 Licensor may inspect with 24-hour notice.
4.7 Consumer Service: 80% of calls answered. Hours 9am-5pm Mon-Fri. Service maintained 1-5 years post-termination. If satisfaction falls more than 25% below KCSC benchmark, Licensee pays $2.50 per call.
4.8 Returns or service exceeding 5% of SKU sales require corrective action. Star Ratings: under 3.5 = immediate action; 3.5-4.0 = 6-month plan; above 4.0 = no action.
4.9 Recall: Licensee reimburses all recall costs.
4.12 Security breach: notify Licensor within 48 hours; written report within 5 business days.

ARTICLE 5 - USE OF MARKS
5.3 All new uses of Marks require prior written approval.
5.6 Must follow Whirlpool Supplier Code of Conduct. Violation = immediate termination.
5.7 Non-compliance notice: 30 days to cure. Failure = termination.

ARTICLE 6 - LABELING
Packaging must state: Manufactured under license by Lifetime Brands, Inc., Garden City, NY 11530.

ARTICLE 7 - LICENSE FEES
ROYALTY RATES:
- Gadgets and Utensils: 12% US/Canada, 12.5% APAC/EMEA/LAMEX
- Bakeware: 10% US/Canada/LAMEX only
- Cutlery: 10% all regions; 8% for Block Sets, Salt and Pepper, Mandolins, Salad Spinners, specified SS Gadgets in US/Canada
- Sinkware: 8% all regions
- Kitchen Shears: 12% US/Canada, 12.5% APAC/EMEA/LAMEX
- Food Storage effective Jan 1 2023: 8% all regions
- Can Openers: 10% until Food Storage launch

GUARANTEED MINIMUM ROYALTIES:
2023: US $6.7M, CAN $900K, LAMEX $150K, EMEA $275K, APAC $250K
2024: US $5.9M, CAN $900K, LAMEX $160K, EMEA $200K, APAC $170K
2025: US $6.1M, CAN $915K, LAMEX $170K, EMEA $270K, APAC $220K
2026: US $6.2M, CAN $930K, LAMEX $180K, EMEA $320K, APAC $250K
2027: US $6.3M, CAN $945K, LAMEX $190K, EMEA $375K, APAC $315K

Payment due within 30 days after end of each monthly period. Late payments accrue interest at US prime rate.
Audit costs shared equally up to $50,000/year.

ARTICLE 8 - TERM
Jan 1 2023 to Dec 31 2026. 6-month phase-out upon expiration.

ARTICLE 9 - TERMINATION
9.1 Without Cause: 180 days written notice. Licensee cannot terminate before Jan 1 2025.
9.3 Licensor termination with cause: default (30 days cure), insolvency, government control, third-party acquisition, acquisition of Exhibit P competitor, satisfaction survey failure, ethics violation.
9.4 Phase-out: 0-6 months default, 4 months insolvency/acquisition, 6 months competitor acquisition, immediate plus 6 months for satisfaction failure.

ARTICLE 11 - CESSATION
11.3 Continued use after termination: $10,000 per day minimum.

ARTICLE 13 - INSURANCE
Minimum $5,000,000 liability insurance per country. Licensor named as additional insured.

ARTICLE 14 - LIABILITY CAP
Licensor liability capped at USD $500,000.

ARTICLE 16
16.8 Confidentiality: 3 years post-termination.
16.10 Non-Compete: 1 year post-termination without cause - Licensor cannot grant same license to unrelated third party in US.

EXHIBITS:
Exhibit A: KITCHENAID word mark.
Exhibit C-2 Licensed Product Categories: Gadgets and Utensils all territories, Sinkware US/CAN/LAMEX/APAC, Cutlery and Shears all, Bakeware US/CAN/LAMEX, Food Storage all effective Jan 1 2023. NO electric, motorized, or KitchenAid-attachment products. No resale of returned or refurbished products.
Exhibit D Authorized Retailers US: Walmart, Target, Costco, Macys, Williams-Sonoma, Amazon, Bed Bath and Beyond, Crate and Barrel, Sur La Table, TJ Maxx/HomeGoods (off-price, 12mo+ inventory only), plus extensive Canada/LAMEX/APAC/EMEA retailer lists.
Exhibit E Territory: US, Canada, LAMEX 27 countries, APAC 14 countries, EMEA 36 countries.
Exhibit F Representative: Eric Twiest, Eric_A_Twiest@whirlpool.com, 269-923-2279.
Exhibit P Competitor Brands triggering termination if acquired: Cuisinart, Ninja/SharkNinja, Vitamix, Breville, Bosch, DeLonghi/Kenwood, Group SEB/Krups/Tefal, Hamilton Beach, Black and Decker, and other KitchenAid competitors.
`;

function buildSystemPrompt(extraDocs, examples, user) {
  const docSection =
    extraDocs.length > 0
      ? "\n\nADDITIONAL UPLOADED DOCUMENTS:\n" +
        extraDocs
          .map((d, i) => `--- DOCUMENT ${i + 1}: ${d.name} ---\n${d.text}`)
          .join("\n\n")
      : "";
  const exSection =
    examples.length > 0
      ? "REFERENCE EXAMPLES:\n" +
        examples
          .map((e, i) => `[${i + 1}] Q: ${e.question} -> ${e.guidance}`)
          .join("\n")
      : "";
  return `You are a dedicated contract and document advisor for Lifetime Brands. You work on behalf of ${
    user.name
  } (${user.role}${user.company ? ", " + user.company : ""}).

Today's date is March 3, 2026. The KitchenAid contract expires December 31, 2026 - approximately 10 months remaining.

PRIMARY CONTRACT - KitchenAid License Agreement 2023-2026:\n${KA_CONTRACT}${docSection}\n\n${exSection}

RULES:
1. Answer questions about the KitchenAid contract AND any uploaded documents.
2. When referencing an uploaded document, clearly state which document you are citing.
3. If a question is vague, ask 1 clarifying question first.
4. Be concise. No padding. Get to the point.
5. Never fabricate. If it is not in any document, say so.

RESPONSE FORMAT (keep each section to 1-3 sentences):
**Answer** - direct answer
**Reference** - document name + Article/Section
**Action** - what ${user.role} should do (1-3 steps)
**Note** - one key caveat (skip if none)
**Confidence:** HIGH / MEDIUM / LOW`;
}

async function callClaude(body) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return r.json();
}

function Bubble({ m, userName }) {
  const isUser = m.role === "user";
  const lines = m.content.split("\n").map((line, i) => {
    if (!line.trim()) return <div key={i} style={{ height: 5 }} />;
    const html = line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(
        /\bHIGH\b/g,
        '<span style="color:#16a34a;font-weight:700">HIGH ✓</span>'
      )
      .replace(
        /\bMEDIUM\b/g,
        '<span style="color:#d97706;font-weight:700">MEDIUM ~</span>'
      )
      .replace(
        /\bLOW\b/g,
        '<span style="color:#dc2626;font-weight:700">LOW !</span>'
      );
    return (
      <p
        key={i}
        style={{ margin: "2px 0", fontSize: 13, lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        gap: 8,
        alignItems: "flex-end",
        marginBottom: 12,
      }}
    >
      {!isUser && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#c41c1c,#e53935)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <MixerIcon size={18} color="white" />
        </div>
      )}
      <div
        style={{
          maxWidth: "76%",
          padding: "11px 15px",
          borderRadius: 14,
          background: isUser
            ? "linear-gradient(135deg,#1d4ed8,#2563eb)"
            : "white",
          color: isUser ? "white" : "#1e293b",
          borderBottomRightRadius: isUser ? 4 : 14,
          borderBottomLeftRadius: !isUser ? 4 : 14,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {isUser ? (
          <p style={{ margin: 0, fontSize: 13 }}>{m.content}</p>
        ) : (
          lines
        )}
      </div>
      {isUser && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 800,
            color: "#475569",
            flexShrink: 0,
          }}
        >
          {userName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState(false);

  function handleLogin() {
    if (password !== ACCESS_PASSWORD) {
      setPwError(true);
      setTimeout(() => setPwError(false), 2000);
      return;
    }
    if (name.trim() && email.trim())
      onLogin({
        name: name.trim(),
        role: "Team Member",
        email: email.trim(),
        company: "",
      });
  }

  const ready = name.trim() && email.trim() && password;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#1a0000,#7f1d1d,#c41c1c)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 20,
          padding: 40,
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: "#0f172a",
              margin: "0 0 6px",
            }}
          >
            Lifetime Contract Agent
          </h1>
          <p style={{ color: "#64748b", fontSize: 13, marginTop: 0 }}>
            Whirlpool x Lifetime Brands License Agreement
          </p>
          <div
            style={{
              display: "inline-block",
              background: "#fef2f2",
              color: "#c41c1c",
              borderRadius: 8,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 700,
              marginTop: 8,
            }}
          >
            2023 – 2026 Agreement
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              label: "Your Name",
              val: name,
              set: setName,
              placeholder: "e.g. Sarah Johnson",
              type: "text",
            },
            {
              label: "Email",
              val: email,
              set: setEmail,
              placeholder: "e.g. sarah@lifetimebrands.com",
              type: "email",
            },
          ].map(({ label, val, set, placeholder, type }) => (
            <div key={label}>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#374151",
                  display: "block",
                  marginBottom: 5,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </label>
              <input
                value={val}
                onChange={(e) => set(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder={placeholder}
                type={type}
                style={{
                  width: "100%",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontSize: 14,
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          ))}
          <div>
            <label
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#374151",
                display: "block",
                marginBottom: 5,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Team Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPwError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Enter team password"
              style={{
                width: "100%",
                border: `1.5px solid ${pwError ? "#ef4444" : "#e2e8f0"}`,
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 14,
                boxSizing: "border-box",
                outline: "none",
                background: pwError ? "#fef2f2" : "white",
              }}
            />
            {pwError && (
              <p
                style={{
                  color: "#ef4444",
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: 600,
                }}
              >
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <button
            onClick={handleLogin}
            style={{
              background: ready
                ? "linear-gradient(135deg,#b91c1c,#c41c1c)"
                : "#e2e8f0",
              color: ready ? "white" : "#94a3b8",
              border: "none",
              borderRadius: 10,
              padding: 13,
              fontSize: 15,
              fontWeight: 800,
              cursor: ready ? "pointer" : "not-allowed",
              marginTop: 4,
            }}
          >
            {ready ? "Enter Agent ›" : "Fill in all fields to continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("Chat");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState([]);
  const [examples, setExamples] = useState([]);
  const [newEx, setNewEx] = useState({ question: "", guidance: "" });
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState({
    title: "",
    detail: "",
    category: "",
    priority: "",
  });
  const [ideaFilter, setIdeaFilter] = useState("All");
  const [docs, setDocs] = useState([]);
  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [toast, setToast] = useState("");
  const chatRef = useRef();
  const docFileRef = useRef();

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const results = await Promise.all([
          window.storage.get("kalog:" + user.email).catch(() => null),
          window.storage.get("ka:examples").catch(() => null),
          window.storage.get("ka:ideas").catch(() => null),
          window.storage.get("ka:docs").catch(() => null),
        ]);
        if (results[0]) setLog(JSON.parse(results[0].value));
        if (results[1]) setExamples(JSON.parse(results[1].value));
        if (results[2]) setIdeas(JSON.parse(results[2].value));
        if (results[3]) setDocs(JSON.parse(results[3].value));
      } catch (e) {}
      setMessages([
        {
          role: "assistant",
          content: `Hi ${user.name}! I'm your KitchenAid Contract Agent.\n\nThe 2023-2026 License Agreement is loaded. You can also upload additional documents in the Documents tab.\n\nWhat would you like to know?`,
        },
      ]);
    })();
  }, [user]);

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, loading]);

  async function handleDocUpload(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploadingDoc(true);
    for (const file of files) {
      await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = async (ev) => {
          const base64 = ev.target.result.split(",")[1];
          try {
            const data = await callClaude({
              model: "claude-sonnet-4-20250514",
              max_tokens: 4000,
              messages: [
                {
                  role: "user",
                  content: [
                    {
                      type: "document",
                      source: {
                        type: "base64",
                        media_type: "application/pdf",
                        data: base64,
                      },
                    },
                    {
                      type: "text",
                      text: "Extract the full text of this document. Return only the document text.",
                    },
                  ],
                },
              ],
            });
            const block =
              data.content && data.content.find((b) => b.type === "text");
            const newDoc = {
              id: Date.now(),
              name: file.name,
              text: block ? block.text : "",
              uploadedBy: user.name,
              time: new Date().toLocaleString(),
            };
            setDocs((prev) => {
              const updated = [...prev, newDoc];
              window.storage
                .set("ka:docs", JSON.stringify(updated), true)
                .catch(() => {});
              return updated;
            });
            showToast(file.name + " uploaded");
          } catch {
            showToast("Failed to process " + file.name);
          }
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }
    setUploadingDoc(false);
    e.target.value = "";
  }

  async function removeDoc(id) {
    setDocs((prev) => {
      const updated = prev.filter((d) => d.id !== id);
      window.storage
        .set("ka:docs", JSON.stringify(updated), true)
        .catch(() => {});
      return updated;
    });
    showToast("Document removed");
  }

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const updated = [...messages, { role: "user", content: userMsg }];
    setMessages(updated);
    setLoading(true);
    try {
      const data = await callClaude({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1500,
        system: buildSystemPrompt(docs, examples, user),
        messages: updated.map((m) => ({ role: m.role, content: m.content })),
      });
      const block = data.content && data.content.find((b) => b.type === "text");
      const reply = block
        ? block.text
        : "Sorry, I could not generate a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      const entry = {
        id: Date.now(),
        question: userMsg,
        answer: reply,
        time: new Date().toLocaleString(),
        user: user.name,
        role: user.role,
      };
      const newLog = [entry, ...log];
      setLog(newLog);
      await window.storage
        .set("kalog:" + user.email, JSON.stringify(newLog))
        .catch(() => {});
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error. Please try again." },
      ]);
    }
    setLoading(false);
  }

  async function addIdea() {
    if (!newIdea.title || !newIdea.category || !newIdea.priority) return;
    const entry = {
      ...newIdea,
      id: Date.now(),
      addedBy: user.name,
      role: user.role,
      time: new Date().toLocaleString(),
      votes: [user.name],
    };
    const updated = [entry, ...ideas];
    setIdeas(updated);
    setNewIdea({ title: "", detail: "", category: "", priority: "" });
    await window.storage
      .set("ka:ideas", JSON.stringify(updated), true)
      .catch(() => {});
    showToast("Idea saved");
  }

  async function voteIdea(id) {
    const updated = ideas.map((idea) => {
      if (idea.id !== id) return idea;
      const hasVoted = idea.votes && idea.votes.includes(user.name);
      return {
        ...idea,
        votes: hasVoted
          ? idea.votes.filter((v) => v !== user.name)
          : [...(idea.votes || []), user.name],
      };
    });
    setIdeas(updated);
    await window.storage
      .set("ka:ideas", JSON.stringify(updated), true)
      .catch(() => {});
  }

  async function removeIdea(id) {
    const updated = ideas.filter((e) => e.id !== id);
    setIdeas(updated);
    await window.storage
      .set("ka:ideas", JSON.stringify(updated), true)
      .catch(() => {});
  }

  async function addExample() {
    if (!newEx.question || !newEx.guidance) return;
    const updated = [
      ...examples,
      { ...newEx, id: Date.now(), addedBy: user.name },
    ];
    setExamples(updated);
    setNewEx({ question: "", guidance: "" });
    await window.storage
      .set("ka:examples", JSON.stringify(updated), true)
      .catch(() => {});
    showToast("Example saved");
  }

  async function removeExample(id) {
    const updated = examples.filter((e) => e.id !== id);
    setExamples(updated);
    await window.storage
      .set("ka:examples", JSON.stringify(updated), true)
      .catch(() => {});
  }

  function exportCSV() {
    const csv =
      "Time,User,Role,Question,Answer\n" +
      log
        .map(
          (l) =>
            `"${l.time}","${l.user}","${l.role}","${l.question.replace(
              /"/g,
              '""'
            )}","${l.answer.replace(/"/g, '""')}"`
        )
        .join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "ka_contract_qa_log.csv";
    a.click();
  }

  if (!user) return <LoginScreen onLogin={setUser} />;

  const tabIcons = {
    Chat: "💬",
    "Q&A Log": "📋",
    Documents: "📁",
    Negotiations: "🤝",
    Examples: "💡",
    Settings: "⚙️",
  };

  return (
    <div
      style={{
        fontFamily: "system-ui,sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#1a0000,#7f1d1d,#c41c1c)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "0.01em",
            }}
          >
            Lifetime Contract Agent
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {toast && (
            <span style={{ color: "#86efac", fontSize: 12, fontWeight: 700 }}>
              {toast}
            </span>
          )}
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "white", fontSize: 13, fontWeight: 700 }}>
              {user.name}
            </div>
            <div style={{ color: "#fca5a5", fontSize: 11 }}>
              {user.role}
              {user.company ? " · " + user.company : ""}
            </div>
          </div>
          <button
            onClick={() => setUser(null)}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "white",
              borderRadius: 8,
              padding: "5px 11px",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Sign Out
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#fef9c3",
          borderBottom: "1px solid #fde047",
          padding: "8px 20px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#854d0e",
            letterSpacing: "0.04em",
          }}
        >
          ⚠️ DEMO MODE — This is a preview only. No records, logs, or data will
          be saved.
        </span>
      </div>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: 16 }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 15px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 12,
                background:
                  activeTab === t
                    ? "linear-gradient(135deg,#b91c1c,#c41c1c)"
                    : "white",
                color: activeTab === t ? "white" : "#64748b",
                boxShadow:
                  activeTab === t
                    ? "0 2px 10px rgba(196,28,28,0.3)"
                    : "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {tabIcons[t]} {t}
              {t === "Documents" && docs.length > 0 ? ` (${docs.length})` : ""}
            </button>
          ))}
        </div>

        {activeTab === "Chat" && (
          <div
            style={{
              background: "white",
              borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              overflow: "hidden",
            }}
          >
            {docs.length > 0 && (
              <div
                style={{
                  background: "#f0fdf4",
                  borderBottom: "1px solid #dcfce7",
                  padding: "8px 16px",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{ fontSize: 11, fontWeight: 700, color: "#16a34a" }}
                >
                  Active docs:
                </span>
                {["KA License 2023-2026", ...docs.map((d) => d.name)].map(
                  (n) => (
                    <span
                      key={n}
                      style={{
                        fontSize: 11,
                        color: "#15803d",
                        background: "#dcfce7",
                        padding: "2px 8px",
                        borderRadius: 6,
                        fontWeight: 600,
                      }}
                    >
                      {n}
                    </span>
                  )
                )}
              </div>
            )}
            <div
              ref={chatRef}
              style={{
                height: 420,
                overflowY: "auto",
                padding: "16px 16px 8px",
              }}
            >
              {messages.map((m, i) => (
                <Bubble key={i} m={m} userName={user.name} />
              ))}
              {loading && (
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-end",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#c41c1c,#e53935)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MixerIcon size={18} />
                  </div>
                  <div
                    style={{
                      background: "white",
                      borderRadius: 14,
                      borderBottomLeftRadius: 4,
                      padding: "12px 16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div style={{ display: "flex", gap: 5 }}>
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#c41c1c",
                            animation: `pulse 1.2s ${i * 0.25}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                borderTop: "1px solid #f1f5f9",
                padding: "10px 12px",
                display: "flex",
                gap: 8,
              }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask anything about the KitchenAid contract or any uploaded document..."
                style={{
                  flex: 1,
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  padding: "9px 13px",
                  fontSize: 13,
                  resize: "none",
                  height: 46,
                  fontFamily: "inherit",
                  outline: "none",
                }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                style={{
                  background: "linear-gradient(135deg,#b91c1c,#c41c1c)",
                  color: "white",
                  border: "none",
                  borderRadius: 10,
                  padding: "0 22px",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: 17,
                  opacity: loading || !input.trim() ? 0.4 : 1,
                }}
              >
                ▶
              </button>
            </div>
          </div>
        )}

        {activeTab === "Documents" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: 18,
              }}
            >
              <h3
                style={{
                  margin: "0 0 4px",
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#0f172a",
                }}
              >
                Document Library
              </h3>
              <p style={{ margin: "0 0 16px", fontSize: 12, color: "#64748b" }}>
                Upload additional PDFs — amendments, addendums, term sheets,
                emails. The agent will reference all of them.
              </p>
              <div
                style={{
                  border: "2px dashed #e2e8f0",
                  borderRadius: 12,
                  padding: "28px 20px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#fafafa",
                }}
                onClick={() => docFileRef.current.click()}
              >
                <div style={{ fontSize: 36, marginBottom: 10 }}>📄</div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#1e293b",
                  }}
                >
                  {uploadingDoc
                    ? "Processing document..."
                    : "Click to upload or drag and drop"}
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>
                  PDF files only · Multiple files supported · Saved for all
                  users
                </p>
                <input
                  ref={docFileRef}
                  type="file"
                  accept="application/pdf"
                  multiple
                  style={{ display: "none" }}
                  onChange={handleDocUpload}
                />
              </div>
            </div>
            <div
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: 18,
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                Always Active
              </p>
              <div
                style={{
                  border: "1.5px solid #fecaca",
                  borderRadius: 12,
                  padding: 14,
                  background: "#fef2f2",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(135deg,#b91c1c,#c41c1c)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MixerIcon size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      margin: "0 0 2px",
                      fontWeight: 800,
                      fontSize: 13,
                      color: "#1e293b",
                    }}
                  >
                    KitchenAid Amended and Restated License Agreement
                  </p>
                  <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>
                    Whirlpool Properties x Lifetime Brands · Jan 1 2023 – Dec 31
                    2026 · Built-in
                  </p>
                </div>
                <span
                  style={{
                    background: "#dcfce7",
                    color: "#16a34a",
                    borderRadius: 6,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  Active
                </span>
              </div>
              {docs.length > 0 && (
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1e293b",
                    }}
                  >
                    Uploaded Documents ({docs.length})
                  </p>
                  {docs.map((doc) => (
                    <div
                      key={doc.id}
                      style={{
                        border: "1.5px solid #f1f5f9",
                        borderRadius: 12,
                        padding: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: "#eff6ff",
                          borderRadius: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20,
                          flexShrink: 0,
                        }}
                      >
                        📄
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            margin: "0 0 2px",
                            fontWeight: 700,
                            fontSize: 13,
                            color: "#1e293b",
                          }}
                        >
                          {doc.name}
                        </p>
                        <p
                          style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}
                        >
                          Uploaded by {doc.uploadedBy} · {doc.time}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#16a34a",
                            borderRadius: 6,
                            padding: "3px 10px",
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          Active
                        </span>
                        <button
                          onClick={() => removeDoc(doc.id)}
                          style={{
                            background: "#fef2f2",
                            color: "#ef4444",
                            border: "1px solid #fecaca",
                            borderRadius: 7,
                            padding: "4px 10px",
                            cursor: "pointer",
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {docs.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#94a3b8",
                    fontSize: 13,
                    padding: "16px 0 0",
                  }}
                >
                  No additional documents uploaded yet.
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === "Q&A Log" && (
          <div
            style={{
              background: "white",
              borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              padding: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#0f172a",
                  }}
                >
                  Q&A Log
                </h3>
                <p
                  style={{ margin: "3px 0 0", fontSize: 12, color: "#64748b" }}
                >
                  {log.length} questions logged for {user.name}
                </p>
              </div>
              {log.length > 0 && (
                <button
                  onClick={exportCSV}
                  style={{
                    background: "#f0fdf4",
                    color: "#16a34a",
                    border: "1px solid #bbf7d0",
                    borderRadius: 8,
                    padding: "7px 14px",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Export CSV
                </button>
              )}
            </div>
            {log.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "50px 20px",
                  color: "#94a3b8",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 10 }}>💬</div>
                <p>No questions yet. Start chatting!</p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  maxHeight: 460,
                  overflowY: "auto",
                }}
              >
                {log.map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      border: "1.5px solid #f1f5f9",
                      borderRadius: 12,
                      padding: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          background: "#fef2f2",
                          color: "#c41c1c",
                          borderRadius: 6,
                          padding: "2px 9px",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {entry.role}
                      </span>
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>
                        {entry.time}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "0 0 6px",
                        fontWeight: 800,
                        fontSize: 13,
                        color: "#1e293b",
                      }}
                    >
                      {entry.question}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 12,
                        color: "#64748b",
                        lineHeight: 1.5,
                      }}
                    >
                      {entry.answer.substring(0, 260)}
                      {entry.answer.length > 260 ? "..." : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "Negotiations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: 18,
              }}
            >
              <h3
                style={{
                  margin: "0 0 4px",
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#0f172a",
                }}
              >
                Next Contract Negotiations
              </h3>
              <p style={{ margin: "0 0 16px", fontSize: 12, color: "#64748b" }}>
                Log ideas and changes to push for in the next agreement. Shared
                with the whole team.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  background: "#fafafa",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <input
                  value={newIdea.title}
                  onChange={(e) =>
                    setNewIdea((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="What do you want to change? (e.g. Lower royalty rate on bakeware)"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "9px 12px",
                    fontSize: 13,
                    outline: "none",
                  }}
                />
                <textarea
                  value={newIdea.detail}
                  onChange={(e) =>
                    setNewIdea((p) => ({ ...p, detail: e.target.value }))
                  }
                  placeholder="Context or rationale (optional)"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "9px 12px",
                    fontSize: 13,
                    height: 70,
                    resize: "none",
                    outline: "none",
                  }}
                />
                <div>
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#374151",
                      textTransform: "uppercase",
                    }}
                  >
                    Category
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {CATEGORIES.map((c) => (
                      <button
                        key={c}
                        onClick={() =>
                          setNewIdea((p) => ({ ...p, category: c }))
                        }
                        style={{
                          padding: "5px 10px",
                          borderRadius: 7,
                          fontSize: 11,
                          fontWeight: 600,
                          cursor: "pointer",
                          border: "1.5px solid",
                          borderColor:
                            newIdea.category === c ? "#c41c1c" : "#e2e8f0",
                          background:
                            newIdea.category === c ? "#fef2f2" : "white",
                          color: newIdea.category === c ? "#c41c1c" : "#64748b",
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#374151",
                      textTransform: "uppercase",
                    }}
                  >
                    Priority
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {PRIORITIES.map((pr) => (
                      <button
                        key={pr}
                        onClick={() =>
                          setNewIdea((p) => ({ ...p, priority: pr }))
                        }
                        style={{
                          padding: "6px 13px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                          border: "1.5px solid",
                          borderColor:
                            newIdea.priority === pr ? "#475569" : "#e2e8f0",
                          background:
                            newIdea.priority === pr ? "#f8fafc" : "white",
                          color:
                            newIdea.priority === pr ? "#1e293b" : "#64748b",
                        }}
                      >
                        {pr}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={addIdea}
                  style={{
                    background:
                      newIdea.title && newIdea.category && newIdea.priority
                        ? "linear-gradient(135deg,#b91c1c,#c41c1c)"
                        : "#e2e8f0",
                    color:
                      newIdea.title && newIdea.category && newIdea.priority
                        ? "white"
                        : "#94a3b8",
                    border: "none",
                    borderRadius: 8,
                    padding: "9px 18px",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 13,
                    alignSelf: "flex-end",
                  }}
                >
                  + Add to Negotiations
                </button>
              </div>
            </div>
            <div
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  {ideas.length} idea{ideas.length !== 1 ? "s" : ""} logged
                </p>
                <div style={{ display: "flex", gap: 6 }}>
                  {["All", ...PRIORITIES].map((f) => (
                    <button
                      key={f}
                      onClick={() => setIdeaFilter(f)}
                      style={{
                        padding: "4px 10px",
                        borderRadius: 7,
                        fontSize: 11,
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "1.5px solid",
                        borderColor: ideaFilter === f ? "#475569" : "#e2e8f0",
                        background: ideaFilter === f ? "#f1f5f9" : "white",
                        color: ideaFilter === f ? "#1e293b" : "#94a3b8",
                      }}
                    >
                      {f === "All" ? "All" : f.split(" ").slice(1).join(" ")}
                    </button>
                  ))}
                </div>
              </div>
              {ideas.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    color: "#94a3b8",
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 10 }}>🤝</div>
                  <p>No ideas yet. Add one above!</p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    maxHeight: 460,
                    overflowY: "auto",
                  }}
                >
                  {ideas
                    .filter(
                      (idea) =>
                        ideaFilter === "All" || idea.priority === ideaFilter
                    )
                    .map((idea) => (
                      <div
                        key={idea.id}
                        style={{
                          border: "1.5px solid #f1f5f9",
                          borderRadius: 12,
                          padding: 14,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 8,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: 7,
                              flexWrap: "wrap",
                            }}
                          >
                            <span style={{ fontSize: 11, fontWeight: 700 }}>
                              {idea.priority}
                            </span>
                            <span
                              style={{
                                background: "#f1f5f9",
                                color: "#475569",
                                borderRadius: 6,
                                padding: "2px 8px",
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            >
                              {idea.category}
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: 6,
                              alignItems: "center",
                            }}
                          >
                            <button
                              onClick={() => voteIdea(idea.id)}
                              style={{
                                background:
                                  idea.votes && idea.votes.includes(user.name)
                                    ? "#fef2f2"
                                    : "#f8fafc",
                                color:
                                  idea.votes && idea.votes.includes(user.name)
                                    ? "#c41c1c"
                                    : "#94a3b8",
                                border: "1.5px solid",
                                borderColor:
                                  idea.votes && idea.votes.includes(user.name)
                                    ? "#fecaca"
                                    : "#e2e8f0",
                                borderRadius: 7,
                                padding: "3px 10px",
                                fontSize: 12,
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              👍 {idea.votes ? idea.votes.length : 0}
                            </button>
                            {idea.addedBy === user.name && (
                              <button
                                onClick={() => removeIdea(idea.id)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  color: "#ef4444",
                                  cursor: "pointer",
                                  fontSize: 18,
                                  padding: 0,
                                }}
                              >
                                ×
                              </button>
                            )}
                          </div>
                        </div>
                        <p
                          style={{
                            margin: "0 0 4px",
                            fontWeight: 800,
                            fontSize: 13,
                            color: "#1e293b",
                          }}
                        >
                          {idea.title}
                        </p>
                        {idea.detail && (
                          <p
                            style={{
                              margin: "0 0 6px",
                              fontSize: 12,
                              color: "#64748b",
                              lineHeight: 1.5,
                            }}
                          >
                            {idea.detail}
                          </p>
                        )}
                        <span style={{ fontSize: 11, color: "#94a3b8" }}>
                          Added by {idea.addedBy} ({idea.role}) · {idea.time}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "Examples" && (
          <div
            style={{
              background: "white",
              borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              padding: 18,
            }}
          >
            <h3
              style={{
                margin: "0 0 4px",
                fontSize: 16,
                fontWeight: 900,
                color: "#0f172a",
              }}
            >
              Reference Examples
            </h3>
            <p style={{ margin: "0 0 16px", fontSize: 12, color: "#64748b" }}>
              Add common Q&A examples to guide the agent. Shared across all
              users.
            </p>
            <div
              style={{
                background: "#fafafa",
                borderRadius: 12,
                padding: 14,
                marginBottom: 16,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <input
                value={newEx.question}
                onChange={(e) =>
                  setNewEx((p) => ({ ...p, question: e.target.value }))
                }
                placeholder="Common question..."
                style={{
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "9px 12px",
                  fontSize: 13,
                  outline: "none",
                }}
              />
              <textarea
                value={newEx.guidance}
                onChange={(e) =>
                  setNewEx((p) => ({ ...p, guidance: e.target.value }))
                }
                placeholder="The correct guidance..."
                style={{
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "9px 12px",
                  fontSize: 13,
                  height: 80,
                  resize: "none",
                  outline: "none",
                }}
              />
              <button
                onClick={addExample}
                style={{
                  background:
                    newEx.question && newEx.guidance
                      ? "linear-gradient(135deg,#b91c1c,#c41c1c)"
                      : "#e2e8f0",
                  color: newEx.question && newEx.guidance ? "white" : "#94a3b8",
                  border: "none",
                  borderRadius: 8,
                  padding: "9px 18px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 13,
                  alignSelf: "flex-end",
                }}
              >
                + Add Example
              </button>
            </div>
            {examples.length === 0 ? (
              <p style={{ color: "#94a3b8", textAlign: "center", padding: 20 }}>
                No examples yet.
              </p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxHeight: 320,
                  overflowY: "auto",
                }}
              >
                {examples.map((ex) => (
                  <div
                    key={ex.id}
                    style={{
                      border: "1.5px solid #f1f5f9",
                      borderRadius: 12,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 5px",
                          fontWeight: 700,
                          fontSize: 13,
                          color: "#1e293b",
                          flex: 1,
                        }}
                      >
                        {ex.question}
                      </p>
                      <button
                        onClick={() => removeExample(ex.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ef4444",
                          cursor: "pointer",
                          fontSize: 20,
                          padding: "0 0 0 8px",
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontSize: 12,
                        color: "#475569",
                      }}
                    >
                      {ex.guidance}
                    </p>
                    {ex.addedBy && (
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>
                        Added by {ex.addedBy}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "Settings" && (
          <div
            style={{
              background: "white",
              borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              padding: 18,
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: 16,
                fontWeight: 900,
                color: "#0f172a",
              }}
            >
              Settings
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  title: "Logged In As",
                  content: `${user.name} · ${user.role}${
                    user.company ? " · " + user.company : ""
                  }`,
                },
                {
                  title: "Primary Contract",
                  content:
                    "KitchenAid Amended and Restated License Agreement · Jan 1 2023 – Dec 31 2026",
                },
                {
                  title: "Uploaded Documents",
                  content:
                    docs.length > 0
                      ? docs.map((d) => d.name).join(", ")
                      : "None uploaded yet",
                },
                {
                  title: "Your Q&A Log",
                  content: `${log.length} questions saved`,
                },
                {
                  title: "Negotiation Ideas",
                  content: `${ideas.length} ideas logged by the team`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: "1.5px solid #f1f5f9",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#1e293b",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
                    {item.content}
                  </p>
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  onClick={exportCSV}
                  style={{
                    background: "#f0fdf4",
                    color: "#16a34a",
                    border: "1px solid #bbf7d0",
                    borderRadius: 8,
                    padding: "8px 14px",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Export Log CSV
                </button>
                <button
                  onClick={async () => {
                    setLog([]);
                    await window.storage
                      .set("kalog:" + user.email, JSON.stringify([]))
                      .catch(() => {});
                    showToast("Log cleared");
                  }}
                  style={{
                    background: "#fef2f2",
                    color: "#dc2626",
                    border: "1px solid #fecaca",
                    borderRadius: 8,
                    padding: "8px 14px",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Clear My Log
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>
        {
          "@keyframes pulse{0%,100%{opacity:.4;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}"
        }
      </style>
    </div>
  );
}
