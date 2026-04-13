# SelectionOfOrganizers

幹事を決めるためのフロントエンドアプリです。現在は、候補メンバーから 1 名をランダムに選ぶルーレット UI を実装しています。

今後は、過去の開催履歴を確認できるようにし、どこに行ったか、いつ行ったか、その回の幹事が誰だったかを記録できる形に拡張していく想定です。

## 主な機能

- 候補メンバー一覧の表示
- ルーレット UI による幹事選出
- 抽選結果の表示
- モバイルを含む基本的なレスポンシブ対応

## 技術構成

- Vite
- React
- TypeScript
- Tailwind CSS

## セットアップ

```bash
npm install
npm run dev
```

開発サーバー起動後、表示された URL をブラウザで開いて確認してください。

## 開発コマンド

```bash
npm run dev
npm run build
npm run preview
```

## GitHub Pages へのデプロイ

このリポジトリは `GitHub Actions` を使って `GitHub Pages` にデプロイできます。

- 公開 URL: `https://smofktn.github.io/SelectionOfOrganizers/`
- workflow 定義: `.github/workflows/deploy.yml`
- `Vite` の `base`: `/SelectionOfOrganizers/`

### なぜ `base` が必要か

`Vite` の `base` は、ビルド後の JavaScript や CSS を「どの URL を基準に読み込むか」を決める設定です。

GitHub Pages では、このアプリは `/` 直下ではなく `/SelectionOfOrganizers/` 配下で公開されます。
そのため `base` を設定しないと、アセットを `/assets/...` と読みに行ってしまい、公開先で画面が正しく表示されないことがあります。

### 初回セットアップ手順

1. GitHub のリポジトリで `Settings > Pages` を開く
2. `Build and deployment` の `Source` を `GitHub Actions` にする
3. このリポジトリの `main` ブランチへ push する
4. `Actions` タブで `Deploy to GitHub Pages` が成功することを確認する
5. 上記の公開 URL にアクセスして動作確認する

### ローカル確認

```bash
npm install
npm run build
```

ビルドが通れば、Pages 用の静的ファイルは `dist/` に出力されます。

## コミットルール

コミットメッセージは `gitmoji` を使います。
コミットメッセージ本文は日本語で書きます。

- 新機能追加: `✨`
- ドキュメント更新: `📝`
- 設定変更: `🔧`
- リファクタリング: `♻️`
- UI / スタイル調整: `💄`

例:

```bash
✨ ルーレットフロントエンドを実装
📝 README にアーキテクチャガイドを追記
🔧 editorconfig とツール設定を追加
```

`gitmoji` をインストール済みであれば、hook を入れることで `git commit` 時に候補を選べます。

```bash
gitmoji -i
```

詳細: https://gitmoji.dev/

## 開発ガイドライン

- `app / pages / features / entities / shared` の責務を崩さない
- `App` に画面ロジックを集約しない
- TypeScript / JavaScript では、特別な理由がない限りアロー関数を使う
- export する関数や hook には JSDoc を付ける
- 変更後は可能な範囲で `npm run build` を実行して確認する

## ディレクトリ概要

- `src/app/`: アプリの入口、全体設定、グローバルスタイル
- `src/pages/`: 画面単位の構成
- `src/features/`: ユーザー操作単位の機能
- `src/entities/`: `Member` や `EventRecord` などのドメイン単位
- `src/shared/`: 汎用 UI や共通関数の置き場として使う想定
- `AGENTS.md`: Codex や開発時の作業ガイド

## フロントエンドアーキテクチャ

このプロジェクトでは、小規模から中規模まで保守しやすいように、`app / pages / features / entities / shared` を基本単位にします。

- `app`: アプリ全体の入口と共通設定
- `pages`: 画面単位で機能を組み合わせる層
- `features`: ルーレットや履歴登録のような機能単位
- `entities`: メンバーや開催記録のような業務データ単位
- `shared`: 業務知識を持たない汎用部品や共通処理

現在のルーレット機能は以下のように整理しています。

- `src/features/roulette/components/`: 表示コンポーネント
- `src/features/roulette/model/`: 状態管理や UI ロジック
- `src/features/roulette/lib/`: 小さな補助関数や定数
- `src/entities/member/`: メンバー型と初期データ
- `src/entities/event-record/`: 履歴機能向けの型

## 今後の拡張方針

今後は以下のような機能を追加できる構成を想定しています。

- 開催日を記録する
- 行った場所を記録する
- その回の幹事を記録する
- 過去の開催履歴を一覧で確認する

将来の拡張を見据えて、アプリ内には `Member` と `EventRecord` の型を用意しています。
