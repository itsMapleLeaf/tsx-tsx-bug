import("./ts-file.js").catch(() => console.error("Failed to import ts-file.js"))
import("./tsx-file.js").catch(() =>
  console.error("Failed to import tsx-file.js"),
)
import("./tsx-file.jsx").catch(() =>
  console.error("Failed to import tsx-file.jsx"),
)
