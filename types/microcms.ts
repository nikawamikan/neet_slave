export interface Base {
    id: string
    createdAt: string // 作成日
    updatedAt: string // 更新日
    publishedAt: string // 公開日
    revisedAt: string // 改訂日
}

export interface Thumbnail {
    url: string // 画像URL
    width: number // 幅
    height: number // 高さ
}

export interface Tag extends Base {
    name: string // タグ名
    description: string // 説明
}

export interface Blog extends Base {
    title: string // タイトル
    description: string // 説明
    content: string // 内容
    tags: Tag[] // タグ
    writer: string[] // 著者
    thumbnail: Thumbnail // サムネイル
    relation: Blog[] // 関連記事
}
