export interface Base {
    id: string
    createdAt: string // 作成日
    updatedAt: string // 更新日
    publishedAt: string // 公開日
    revisedAt: string // 改訂日
}

export interface Tag extends Base {
    name: string // タグ名
}

export interface Blog extends Base{
    title: string // タイトル
    description: string // 説明
    content: string // 内容
    tags: Tag[] // タグ
    writer: string[] // 著者
}


