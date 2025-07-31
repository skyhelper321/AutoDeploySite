# TypeScript CI/CD Example


## 概要
このプロジェクトは、TypeScript × Node.js を使った簡易アプリケーションに対して、  
GitHub Actions での CI（ビルド・テスト）／CD（GitHub Pages への自動デプロイ）を行うサンプルです。  
- Jest を使ったユニットテスト  
- GitHub Actions ワークフローによる自動ビルド・テスト・デプロイ  

## 特長
- TypeScript の型チェック  
- Jest によるユニットテスト  
- CI/CD 自動化：GitHub Actions  
- GitHub Pages へのワンクリックデプロイ  

## 実際のページ
[Github Page](https://skyhelper321.github.io/AutoDeploySite/)

---

## 前提条件
- Node.js v20.x
- npm（または yarn）

---



GitHub Pages の設定
リポジトリの「Settings > Pages」へ移動

“Branch” を gh-pages（またはワークフローで指定したブランチ）に設定

“Folder” を / (root) に設定

