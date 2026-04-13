/**
 * 配列長を超えたインデックスを先頭または末尾に折り返します。
 *
 * @param index 現在の計算対象インデックス
 * @param length 対象配列の長さ
 * @returns 0 以上 length 未満のインデックス
 */
export const wrapIndex = (index: number, length: number) => (index + length) % length;
