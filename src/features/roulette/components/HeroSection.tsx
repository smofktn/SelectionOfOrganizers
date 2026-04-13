import type { Member } from "../../../entities/member/model/types";
import { MemberList } from "./MemberList";

type HeroSectionProps = {
  members: Member[];
};

/**
 * ルーレット画面の導入文と候補メンバー一覧を表示します。
 */
export const HeroSection = ({ members }: HeroSectionProps) => (
  <section className="max-w-xl space-y-6">
    <p className="inline-flex rounded-full border border-amber-400/60 bg-white/70 px-4 py-1 text-sm font-medium text-amber-700 shadow-sm backdrop-blur">
      Organizer Roulette
    </p>
    <div className="space-y-4">
      <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        次の幹事を
        <span className="block text-amber-600">ルーレットで決める</span>
      </h1>
      <p className="text-base leading-7 text-slate-700 sm:text-lg">
        まずはフロントエンドの MVP として、固定メンバーから 1 人を選ぶルーレット UI を実装しています。
      </p>
    </div>

    <div className="rounded-3xl border border-white/60 bg-white/75 p-5 shadow-xl shadow-amber-950/10 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-950">参加メンバー</h2>
        <span className="text-sm text-slate-500">{members.length} people</span>
      </div>
      <MemberList members={members} />
    </div>
  </section>
);
