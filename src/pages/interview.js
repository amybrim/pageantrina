import { useState } from "react";
import Arena from "@/components/Arena";

export default function InterviewPage() {
  const [arena, setArena] = useState("Panel");

  return (
    <>
      <h1>💬 Interview Practice</h1>
      <Arena arena={arena} onSwitch={setArena}>
        <p>Welcome to your interview arena! This space will soon include practice questions, video feedback, and personalized coaching tools.</p>
      </Arena>
    </>
  );
}
