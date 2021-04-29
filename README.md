Redux から Redux Toolkit への移行を段階的に行うガイド

- https://www.reddit.com/r/reactjs/comments/huw2kq/migration_to_reduxtoolkit/

```bash
# mock-server起動
make mock-server

# graphql-code-generator起動
make codegen

# 各stepのclient起動
make client step=2
```

# 背景

Redux 公式ドキュメントでも Redux Toolkit の利用を推奨しているが、マイグレーションガイドらしきものが見つからなかった。
一気に移行ができない規模のアプリケーションも世の中にはあるので、少しずつ移行する術を見つけたい。
ここではかんたんに todo アプリケーションを想定してステップを複数に分けて移行の方法を紹介する。

# 利用技術

- Redux
- React Redux
- reselect
- normalizr
- redux-thunk
- immr
- apollo client
- react hook form

# アプリケーション簡易説明

- create-react-app を元に作った todo アプリケーション
- mock-server とのデータ通信は GraphQL を利用
- redux thunk の extraArgs に、apollo client の query と mutation のメソッドを追加して、thunk action 上で query と mutation が実行できる。
- 最初に mock-server から todo リストを fetch する
- クライアントで利用したいデータに各アイテムを整形し、 id を元に正規化する
- 正規化したデータを Redux で store に格納する
- reselect で計算した値 を元に todo リストを描画する
- フォームに todo の詳細を入力すると、mutation を飛ばして todo を追加する。レスポンスを store に格納する
- isDone を更新すると、mutation を飛ばして todo を更新する。レスポンスを store に格納する
- remove をクリックすると mutation を飛ばして todo を削除する。

# ガイド

## step1

まだ Redux Toolkit に移行できてない todo アプリケーション

## step2

### combineReducers

RTK は Redux の combineReducers をそのまま利用しているので互換性がある。
全ての combineReducers を RTK のものを利用する。

```diff
- import * as Redux from "redux";
+ import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Domain from "./domain";

export const createReducer = () => {
-   const reducer = Redux.combineReducers({
+   const reducer = ReduxToolkit.combineReducers({
    [Domain.featureKey]: Domain.reducer,
  });

  return { reducer };
};
```

## step3

### createAction, createReducer

RTK の createReducer は`Builder Callback`パターンを用いて、createAction で作った関数を併用しながら処理を組み立てていく。
そのため、createAction を使うなら createReducer へ移行しなければならないし、createReducer を使うなら createAction へ移行しなければならない。
従来の switch ケースでの reducer の組み立てパターンとの併用が可能なので、1 つの reducer ごとに createAction, createReducer を使った reducer に差し替えしていくことが可能。  
https://github.com/tyankatsu0105/move-from-redux-to-rtk/commit/f87789b830103a0157cba1bdc6322dd51ee8b487

## step4

### createSelector

RTK は reselect の createSelector をそのまま利用しているので互換性がある。
全ての createSelector を RTK のものを利用する。

```diff
- import { createSelector } from "reselect";
+ import * as ReduxToolkit from "@reduxjs/toolkit";

import { RootState } from "../../../index";

const featureState = (state: RootState) => state.domain.todos.detail;

- export const todoSelector = createSelector(featureState, (state) => ({
+ export const todoSelector = ReduxToolkit.createSelector(
  featureState,
  (state) => ({
    id: state.id,
    description: state.description,
    isDone: state.isDone,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
  })
);

```
