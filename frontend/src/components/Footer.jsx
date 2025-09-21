import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Bank</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C0.593 0 0 0.593 0 1.324v21.352C0 23.407 0.593 24 1.324 24h11.494V14.708h-3.13V11.08h3.13V8.41c0-3.1 1.892-4.788 4.657-4.788 1.324 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.762v2.313h3.587l-.467 3.628h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 0.593 23.407 0 22.676 0z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.837 9.837 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.555A4.897 4.897 0 01.96 9.1v.062a4.917 4.917 0 003.946 4.818 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.905 13.905 0 007.548 2.212c9.056 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.605 0 4.269 2.373 4.269 5.459v6.284zM5.337 7.433a2.062 2.062 0 01-2.063-2.063c0-1.14.924-2.063 2.063-2.063s2.063.923 2.063 2.063a2.062 2.062 0 01-2.063 2.063zM6.854 20.452H3.821V9h3.033v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.453C0 23.208.792 24 1.771 24h20.453C23.208 24 24 23.208 24 22.225V1.771C24 .792 23.208 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
