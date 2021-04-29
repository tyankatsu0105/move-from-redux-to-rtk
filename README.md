Redux から Redux Toolkit への移行を段階的に行うガイド

- https://www.reddit.com/r/reactjs/comments/huw2kq/migration_to_reduxtoolkit/

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
- store を元に todo リストを描画する
- フォームに todo の詳細を入力すると、mutation を飛ばして todo を追加する。レスポンスを store に格納する
- isDone を更新すると、mutation を飛ばして todo を更新する。レスポンスを store に格納する
- remove をクリックすると mutation を飛ばして todo を削除する。

# ガイド

## step1

まだ Redux Toolkit に移行できてない todo アプリケーション

## step2
