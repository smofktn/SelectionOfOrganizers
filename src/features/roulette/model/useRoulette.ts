import { useEffect, useState } from "react";
import type { Member } from "../../../entities/member/model/types";
import { spinDurationMs, spinIntervalMs } from "../lib/constants";

type UseRouletteParams = {
  members: Member[];
};

/**
 * ルーレットの進行状態と抽選操作を管理します。
 *
 * @param members 抽選対象メンバー一覧
 * @returns 現在位置、当選メンバー、回転状態、抽選開始処理
 */
export const useRoulette = ({ members }: UseRouletteParams) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (!isSpinning) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % members.length);
    }, spinIntervalMs);

    const timeoutId = window.setTimeout(() => {
      const winnerIndex = Math.floor(Math.random() * members.length);
      window.clearInterval(intervalId);
      setActiveIndex(winnerIndex);
      setSelectedIndex(winnerIndex);
      setIsSpinning(false);
    }, spinDurationMs);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isSpinning, members]);

  /**
   * ルーレットを開始し、一定時間後に当選者を確定します。
   */
  const handleSpin = () => {
    if (isSpinning || members.length === 0) {
      return;
    }

    setSelectedIndex(null);
    setIsSpinning(true);
  };

  return {
    activeIndex,
    selectedMember: selectedIndex === null ? null : members[selectedIndex],
    isSpinning,
    handleSpin,
  };
};
