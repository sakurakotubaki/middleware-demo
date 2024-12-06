# Next.js Middleware Authentication Demo

このプロジェクトは、Next.jsのミドルウェア機能を使用した認証システムのデモンストレーションです。

## 機能概要

- ミドルウェアを使用した認証制御
- 保護されたルート（`/blog`）へのアクセス制御
- クッキーベースの認証状態管理
- ログイン/ログアウト機能

## セットアップ

必要なパッケージをインストールします：

```bash
bun add js-cookie react-hot-toast @heroicons/react
bun add -d @types/js-cookie
```

## ミドルウェアの実装について

このデモでは、`middleware.ts`を使用して以下の認証制御を実装しています：

### 1. 認証チェック

- すべての保護されたルート（`/blog`）へのアクセスは認証が必要
- 未認証ユーザーは自動的にログインページにリダイレクト
- 認証済みユーザーがログインページにアクセスした場合は、ブログページにリダイレクト

### 2. 実装の詳細

```typescript
// middleware.tsの主要な機能
- クッキーから認証トークンを確認
- パスに基づいた条件分岐
- 適切なリダイレクト処理
```

### 3. ミドルウェアの設定

```typescript
export const config = {
  matcher: ['/blog/:path*', '/login']
}
```

このmatcher設定により、ミドルウェアは以下のパスでのみ実行されます：
- `/blog`とその配下のすべてのパス
- `/login`ページ

## 認証フロー

1. 未認証ユーザーが保護されたページ（`/blog`）にアクセス → ログインページへリダイレクト
2. ログイン成功時 → `auth-token`クッキーが設定され、ブログページへリダイレクト
3. 認証済みユーザーがログインページにアクセス → ブログページへ自動リダイレクト
4. ログアウト時 → クッキーを削除し、ログインページへリダイレクト

## テスト用アカウント

デモ用のログイン情報：
- メールアドレス: hoge@co.jp
- 認証トークン: 10分で失効

## 技術スタック

- Next.js (App Router)
- TypeScript
- js-cookie (クッキー管理)
- react-hot-toast (通知UI)
- Tailwind CSS (スタイリング)