"use client";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            Developed by{" "}
            <a
              href="https://github.com/saheen-shuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Saheen Alam Shuvo
            </a>
          </p>

          <p
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Last Updated: 13 April 2026
          </p>
        </div>

        <p
          className="text-center text-muted-foreground/60 text-xs mt-6"
        >
          © {new Date().getFullYear()} Saheen Alam Shuvo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;