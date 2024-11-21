export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        {children}
        <ul>
          <li>just for about sub/children path</li>
          <li>just for about sub/children path</li>
        </ul>
      </>
    </html>
  );
}
