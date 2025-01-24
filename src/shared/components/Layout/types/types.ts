export interface MobileMenuItem {
    label: string;
    icon: React.ReactNode;
    path: string;
    onClick: () => void;
}

export interface MobileMenuProps {
    menuItems: MobileMenuItem[];
    anchorEl: HTMLElement | null;
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
}

export interface DesktopMenuProps {
    handleLogout: () => void;
}

export interface MenuItem {
    label: string;
    icon: React.ReactNode;
    path?: string;
    onClick?: () => void;
}
