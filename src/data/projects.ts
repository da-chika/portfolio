export type Category = "モバイルアプリ" | "Webアプリ" | "業務システム" | "認証基盤";

export interface Project {
  id: string;
  title: string;
  category: Category;
  industry: string;
  description: string;
  tags: string[];
  stack: string[];
  period: string;
  role: string;
}

export const CATEGORIES: Category[] = [
  "モバイルアプリ",
  "Webアプリ",
  "業務システム",
  "認証基盤",
];

export const ALL_TAGS = [
  "Flutter", "React Native", "Next.js", "React", "React Router", "Svelte", "SvelteKit", "TypeScript",
  "Laravel", "Express", "Hono", "Python", "Rust",
  "AWS", "GCP",
  "MySQL", "PostgreSQL", "Figma",
];

export const projects: Project[] = [
  {
    id: "finance-native-app",
    title: "大手金融機関向け モバイルアプリ追加開発",
    category: "モバイルアプリ",
    industry: "金融",
    description:
      "大手金融機関向けのiOS/Androidモバイルアプリに対する追加機能開発を担当。Flutter製フロントエンドとExpress製BFFの実装を中心に、既存の基幹APIとの連携機能を追加。",
    tags: ["Flutter", "Express", "TypeScript", "GCP"],
    stack: ["Flutter", "Express", "TypeScript", "GCP", "MySQL"],
    period: "4ヶ月",
    role: "モバイル・バックエンド実装",
  },
  {
    id: "enterprise-mobile-app",
    title: "大手企業向け モバイルアプリ追加開発",
    category: "モバイルアプリ",
    industry: "人材・HR",
    description:
      "人材業界の大手企業向けReact Native製モバイルアプリへの追加機能開発を担当。LaravelバックエンドとのAPI連携を実装し、iOS・Android両対応で機能リリースを実現。",
    tags: ["React Native", "Laravel", "TypeScript", "AWS"],
    stack: ["React Native", "Laravel", "PHP", "TypeScript", "AWS", "MySQL"],
    period: "1ヶ月",
    role: "モバイル・バックエンド実装",
  },
  {
    id: "nextjs-webapp",
    title: "大手建材メーカー向け 商品カタログ検索サービス開発",
    category: "Webアプリ",
    industry: "建材・インテリア",
    description:
      "大手建材メーカー向けの商品カタログ検索サービスを開発。Next.jsでのフロントエンド実装を担当し、AWS Lambda・Step Functions・OpenSearchを活用した検索基盤との連携機能を構築。データストアにDynamoDBを採用したサーバーレス構成。",
    tags: ["Next.js", "React", "TypeScript", "AWS"],
    stack: ["Next.js", "React", "TypeScript", "AWS", "Lambda", "DynamoDB", "Step Functions", "OpenSearch"],
    period: "2ヶ月",
    role: "フロントエンド・バックエンド・インフラ実装",
  },
  {
    id: "oidc-auth",
    title: "OIDC認証基盤の設計・開発",
    category: "認証基盤",
    industry: "SaaS",
    description:
      "既存サービスへのOIDCプロバイダー統合を要件定義から担当。シングルサインオンの実現と既存認証システムとの移行計画を含めて単独で設計・実装。",
    tags: ["React", "TypeScript", "Hono", "AWS", "Figma"],
    stack: ["React", "TypeScript", "Hono", "AWS", "PostgreSQL", "Figma"],
    period: "2ヶ月",
    role: "デザイン・フロントエンド・バックエンド・インフラ実装",
  },
  {
    id: "crm-system",
    title: "CRMシステムの開発",
    category: "業務システム",
    industry: "不動産",
    description:
      "不動産関連企業向けのCRMシステムのフロントエンドを担当。React Router 7をフルスタックフレームワークとして採用し、顧客管理・商談管理・レポート機能のUI実装を行った。",
    tags: ["React", "React Router", "TypeScript", "Rust", "Figma"],
    stack: ["React", "React Router 7", "TypeScript", "Rust", "MySQL", "Figma"],
    period: "3ヶ月",
    role: "デザイン・フロントエンド実装",
  },
  {
    id: "electricity-simulator",
    title: "電気料金シミュレーションシステム",
    category: "業務システム",
    industry: "エネルギー",
    description:
      "電力会社向けの料金シミュレーションシステムをフルスタックで開発。SvelteKitをフルスタックフレームワークとして採用し、複雑な料金計算ロジックの実装まで一貫して担当。",
    tags: ["Svelte", "SvelteKit", "TypeScript", "AWS"],
    stack: ["Svelte", "SvelteKit", "TypeScript", "AWS", "PostgreSQL", "Figma"],
    period: "2ヶ月",
    role: "フロントエンド・バックエンド・インフラ実装",
  },
];
