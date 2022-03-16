import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, LinksFunction} from "remix";
import {DocumentProps, IError, ILayout} from '~/types/IRoot'
import {Navbar} from './components/navbar'
import styles from '~/styles/app.css'
import {Footer} from "~/components/footer";

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styles}]
}

export default function App() {
    return (
        <Document title={"My App"}>
            <Layout>
                <Outlet/>
            </Layout>
        </Document>
    );
}

export const Document = ({children, title}: DocumentProps) => {
    return (
        <html lang="tr">
        <head>
            <title>{title ? title : "Remix App"}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        {process.env.NODE_ENV == "development" ? <LiveReload/> : null}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    )
}

export const Layout = ({children}: ILayout) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export const ErrorBoundary = ({error}: IError) => {
    return (
        <Document>
            <Layout>
                <div>
                    <h1>{error.message.toString().trim()}</h1>
                </div>
            </Layout>
        </Document>
    )
}




