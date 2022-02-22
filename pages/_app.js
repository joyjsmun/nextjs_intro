import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({Component,pageProps}){
    return(
        <>
            <NavBar />
            <h3>it works everywhere</h3>
            <Component {...pageProps} />
            <style jsx global>{`
              a{
                color:white
            }
            `}  
            </style>
       </>
    )
}