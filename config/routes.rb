Rails.application.routes.draw do
  # ヘルスチェック
  get "/health_check", to: "health_check#index"
  # 記事一覧
  get "/blogs", to: "blogs#index"
  # 記事詳細
  get "/blogs/:id", to: "blogs#show"
  # 記事作成
  post "/blogs", to: "blogs#create"
end
