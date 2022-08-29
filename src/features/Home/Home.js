import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Auth/AuthContext";

import styles from "./Home.module.css";

export function Home() {
   const { accessToken } = useAuthContext();
   const {user} = useAuthContext();
   return (
      <>
         <section className={styles['main-container']}>
            <h1>Welcome to the bar!</h1>
               <div className={styles['home-container']}>
                  <div className={styles['home-text']}>
                     <h3>The values that shape our community:</h3>
                     <div>
                        <h4>Customer FIRST</h4>
                           Everything we do, say, and feel starts with our customers! Every idea, program, project, and interaction has a customer-first mindset…and we don’t stop until the customer says WOW!
                     </div>
                     <div>
                        <h4>Fearless & Fast</h4>
                           We always strive to succeed, but we are not afraid to fail! (And when we do fail, we learn from our mistakes.) We are willing to take necessary risks because our mission is an urgent one.
                     </div>
                     <div>
                        <h4>Inclusive</h4>
                           We honor and encourage diversity, and we respect differences! We collaborate, share goals, support each other, and have fun and celebrate our wins.               
                     </div>
                     <div>
                        <h4>Results Driven</h4>
                        We are passionate about results…whether it’s your body or our business. So, like you, we set ambitious goals, measure our performance, and strive to improve every single day.               
                     </div>
                     <div>
                        <h4>Serving Communities</h4>
                        We give back to the communities to which we owe our success: our customers, colleagues, partners, family, friends, and neighbors.               
                     </div>
                     <div>
                        <h4>Trust & Accountability</h4>
                        We empower and hold each other accountable to deliver on commitments and trust each other's positive intent.               
                     </div>
                     <div>
                     { !user && (
                        <NavLink className={styles['register']} to="/register">Become a member of our community</NavLink>
                    )}
                     </div>
                  </div>

                  <div className={styles['pic-container']}>
                     <img className={styles['barpic']} alt="main-pic" src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80" />
                  </div>
               </div>
         </section>
      </>
   ); 
}