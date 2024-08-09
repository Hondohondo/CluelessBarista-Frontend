import HeaderComponent from "../components/HeaderComponent.jsx";
import NavComponent from "../components/NavComponent.jsx";

function HomePage() {

    return (
       <>

           <HeaderComponent />
           <div className="home-page-container">
               <NavComponent />
               <main className="main">
                   <h2>Welcome to The Clueless Barista 🤷</h2>
                   <p>

                       At The Clueless Barista, we believe that coffee should be an adventure, not just a routine. Whether you’re a seasoned coffee lover or someone who’s just starting to explore the world of beans and brews, we’re here to make your coffee journey a little more fun and a lot more flavorful. Our quirky name reflects our approach—embracing the unknown, experimenting with new flavors, and most importantly, enjoying every sip along the way. So come on in, ask us anything, and let’s get brewing. After all, the best discoveries often start with a little curiosity and a dash of cluelessness.</p>

               </main>
           </div>




       </>
    )
}

export default HomePage;