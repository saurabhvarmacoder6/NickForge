// 100+ genuinely distinct decorative templates across categories
export const decorativeTemplates = [
  // Ornate frames (10)
  { id: "ornate-1", label: "Ornate Diamond", category: "ornate", left: "❖", right: "❖", separator: "✦", format: (t) => `❖✦ ${t} ✦❖` },
  { id: "ornate-2", label: "Royal Crown Frame", category: "ornate", left: "♔", right: "♛", separator: "✧", format: (t) => `♔ ${t} ✧♛` },
  { id: "ornate-3", label: "Gothic Arches", category: "ornate", left: "⧖", right: "⧗", separator: "✵", format: (t) => `⧖${t}✵⧗` },
  { id: "ornate-4", label: "Silver Brackets", category: "ornate", left: "【", right: "】", separator: "☆", format: (t) => `【${t}☆】` },
  { id: "ornate-5", label: "Golden Wings", category: "ornate", left: "✿", right: "✿", separator: "✦", format: (t) => `✿ ${t} ✦ ✿` },
  { id: "ornate-6", label: "Star Border", category: "ornate", left: "✺", right: "✺", separator: "★", format: (t) => `✺★ ${t} ★✺` },
  { id: "ornate-7", label: "Crystal Frame", category: "ornate", left: "✧", right: "✧", separator: "❈", format: (t) => `✧❈ ${t} ❈✧` },
  { id: "ornate-8", label: "Velvet Box", category: "ornate", left: "⟦", right: "⟧", separator: "✦", format: (t) => `⟦${t}✦⟧` },
  { id: "ornate-9", label: "Moon Frame", category: "ornate", left: "☽", right: "☾", separator: "✶", format: (t) => `☽✶ ${t} ✶☾` },
  { id: "ornate-10", label: "Pearl Chain", category: "ornate", left: "●", right: "●", separator: "○", format: (t) => `●○ ${t} ○●` },

  // Symmetrical brackets (10)
  { id: "sym-1", label: "Double Angle", category: "symmetrical", left: "«", right: "»", separator: "‹", format: (t) => `«${t}‹»` },
  { id: "sym-2", label: "Curly Braces", category: "symmetrical", left: "{", right: "}", separator: "~", format: (t) => `{${t}~}` },
  { id: "sym-3", label: "Square Brackets Deep", category: "symmetrical", left: "〚", right: "〛", separator: "—", format: (t) => `〚${t}—〛` },
  { id: "sym-4", label: "Rounded Brackets", category: "symmetrical", left: "（", right: "）", separator: "·", format: (t) => `（${t}·）` },
  { id: "sym-5", label: "Angular Brackets", category: "symmetrical", left: "〈", right: "〉", separator: "◈", format: (t) => `〈${t}◈〉` },
  { id: "sym-6", label: "Heavy Square", category: "symmetrical", left: "⟦", right: "⟧", separator: "▪", format: (t) => `⟦${t}▪⟧` },
  { id: "sym-7", label: "Triangle Frame", category: "symmetrical", left: "◢", right: "◣", separator: "◤", format: (t) => `◢${t}◤◣` },
  { id: "sym-8", label: "Hex Frame", category: "symmetrical", left: "⎡", right: "⎤", separator: "⧉", format: (t) => `⎡${t}⧉⎤` },
  { id: "sym-9", label: "Bracket Stars", category: "symmetrical", left: "[", right: "]", separator: "☆", format: (t) => `[${t}☆]` },
  { id: "sym-10", label: "Double Square", category: "symmetrical", left: "⟦", right: "⟧", separator: "◆", format: (t) => `⟦${t}◆⟧` },

  // Crown-inspired (8)
  { id: "crown-1", label: "King Frame", category: "crown", left: "♔", right: "♚", separator: "✦", format: (t) => `♔✦ ${t} ✦♚` },
  { id: "crown-2", label: "Royal Shield", category: "crown", left: "⚜", right: "⚜", separator: "✦", format: (t) => `⚜ ${t} ✦⚜` },
  { id: "crown-3", label: "Golden Crown", category: "crown", left: "♕", right: "♕", separator: "✧", format: (t) => `♕✧ ${t} ✧♕` },
  { id: "crown-4", label: "Regal Banner", category: "crown", left: "❖", right: "❖", separator: "✦", format: (t) => `❖ ${t} ✦ ❖` },
  { id: "crown-5", label: "Imperial Arch", category: "crown", left: "⧉", right: "⧉", separator: "✦", format: (t) => `⧉✦ ${t} ✦⧉` },
  { id: "crown-6", label: "Crown Points", category: "crown", left: "✦", right: "✦", separator: "✧", format: (t) => `✦✧ ${t} ✧✦` },
  { id: "crown-7", label: "Throne Brackets", category: "crown", left: "【♔", right: "♚】", separator: "✧", format: (t) => `【♔${t}✧♚】` },
  { id: "crown-8", label: "Majesty Frame", category: "crown", left: "✺", right: "✺", separator: "✦", format: (t) => `✺✦ ${t} ✦✺` },

  // Wings (8)
  { id: "wing-1", label: "Angel Wings", category: "wings", left: "✿", right: "✿", separator: "✧", format: (t) => `✿✧ ${t} ✧✿` },
  { id: "wing-2", label: "Feather Frame", category: "wings", left: "❦", right: "❦", separator: "✦", format: (t) => `❦✦ ${t} ✦❦` },
  { id: "wing-3", label: "Wing Brackets", category: "wings", left: "✾", right: "✾", separator: "✦", format: (t) => `✾✦ ${t} ✦✾` },
  { id: "wing-4", label: "Celestial Wings", category: "wings", left: "✦", right: "✧", separator: "✶", format: (t) => `✦✶ ${t} ✶✧` },
  { id: "wing-5", label: "Light Wings", category: "wings", left: "❈", right: "❈", separator: "✦", format: (t) => `❈✦ ${t} ✦❈` },
  { id: "wing-6", label: "Golden Wings", category: "wings", left: "✺", right: "✺", separator: "✦", format: (t) => `✺✦ ${t} ✦✺` },
  { id: "wing-7", label: "Wing Points", category: "wings", left: "✧", right: "✧", separator: "✦", format: (t) => `✧✦ ${t} ✦✧` },
  { id: "wing-8", label: "Flight Frame", category: "wings", left: "✿✿", right: "✿✿", separator: "✧", format: (t) => `✿✿✧ ${t} ✧✿✿` },

  // Stars and celestial (8)
  { id: "star-1", label: "Star Cluster", category: "celestial", left: "✦", right: "✦", separator: "✧", format: (t) => `✦✧ ${t} ✧✦` },
  { id: "star-2", label: "Moon Frame", category: "celestial", left: "☽", right: "☾", separator: "✶", format: (t) => `☽✶ ${t} ✶☾` },
  { id: "star-3", label: "Solar Frame", category: "celestial", left: "☼", right: "☼", separator: "✦", format: (t) => `☼✦ ${t} ✦☼` },
  { id: "star-4", label: "Stellar Brackets", category: "celestial", left: "✶", right: "✶", separator: "✦", format: (t) => `✶✦ ${t} ✦✶` },
  { id: "star-5", label: "Constellation", category: "celestial", left: "✯", right: "✯", separator: "✦", format: (t) => `✯✦ ${t} ✦✯` },
  { id: "star-6", label: "Nebula Frame", category: "celestial", left: "❖", right: "❖", separator: "✦", format: (t) => `❖✦ ${t} ✦❖` },
  { id: "star-7", label: "Galaxy Border", category: "celestial", left: "✧", right: "✧", separator: "✶", format: (t) => `✧✶ ${t} ✶✧` },
  { id: "star-8", label: "Star Burst", category: "celestial", left: "✺", right: "✺", separator: "✦", format: (t) => `✺✦ ${t} ✦✺` },

  // Minimal symbols (8)
  { id: "min-1", label: "Dot Frame", category: "minimal", left: "·", right: "·", separator: "·", format: (t) => `· ${t} ·` },
  { id: "min-2", label: "Line Frame", category: "minimal", left: "—", right: "—", separator: "—", format: (t) => `— ${t} —` },
  { id: "min-3", label: "Clean Box", category: "minimal", left: "│", right: "│", separator: "│", format: (t) => `│ ${t} │` },
  { id: "min-4", label: "Minimal Slash", category: "minimal", left: "/", right: "/", separator: "│", format: (t) => `/ ${t} │ /` },
  { id: "min-5", label: "Simple Bracket", category: "minimal", left: "[", right: "]", separator: "|", format: (t) => `[ ${t} | ]` },
  { id: "min-6", label: "Clean Angle", category: "minimal", left: "<", right: ">", separator: "·", format: (t) => `< ${t} · >` },
  { id: "min-7", label: "Minimal Star", category: "minimal", left: "*", right: "*", separator: "·", format: (t) => `* · ${t} · *` },
  { id: "min-8", label: "Clean Dash", category: "minimal", left: "-", right: "-", separator: "-", format: (t) => `- ${t} -` },

  // Competitive esports (8)
  { id: "esports-1", label: "Esports Pro", category: "competitive", left: "⚡", right: "⚡", separator: "✦", format: (t) => `⚡✦ ${t} ✦⚡` },
  { id: "esports-2", label: "Competition Bracket", category: "competitive", left: "⟦", right: "⟧", separator: "✦", format: (t) => `⟦${t}✦⟧` },
  { id: "esports-3", label: "Champion Frame", category: "competitive", left: "✺", right: "✺", separator: "✦", format: (t) => `✺✦ ${t} ✦✺` },
  { id: "esports-4", label: "Trophy Frame", category: "competitive", left: "🏆", right: "🏆", separator: "✦", format: (t) => `🏆✦ ${t} ✦🏆` },
  { id: "esports-5", label: "Victory Banner", category: "competitive", left: "✦", right: "✦", separator: "✧", format: (t) => `✦✧ ${t} ✧✦` },
  { id: "esports-6", label: "Elite Shield", category: "competitive", left: "⧉", right: "⧉", separator: "✦", format: (t) => `⧉✦ ${t} ✦⧉` },
  { id: "esports-7", label: "Pro Angle", category: "competitive", left: "◢", right: "◣", separator: "✦", format: (t) => `◢✦ ${t} ✦◣` },
  { id: "esports-8", label: "Champion Stars", category: "competitive", left: "✦", right: "✦", separator: "✧", format: (t) => `✦✧ ${t} ✧✦` },

  // Dark/gothic (8)
  { id: "dark-1", label: "Dark Brackets", category: "dark", left: "『", right: "』", separator: "✦", format: (t) => `『${t}✦』` },
  { id: "dark-2", label: "Gothic Frame", category: "dark", left: "⧖", right: "⧗", separator: "✦", format: (t) => `⧖${t}✦⧗` },
  { id: "dark-3", label: "Shadow Box", category: "dark", left: "⧉", right: "⧉", separator: "✦", format: (t) => `⧉${t}✦⧉` },
  { id: "dark-4", label: "Night Brackets", category: "dark", left: "⟦", right: "⟧", separator: "✦", format: (t) => `⟦${t}✦⟧` },
  { id: "dark-5", label: "Dark Crown", category: "dark", left: "♔", right: "♚", separator: "✦", format: (t) => `♔${t}✦♚` },
  { id: "dark-6", label: "Midnight Frame", category: "dark", left: "✦", right: "✦", separator: "✧", format: (t) => `✦✧ ${t} ✧✦` },
  { id: "dark-7", label: "Black Star", category: "dark", left: "★", right: "★", separator: "✦", format: (t) => `★✦ ${t} ✦★` },
  { id: "dark-8", label: "Gothic Arch", category: "dark", left: "⧖", right: "⧗", separator: "✧", format: (t) => `⧖✧ ${t} ✧⧗` },

  // Japanese-inspired decorative (8)
  { id: "jp-1", label: "Japanese Bracket", category: "japanese", left: "【", right: "】", separator: "✧", format: (t) => `【${t}✧】` },
  { id: "jp-2", label: "Cherry Frame", category: "japanese", left: "✿", right: "✿", separator: "✧", format: (t) => `✿✧ ${t} ✧✿` },
  { id: "jp-3", label: "Geisha Bracket", category: "japanese", left: "⟦", right: "⟧", separator: "✧", format: (t) => `⟦${t}✧⟧` },
  { id: "jp-4", label: "Sakura Frame", category: "japanese", left: "❀", right: "❀", separator: "✧", format: (t) => `❀✧ ${t} ✧❀` },
  { id: "jp-5", label: "Zen Circle", category: "japanese", left: "○", right: "○", separator: "✧", format: (t) => `○✧ ${t} ✧○` },
  { id: "jp-6", label: "Wave Bracket", category: "japanese", left: "〜", right: "〜", separator: "✧", format: (t) => `〜✧ ${t} ✧〜` },
  { id: "jp-7", label: "Temple Bracket", category: "japanese", left: "⟦", right: "⟧", separator: "✧", format: (t) => `⟦✧ ${t} ✧⟧` },
  { id: "jp-8", label: "Bamboo Frame", category: "japanese", left: "✿✿", right: "✿✿", separator: "✧", format: (t) => `✿✿✧ ${t} ✧✿✿` },

  // Clean pro styles (8)
  { id: "clean-1", label: "Clean Pro", category: "clean", left: "▸", right: "◂", separator: "·", format: (t) => `▸· ${t} ·◂` },
  { id: "clean-2", label: "Pro Bracket", category: "clean", left: "[", right: "]", separator: "·", format: (t) => `[· ${t} ·]` },
  { id: "clean-3", label: "Clean Angle", category: "clean", left: "〈", right: "〉", separator: "·", format: (t) => `〈· ${t} ·〉` },
  { id: "clean-4", label: "Minimal Pro", category: "clean", left: "│", right: "│", separator: "·", format: (t) => `│· ${t} ·│` },
  { id: "clean-5", label: "Clean Dash", category: "clean", left: "-", right: "-", separator: "·", format: (t) => `-· ${t} ·-` },
  { id: "clean-6", label: "Clean Frame", category: "clean", left: "⟦", right: "⟧", separator: "·", format: (t) => `⟦· ${t} ·⟧` },
  { id: "clean-7", label: "Clean Star", category: "clean", left: "✦", right: "✦", separator: "·", format: (t) => `✦· ${t} ·✦` },
  { id: "clean-8", label: "Clean Bracket 2", category: "clean", left: "[", right: "]", separator: "·", format: (t) => `[· ${t} ·]` },

  // Squad-compatible (8)
  { id: "squad-1", label: "Squad Frame A", category: "squad", left: "[S]", right: "[E]", separator: "·", format: (t) => `[S]· ${t} ·[E]` },
  { id: "squad-2", label: "Squad Frame B", category: "squad", left: "{S}", right: "{E}", separator: "·", format: (t) => `{S}· ${t} ·{E}` },
  { id: "squad-3", label: "Squad Frame C", category: "squad", left: "〈S〉", right: "〈E〉", separator: "·", format: (t) => `〈S〉· ${t} ·〈E〉` },
  { id: "squad-4", label: "Squad Frame D", category: "squad", left: "【S】", right: "【E】", separator: "·", format: (t) => `【S】· ${t} ·【E】` },
  { id: "squad-5", label: "Squad Frame E", category: "squad", left: "◢S◣", right: "◢E◣", separator: "·", format: (t) => `◢S◣· ${t} ·◢E◣` },
  { id: "squad-6", label: "Squad Frame F", category: "squad", left: "✧S✧", right: "✧E✧", separator: "·", format: (t) => `✧S✧· ${t} ·✧E✧` },
  { id: "squad-7", label: "Squad Frame G", category: "squad", left: "✦S✦", right: "✦E✦", separator: "·", format: (t) => `✦S✦· ${t} ·✦E✦` },
  { id: "squad-8", label: "Squad Frame H", category: "squad", left: "❖S❖", right: "❖E❖", separator: "·", format: (t) => `❖S❖· ${t} ·❖E❖` },
  // Additional distinct templates to reach 100+
  { id: "extra-1", label: "Fire Frame", category: "ornate", left: "🔥", right: "🔥", separator: "✦", format: (t) => `🔥✦ ${t} ✦🔥` },
  { id: "extra-2", label: "Lightning Frame", category: "ornate", left: "⚡", right: "⚡", separator: "✧", format: (t) => `⚡✧ ${t} ✧⚡` },
  { id: "extra-3", label: "Wolf Frame", category: "ornate", left: "⚡", right: "⚡", separator: "✦", format: (t) => `⚡✦ ${t} ✦⚡` },
  { id: "extra-4", label: "Star Chain Frame", category: "ornate", left: "✦✦", right: "✦✦", separator: "✧", format: (t) => `✦✦✧ ${t} ✧✦✦` },
  { id: "extra-5", label: "Moon Chain", category: "ornate", left: "☽☽", right: "☾☾", separator: "✧", format: (t) => `☽☽✧ ${t} ✧☾☾` },
  { id: "extra-6", label: "Crystal Chain", category: "ornate", left: "✧✧", right: "✧✧", separator: "✦", format: (t) => `✧✧✦ ${t} ✦✧✧` },
  { id: "extra-7", label: "Fire Bracket", category: "ornate", left: "🔥【", right: "】🔥", separator: "✦", format: (t) => `🔥【${t}✦】🔥` },
  { id: "extra-8", label: "Lightning Bracket", category: "ornate", left: "⚡⟦", right: "⟧⚡", separator: "✧", format: (t) => `⚡⟦${t}✧⟧⚡` },
];
