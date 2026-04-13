import { members } from "../../entities/member/lib/members";
import { HeroSection } from "../../features/roulette/components/HeroSection";
import { RoulettePanel } from "../../features/roulette/components/RoulettePanel";

/**
 * ホーム画面としてルーレット機能の主要セクションを組み立てます。
 */
export const HomePage = () => (
  <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7,_#fff7ed_40%,_#111827_130%)] text-slate-900">
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <HeroSection members={members} />
      <RoulettePanel members={members} />
    </div>
  </main>
);
