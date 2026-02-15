import { useEffect, useRef } from "react";

export default function CodeRenderer({ code }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!code || !iframeRef.current) return;

    const cleanedCode = code
      .replace(/export default .*;/g, "")
      .replace(/import .*;/g, "");

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <style>
            body { margin: 0; font-family: sans-serif; padding: 16px; }
          </style>
        </head>
        <body>
          <div id="root"></div>

          <script type="text/babel">
            try {
      ${cleanedCode}

      const RootComponent =
        typeof App !== "undefined"
          ? App
          : typeof GeneratedUI !== "undefined"
          ? GeneratedUI
          : () => <div>No root component found</div>;

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<RootComponent />);
    } catch (err) {
      document.body.innerHTML =
        "<pre style='color:red'>" + err.message + "</pre>";
    }
          </script>
        </body>
      </html>
    `;

    iframeRef.current.srcdoc = html;
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      title="preview"
      className="w-full h-full rounded-xl border border-white/10 bg-white"
      sandbox="allow-scripts"
    />
  );
}
