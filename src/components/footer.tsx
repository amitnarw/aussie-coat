export default function Footer() {
    return (
      <footer className="w-full border-t bg-card text-card-foreground">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aussie Coat. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  