import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components = [
  {
    section: "Institucional",
    items: [
      {
        title: "Sobre nós",
        href: "/",
        description: "Conheça mais sobre nossa história e valores.",
      },
      {
        title: "Serviços",
        href: "/servicos",
        description: "Soluções empresariais para transformar o seu negócio.",
      },
      {
        title: "Carreiras",
        href: "/carreiras",
        description: "Junte-se à nossa equipe e cresça com a gente.",
      },
      {
        title: "Contato",
        href: "/contato",
        description: "Entre em contato conosco para mais informações.",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Respostas para as perguntas mais frequentes.",
      },
    ],
  },
]

export function NavigationHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItem key={component.section}>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              {component.section}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-xs gap-2 p-2">
                {component.items.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"
