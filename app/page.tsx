import { Link } from "@nextui-org/link"
import { Snippet } from "@nextui-org/snippet"
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme"
import { siteConfig } from "@/config/site"
import { title, subtitle } from "@/components/primitives"
import { GithubIcon } from "@/components/icons"
import Test from "@/components/test"

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center ">
                <h1 className={title({ color: "violet", fullWidth: true })}>
                    奴隷&nbsp;
                </h1>
                <h1 className={title()}>と&nbsp;</h1>
                <h1 className={title({ color: "blue" })}>ニート&nbsp;</h1>
            </div>
            <Test />

            <div className="flex gap-3">
                <Link
                    isExternal
                    href={siteConfig.links.docs}
                    className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                    })}
                >
                    Documentation
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>

            <div className="mt-8">
                <Snippet hideSymbol hideCopyButton variant="flat">
                    <span>
                        Get started by editing{" "}
                        <Code color="primary">app/page.tsx</Code>
                    </span>
                </Snippet>
            </div>
        </section>
    )
}
