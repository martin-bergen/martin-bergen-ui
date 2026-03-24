import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import { BergetLogotype } from "../../atoms/berget-logotype";
import { Link } from "../../atoms/link";
import { Stack } from "../../atoms/stack";
import { Icon } from "../../atoms/icon";
import { Select, type SelectOption } from "../../atoms/select";

const headerVariants = cva(
  "sticky top-0 z-50 bg-berget-backdrop/80 backdrop-blur-md border-b border-berget-border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        transparent: "border-transparent bg-transparent backdrop-blur-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface HeaderLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  active?: boolean;
}

export interface HeaderProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  logo?: React.ReactNode;
  links: HeaderLink[];
  languageOptions: SelectOption[];
  loginButton?: React.ReactNode;
  ctaButton?: React.ReactNode;
  currentLanguage?: string;
  onLanguageChange?: (value: string) => void;
}

const HeaderContext = React.createContext<{
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

const useHeaderContext = () => React.useContext(HeaderContext);

const HeaderLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props}>
    {children}
  </div>
));
HeaderLogo.displayName = "HeaderLogo";

const HeaderNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    links: HeaderLink[];
  }
>(({ className, links, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("hidden md:flex items-center gap-fluid-lg", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          variant={link.active ? "primary" : "default"}
          size="sm"
          className={cn(
            "relative transition-all duration-200",
            link.active && "font-medium",
          )}
        >
          {link.icon && (
            <span className="inline-flex items-center mr-2">
              <Icon icon={link.icon} size={16} />
            </span>
          )}
          {link.label}
        </Link>
      ))}
    </div>
  );
});
HeaderNav.displayName = "HeaderNav";

const HeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    languageOptions: SelectOption[];
    currentLanguage?: string;
    onLanguageChange?: (value: string) => void;
    loginButton?: React.ReactNode;
    ctaButton?: React.ReactNode;
  }
>(
  (
    {
      className,
      languageOptions,
      currentLanguage,
      onLanguageChange,
      loginButton,
      ctaButton,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("hidden md:flex items-center gap-fluid-md", className)}
        {...props}
      >
        {languageOptions.length > 0 && (
          <Select
            options={languageOptions}
            value={currentLanguage}
            onValueChange={onLanguageChange}
            variant="subtle"
            size="sm"
            className="w-32"
          />
        )}
        {loginButton}
        {ctaButton}
      </div>
    );
  },
);
HeaderActions.displayName = "HeaderActions";

const MobileMenuButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useHeaderContext();

  return (
    <div
      ref={ref}
      className={cn(
        "md:hidden flex items-center justify-center w-8 h-8 rounded-full",
        "cursor-pointer transition-all duration-200",
        "hover:bg-berget-brand-slate/20",
        className,
      )}
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      {...props}
    >
      {isMobileMenuOpen ? (
        <Icon icon={X} size={16} />
      ) : (
        <Icon icon={Menu} size={16} />
      )}
    </div>
  );
});
MobileMenuButton.displayName = "MobileMenuButton";

const MobileMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    links: HeaderLink[];
    languageOptions: SelectOption[];
    currentLanguage?: string;
    onLanguageChange?: (value: string) => void;
    loginButton?: React.ReactNode;
    ctaButton?: React.ReactNode;
  }
>(
  (
    {
      className,
      links,
      languageOptions,
      currentLanguage,
      onLanguageChange,
      loginButton,
      ctaButton,
      ...props
    },
    ref,
  ) => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useHeaderContext();

    if (!isMobileMenuOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-berget-background border-b border-berget-border shadow-berget-lg",
          className,
        )}
        {...props}
      >
        <Stack direction="column" gap={0} className="py-fluid-md">
          <div className="px-fluid-md pb-fluid-md border-b border-berget-border/50">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant={link.active ? "primary" : "default"}
                className={cn(
                  "w-full py-3 px-4 rounded-lg transition-all duration-200 hover:bg-berget-brand-cloud/[0.02]",
                  link.active && "bg-berget-brand-moss/10 font-medium",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && (
                  <span className="inline-flex items-center mr-2">
                    <Icon icon={link.icon} size={16} />
                  </span>
                )}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-fluid-md py-fluid-md">
            {languageOptions.length > 0 && (
              <div className="mb-fluid-md">
                <Select
                  options={languageOptions}
                  value={currentLanguage}
                  onValueChange={onLanguageChange}
                  variant="subtle"
                  size="sm"
                  className="w-full"
                />
              </div>
            )}
            {loginButton && (
              <div className="mb-fluid-md w-full">{loginButton}</div>
            )}
            {ctaButton && <div className="w-full">{ctaButton}</div>}
          </div>
        </Stack>
      </div>
    );
  },
);
MobileMenu.displayName = "MobileMenu";

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      variant,
      logo,
      links,
      languageOptions,
      loginButton,
      ctaButton,
      currentLanguage,
      onLanguageChange,
      ...props
    },
    ref,
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isMobileMenuOpen]);

    return (
      <HeaderContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
        <header
          ref={ref}
          className={cn(headerVariants({ variant }), className)}
          {...props}
        >
          <div className="w-full max-w-screen-2xl mx-auto px-fluid-md">
            <Stack
              direction="row"
              align="center"
              justify="between"
              className="h-16"
            >
              <HeaderLogo>
                {logo || <BergetLogotype variant="white" size={32} />}
              </HeaderLogo>

              <HeaderNav links={links} />

              <Stack direction="row" align="center" gap={3}>
                <HeaderActions
                  languageOptions={languageOptions}
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                  loginButton={loginButton}
                  ctaButton={ctaButton}
                />

                {ctaButton && <div className="md:hidden">{ctaButton}</div>}

                <MobileMenuButton />
              </Stack>
            </Stack>
          </div>

          <MobileMenu
            links={links}
            languageOptions={languageOptions}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            loginButton={loginButton}
            ctaButton={ctaButton}
          />
        </header>
      </HeaderContext.Provider>
    );
  },
);
Header.displayName = "Header";

export {
  Header,
  HeaderLogo,
  HeaderNav,
  HeaderActions,
  MobileMenuButton,
  MobileMenu,
  headerVariants,
};
