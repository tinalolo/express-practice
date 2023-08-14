# Express 練習
這邊是 Express 的練習專案  
請將這個專案 fork 回去練習

## 事前準備
為了確認後端的 API 有正常運作  
建議安裝 [Postman](https://www.postman.com/downloads/) 來測試 resuful api  
也可以使用 nodejs 的 `http` 、 `axios` 等可以發 Request 的模組來呼叫 API 測試

> Postman 不用特別申請帳號，第一次打開時可以跳過登入

## 如何啟動專案
1. `npm install`
2. `npm run dev`
    > 專案已經配置好 VSCode Debug 配置  
    > 所以也可以在 VSCode 使用 `F5` 進入 Debug 模式

啟動專案後，只要修改檔案，專案就會自動重啟，並套用新的程式碼

## 如何編譯專案
這個專案是使用 Typescript 所撰寫  
因此若要直接以 node 執行，需要把 Typescript 編譯成 Javascript  
步驟如下：
1. `npm run build`
2. `npm start`  
    > 這邊的 `npm start` 對應 `start` 腳本，實際上就是呼叫 `node dist/app.js`  
    > 編譯後也可以直接使用 `node dist/app.js` 啟動專案

> 編譯後的專案不會因為檔案修改而更新  
> 若要在 Javascript 執行的狀況下進行更新重啟，可以上網搜尋 `nodemon` 這個套件

## 專案腳本
專案提供了一些腳本方便開發：
* `start`: 以 node 執行編譯成 Javascript 的專案
* `build`: 編譯 Typescript 專案為 Javascript 專案
* `lint`: 使用 eslint 檢查程式碼風格
* `dev`: 使用 `ts-node` 套件直接執行 Typescript 專案

> 這些腳本都定義在 `package.json`  
> 可以使用 `npm run <script>` 執行

## 作業
這份專案在 `src/models/user.model.ts` 提供了幾個寫死的使用者資料
並提供了 `getAll()` 的方法

請利用+改寫這個 Model 並完成以下內容：
* 讓 express 監聽 `.env` 裡設定的 PORT 號
* 設計一個 GET `/users` API 取得所有使用者的資料
* 設計一個 GET `/users/{userId}` 的 API 取得指定使用者的資料
* 設計一個 POST `/users/search` 的 API，能夠查詢使用者的資料  
    這個 API 要接受以下 POST 參數並利用這些參數實現功能：
    * `sort`(必填、可選都接受): 升冪或降冪排序使用者 ID  
        數值為 `asc` 或 `desc`，限定小寫
    * `name`(必填): 過濾使用者的名稱  
        e.g. 假設 `name` 設定成 `ne`, 則名子內包含 `ne` 的使用者資料才會被列出來
    
    要串驗證機制確定使用者有正確的把參數填入
* 設計一個驗證用的 Middleware 來限制以上 API 的存取
    驗證的規則是：  
    Header 必須要包含一個 `authorization` 的欄位，其內容為 `auth-token`  
    一旦驗證失敗，Server 就會回傳 `401` 錯誤  
* 設計一個記錄用的 Middleware 紀錄 Request 的資訊，包含：
    * Request 收到當下的時間
    * Request 的 Method
    * Request 的 API 路徑

## 檔案放置要求
請依照程式的功能分類將原始碼放入對應的資料夾
* Service: 請放入 services 資料夾
* Model: 請放入 models 資料夾
* Controller: 請放入 controllers 資料夾
* Middleware: 請放入 middlewares 資料夾
* 驗證 Schema: 請放入 validations 資料夾
* Route: 請放入 routes 資料夾
