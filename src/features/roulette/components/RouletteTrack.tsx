import type { Member } from "../../../entities/member/model/types";
import { visibleOffsets } from "../lib/constants";
import { wrapIndex } from "../lib/wrapIndex";

type RouletteTrackProps = {
  members: Member[];
  activeIndex: number;
};

/**
 * ルーレットの現在位置に応じて候補メンバーを縦方向に表示します。
 */
export const RouletteTrack = ({ members, activeIndex }: RouletteTrackProps) => (
  <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-5">
    <div className="pointer-events-none absolute inset-x-4 top-1/2 h-16 -translate-y-1/2 rounded-2xl border border-amber-300/50 bg-amber-300/10 shadow-[0_0_0_1px_rgba(253,224,71,0.15)]" />
    <div className="space-y-3">
      {visibleOffsets.map((offset) => {
        const member = members[wrapIndex(activeIndex + offset, members.length)];
        const isCenter = offset === 0;

        return (
          <div
            key={`${member.id}-${offset}`}
            className={`rounded-2xl px-4 py-4 text-center text-lg font-bold transition-all duration-150 ${
              isCenter
                ? "scale-[1.02] bg-amber-300 text-slate-950 shadow-lg"
                : "bg-white/8 text-white/70"
            }`}
          >
            {member.name}
          </div>
        );
      })}
    </div>
  </div>
);
