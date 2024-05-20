export function toDate(dateString: string): Date {
    return new Date(dateString)
}

export function toJpDateStr(dateString: string): string {
    const date = toDate(dateString)
    return date.toLocaleDateString("ja-JP", {
        dateStyle: "short",
        timeZone: "Asia/Tokyo",
    })
}
