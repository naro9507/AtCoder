# AtCoder 解答用リポジトリ

このリポジトリは、AtCoder の問題を効率的に解くための環境を整えることと解答の保存・提出を目的としています。
`atcoder-cli` を使って問題ディレクトリを自動生成し、`online-judge-tools` を用いてテストケースの取得や提出を行います。

## 使用ツール

- [atcoder-cli](https://github.com/Tatamo/atcoder-cli): 問題ディレクトリの自動生成
- [online-judge-tools](https://github.com/online-judge-tools/oj): テストケースの取得・実行・提出

## 環境構築
### 1. atcoder-cli のインストール

以下を参照
http://tatamo.81.la/blog/2018/12/07/atcoder-cli/#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95

### 2. online-judge-tools のインストール

以下を参照
https://github.com/online-judge-tools/oj?tab=readme-ov-file#how-to-install

## ディレクトリ構成
```bash
AtCoder/
├── abc400/
│   ├── a/
│   │   ├── main.js // 解答
│   │   └── tests/
│   │       ├── sample-1.in  // テスト入力
│   │       └── sample-1.out // テスト期待値
│   ├── b/
│   │   └── ...
│   └── ...
```
