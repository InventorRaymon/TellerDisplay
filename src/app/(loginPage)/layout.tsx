/** @format */
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/loginSignUp.css';

export const metadata = {
  title: "QMS",
  description: "Queue Management System",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div style={{display: "flex", fontFamily: "Roboto, sans-serif"}}>
          <main className="w-100" >{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
