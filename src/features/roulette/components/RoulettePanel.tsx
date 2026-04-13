import type { Member } from "../../../entities/member/model/types";
import { useRoulette } from "../model/useRoulette";
import { MemberList } from "./MemberList";
import { RouletteTrack } from "./RouletteTrack";

type RoulettePanelProps = {
  members: Member[];
};

/**
 * ルーレットの操作パネルと抽選結果を表示します。
 */
export const RoulettePanel = ({ members }: RoulettePanelProps) => {
  const { activeIndex, selectedMember, isSpinning, handleSpin } = useRoulette({ members });

  return (
    <section className="w-full max-w-xl rounded-[2rem] border border-slate-900/10 bg-slate-950/90 p-6 text-white shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Live Roulette</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Organizer Picker</h2>
        </div>
        <div className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
          {isSpinning ? "Spinning" : "Ready"}
        </div>
      </div>

      <RouletteTrack members={members} activeIndex={activeIndex} />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning}
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {isSpinning ? "ルーレット中..." : "ルーレットを回す"}
        </button>
        <p className="text-sm leading-6 text-slate-300">
          {selectedMember
            ? `今回の幹事は ${selectedMember.name} さんです。`
            : "ボタンを押すと 1 名をランダムに選びます。"}
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Future Scope</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          将来的には、開催日・行った場所・その回の幹事を記録する履歴機能を追加できる構成を想定しています。
        </p>
      </div>

      <div className="mt-6 lg:hidden">
        <MemberList members={members} activeIndex={activeIndex} />
      </div>
    </section>
  );
};
