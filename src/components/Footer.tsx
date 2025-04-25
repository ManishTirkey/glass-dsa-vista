
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto pt-8 pb-6 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} GlassDSA. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
