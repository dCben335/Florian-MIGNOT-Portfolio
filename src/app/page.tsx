import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="https://picsum.photos/1920" style={{
        width: "100vw",
        aspectRatio: "16/9",
        objectFit: "cover",
      
      }} alt="random" />

      <section style={{
        background: "#180444",
        padding: "5rem 10vw",
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "3fr 1fr",
        color: "white",
      }}>
        <div>
          <h2>A props de moi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus pariatur magnam aut atque ea, optio, animi at magni voluptatem fugit qui ut doloribus quaerat maiores explicabo nesciunt facilis earum aliquid distinctio ipsam aliquam provident blanditiis. Nemo qui iste odit consectetur beatae commodi itaque nisi. Officia aspernatur, unde ad, quidem molestiae laudantium labore in mollitia delectus quaerat harum laborum. Culpa, eveniet. Deleniti neque fugit, dignissimos, est in necessitatibus sequi rerum mollitia ut magni pariatur similique sed ipsa architecto, saepe voluptas assumenda officiis incidunt debitis esse! Rem laborum dicta error iste labore quibusdam enim, similique facere repudiandae nihil pariatur, tempora magni minima incidunt placeat fugiat officia eligendi, cupiditate sint voluptatibus? Laborum, tempore similique placeat voluptatibus cum minima modi corporis vitae dicta iure fugiat culpa nesciunt vel minus consectetur repellendus soluta natus, aliquid magnam doloribus accusantium asperiores deleniti? Distinctio enim iure iste necessitatibus minima perferendis accusantium dolorum. A rerum facere eligendi pariatur iure. Aspernatur, est? Exercitationem iste in quidem necessitatibus repellendus fugit consectetur optio asperiores nulla et, perspiciatis dolor facilis obcaecati cum explicabo expedita blanditiis iure magnam accusantium neque nesciunt. Reiciendis ea quod cumque quia necessitatibus nemo similique architecto voluptatem sit iusto facilis, magnam, vitae corporis quasi fugiat laudantium sint culpa velit.</p>
        </div>
        <div>
          <img src="https://picsum.photos/200" alt="random" />
        </div>
      </section>
    </main>
  );
}
