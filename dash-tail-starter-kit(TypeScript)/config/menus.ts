
import {
  DashBoard,
  Chart
} from "@/components/svg";


export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;

  
}

export const menusConfig = {
  mainNav: [
      {
      title: "Vazio",
      icon: DashBoard,
      href: "/blank",
    },
    {
      title: "Diagrama",
      icon: Chart,
      child: [
        {
          title: "Visão Geral",
          href: "/diagram/reactflow/overview",
          icon: "heroicons:information-circle",
        },
        {
          title: "Árvore Organizacional",
          href: "/diagram/reactflow/organization-tree",
          icon: "heroicons:information-circle",
        },
        {
          title: "Atualizar Nó",
          href: "/diagram/reactflow/updating",
          icon: "heroicons:information-circle",
        },
        {
          title: "Adicionar Nó",
          href: "/diagram/reactflow/add-node",
          icon: "heroicons:information-circle",
        },
        {
          title: "Flow Horizontal",
          href: "/diagram/reactflow/horizontal-flow",
          icon: "heroicons:information-circle",
        },
        {
          title: "Árvore Dagree",
          href: "/diagram/reactflow/dagree-tree",
          icon: "heroicons:information-circle",
        },
        {
          title: "Baixar Diagrama",
          href: "/diagram/reactflow/download-diagram",
          icon: "heroicons:information-circle",
        },
        {
          title: "Com Minimapa",
          href: "/diagram/reactflow/with-minimap",
          icon: "heroicons:information-circle",
        },
        {
          title: "Com Plano de Fundo",
          href: "/diagram/reactflow/with-background",
          icon: "heroicons:information-circle",
        },
        {
          title: "Posição do Painel",
          href: "/diagram/reactflow/panel-position",
          icon: "heroicons:information-circle",
        },
      ],
    }
  ],
  sidebarNav: {
    modern: [
      {
        title: "Vazio",
        icon: DashBoard,
        href: "/blank",
      },
      {
        title: "Diagrama",
        icon: Chart,
        child: [
          {
            title: "Visão Geral",
            href: "/diagram/reactflow/overview",
            icon: "heroicons:information-circle",
          },
          {
            title: "Árvore Organizacional",
            href: "/diagram/reactflow/organization-tree",
            icon: "heroicons:information-circle",
          },
          {
            title: "Atualizar Nó",
            href: "/diagram/reactflow/updating",
            icon: "heroicons:information-circle",
          },
          {
            title: "Adicionar Nó",
            href: "/diagram/reactflow/add-node",
            icon: "heroicons:information-circle",
          },
          {
            title: "Flow Horizontal",
            href: "/diagram/reactflow/horizontal-flow",
            icon: "heroicons:information-circle",
          },
          {
            title: "Árvore Dagree",
            href: "/diagram/reactflow/dagree-tree",
            icon: "heroicons:information-circle",
          },
          {
            title: "Baixar Diagrama",
            href: "/diagram/reactflow/download-diagram",
            icon: "heroicons:information-circle",
          },
          {
            title: "Com Minimapa",
            href: "/diagram/reactflow/with-minimap",
            icon: "heroicons:information-circle",
          },
          {
            title: "Com Plano de Fundo",
            href: "/diagram/reactflow/with-background",
            icon: "heroicons:information-circle",
          },
          {
            title: "Posição do Painel",
            href: "/diagram/reactflow/panel-position",
            icon: "heroicons:information-circle",
          },
        ],
      }
    ],
    classic: [
       {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Vazio",
        icon: DashBoard,
        href: "/blank",
      },
      {
        title: "Diagrama",
        icon: Chart,
        child: [
          {
            title: "Visão Geral",
            href: "/diagram/reactflow/overview",
            icon: "heroicons:information-circle",
          },
          {
            title: "Árvore Organizacional",
            href: "/diagram/reactflow/organization-tree",
            icon: "heroicons:information-circle",
          },
          {
            title: "Atualizar Nó",
            href: "/diagram/reactflow/updating",
            icon: "heroicons:information-circle",
          },
          {
            title: "Adicionar Nó",
            href: "/diagram/reactflow/add-node",
            icon: "heroicons:information-circle",
          },
          {
            title: "Flow Horizontal",
            href: "/diagram/reactflow/horizontal-flow",
            icon: "heroicons:information-circle",
          },
          {
            title: "Árvore Dagree",
            href: "/diagram/reactflow/dagree-tree",
            icon: "heroicons:information-circle",
          },
          {
            title: "Baixar Diagrama",
            href: "/diagram/reactflow/download-diagram",
            icon: "heroicons:information-circle",
          },
          {
            title: "Com Minimapa",
            href: "/diagram/reactflow/with-minimap",
            icon: "heroicons:information-circle",
          },
          {
            title: "Com Plano de Fundo",
            href: "/diagram/reactflow/with-background",
            icon: "heroicons:information-circle",
          },
          {
            title: "Posição do Painel",
            href: "/diagram/reactflow/panel-position",
            icon: "heroicons:information-circle",
          },
        ],
      }
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]