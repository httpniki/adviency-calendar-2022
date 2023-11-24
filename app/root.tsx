import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
   isRouteErrorResponse,
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
   useRouteError,
} from '@remix-run/react';
import { GiftProvider } from './context/GiftsContext';
import styles from './styles/index.css'

export const links: LinksFunction = () => [
   ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
   { rel: 'stylesheet', href: styles }
];

export default function App() {
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
            <script src="https://app.embed.im/snow.js" defer/>
         </head>
         <body>
            <GiftProvider>
               <Outlet />
            </GiftProvider>
            <div id="modal-root"></div>

            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   );
}


export function ErrorBoundary() {
   const error = useRouteError()

   if(isRouteErrorResponse(error)) {
      return(
         <div>
            <h1>Oops</h1>
            <p>Status: {error.status}</p>
            <p>{error.data.message}</p>
         </div>
      )
   } 

   return(
      <div>
         <h1>Uh oh ...</h1>
         <p>Something went wrong.</p>
      </div>
   )
}
