"use client"

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar"
import { Image } from "@nextui-org/image"

import { ThemeSwitch } from "@/components/theme-switch"

import { link as linkStyles } from "@nextui-org/theme"
import { useReducer, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import NextLink from "next/link"
import clsx from "clsx"

import { Logo } from "@/components/icons"
import { isContext } from "vm"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useReducer(
        (current: boolean) => !current,
        false
    )
    // blogのiconをパス名で判定して表示を変える

    const pathname = usePathname()
    const [blogIcon, setBlogIcon] = useState("icon.svg")
    useEffect(() => {
        if (pathname.includes("/slave")) {
            setBlogIcon("neet.svg")
        } else {
            setBlogIcon("icon.svg")
        }
    }, [pathname])

    const menu = siteConfig.navItems.map((item) => (
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
    ))

    return (
        <NextUINavbar
            maxWidth="xl"
            position="sticky"
            className="font-makinas"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="basis-1/4" justify="start">
                <NavbarBrand as="li" className="max-w-fit gap-3">
                    <NextLink
                        className="flex items-center justify-start gap-1"
                        href="/"
                    >
                        <Image alt="test" src={blogIcon} height={15} />
                        <p className="font-bold text-inherit">Slave & Neet</p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:basis-1/2" justify="center">
                <ul className="ml-2 hidden justify-start gap-4 md:flex">
                    {menu}
                </ul>
            </NavbarContent>

            <NavbarContent className="basis-1/4" justify="end">
                <ThemeSwitch className="transition-all hover:animate-wiggle" />
                <NavbarMenuToggle className="md:hidden" />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-32 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem
                            className="text-center"
                            key={`${item.label}-${index}`}
                        >
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "mb-6 font-makinas text-2xl"
                                )}
                                onClick={() => setIsMenuOpen()}
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}
