import type { Member } from "../../../entities/member/model/types";

type MemberListProps = {
  members: Member[];
  activeIndex?: number;
};

/**
 * 候補メンバーの一覧を表示し、必要に応じて現在の注目メンバーを強調します。
 */
export const MemberList = ({ members, activeIndex }: MemberListProps) => (
  <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
    {members.map((member, index) => {
      const isActive = index === activeIndex;

      return (
        <li
          key={member.id}
          className={`rounded-2xl border px-4 py-3 text-center text-sm font-semibold transition ${
            isActive
              ? "border-amber-500 bg-amber-100 text-amber-900 shadow-md"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          {member.name}
        </li>
      );
    })}
  </ul>
);
