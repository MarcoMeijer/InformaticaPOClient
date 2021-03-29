import { useState } from "react";

export default function usePromptState() {
  const [messages, zetMessages] = useState({ message: "", onClose: () => {} });

  return [messages, zetMessages];
}
