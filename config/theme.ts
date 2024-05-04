// tailwindcss などで使用する theme の設定をここで行います。

export const themes = {
    light: {
        colors: {
            background: "#f4faff",
            foreground: "#373535",
            divider: "#c1c7cc",
            focus: "#FFA500",
            primary: {
                DEFAULT: "#3778b8",
                foreground: "#d8ffff",
            },
            secondary: {
                DEFAULT: "#ff7600",
                foreground: "#904a00",
            },
            // success: {
            //   DEFAULT: "#00c851",
            //   foreground: "#F4F7F7",
            // },
            // warning: {
            //   DEFAULT: "#ffbb33",
            //   foreground: "#F4F7F7",
            // },
            // danger: {
            //   DEFAULT: "#ff4444",
            //   foreground: "#F4F7F7",
            // },
        },
    },
    dark: {
        colors: {
            background: "#0B1E3F",
            foreground: "#efefef",
            divider: "#c1c7cc",
            focus: "#FFA500",
            primary: {
                DEFAULT: "#3676c6",
                foreground: "#dbffff",
            },
            secondary: {
                DEFAULT: "#ff7600",
                foreground: "#8d1000",
            },
            // success: {
            //   DEFAULT: "#00c851",
            //   foreground: "#F4F7F7",
            // },
            // warning: {
            //   DEFAULT: "#ffbb33",
            //   foreground: "#F4F7F7",
            // },
            // danger: {
            //   DEFAULT: "#ff4444",
            //   foreground: "#F4F7F7",
            // },
        },
    },
}
