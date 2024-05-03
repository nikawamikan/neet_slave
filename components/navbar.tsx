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
import { ThemeSwitch } from "@/components/theme-switch"
import { Link } from "@nextui-org/link"

import { link as linkStyles } from "@nextui-org/theme"
import { useReducer } from "react"

import { siteConfig } from "@/config/site"
import NextLink from "next/link"
import clsx from "clsx"

import { Logo } from "@/components/icons"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useReducer(
        (current: boolean) => !current,
        false
    )

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
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="basis-1/4" justify="start">
                <NavbarBrand as="li" className="max-w-fit gap-3">
                    <NextLink
                        className="flex items-center justify-start gap-1"
                        href="/"
                    >
                        <Logo />
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
                <ThemeSwitch />
                <NavbarMenuToggle className="md:hidden" />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-20 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem
                            className="text-center"
                            key={`${item.label}-${index}`}
                        >
                            <Link
                                color="secondary"
                                onPress={() => setIsMenuOpen()}
                                href={item.href}
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
