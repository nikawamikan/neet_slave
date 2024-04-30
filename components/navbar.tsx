import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar"
import { Button } from "@nextui-org/button"
import { Kbd } from "@nextui-org/kbd"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"

import { link as linkStyles } from "@nextui-org/theme"

import { siteConfig } from "@/config/site"
import NextLink from "next/link"
import clsx from "clsx"

import { SearchIcon } from "@/components/icons"

import { Logo } from "@/components/icons"

export const Navbar = () => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            type="search"
        />
    )

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="fixed" justify="start">
                <NavbarBrand as="li" className="max-w-fit gap-3">
                    <NextLink
                        className="flex items-center justify-start gap-1"
                        href="/"
                    >
                        <Logo />
                        <p className="font-bold text-inherit">ACME</p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="sm:basis-full" justify="center">
                <ul className="ml-2 hidden justify-start gap-4 md:flex">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:font-medium data-[active=true]:text-primary"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="basis-1 pl-4 md:hidden" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index ===
                                            siteConfig.navMenuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}
