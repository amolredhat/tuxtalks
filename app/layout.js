import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Amol Shinde - DevOps Guy',
  description: 'Amol Shinde Portfolio and Blog - SRE & DevOps Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" />
        <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link href="/css/resume.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body id="page-top">
        <Sidebar />
        <div className="container-fluid p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
