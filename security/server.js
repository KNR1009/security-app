// Expressライブラリを読み込む
const express = require("express");

const api = require("../routes/api");

// Expressアプリケーションを生成する
const app = express();

// サーバーがリッスンするポートを設定する
const port = 3000;

// 静的ファイルを提供するために使われる
app.use("/api", api);
// ルートパス('/')にGETリクエストが来た時のハンドラを設定する
// このハンドラは "Top Page" という文字列をレスポンスとして返す
app.get("/", (req, res, next) => {
  res.end("Top Page");
});

// 指定したポートでサーバーを起動し、起動成功をコンソールに表示する
app.listen(port, () => {
  console.log("サーバー起動");
});
