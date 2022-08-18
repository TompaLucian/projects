import styles from "./Home.module.css";

export function Home() {
   return (
      <>
         <section className={styles['main-container']}>
            <h1>Welcome to the bar!</h1>
            <div className={styles['barpic']}>
               <img src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>

         </section>
      </>
   ); 
}