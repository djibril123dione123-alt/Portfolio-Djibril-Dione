export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Djibril DIONE. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Développé avec React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
