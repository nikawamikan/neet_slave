export interface Blog {
    id: string
    createdAt: Date // 作成日
    updatedAt: Date // 更新日
    publishedAt: Date // 公開日
    revisedAt: Date // 改訂日
    title: string // タイトル
    description: string // 説明
    content: string // 内容
    tags: { // タグ
        id: string // タグID
        createdAt: Date // 作成日
        updatedAt: Date // 更新日
        publishedAt: Date // 公開日
        revisedAt: Date // 改訂日
        name: string // タグ名
    }
    writer: string[] // 著者
}
